import { Flex } from "@/once-ui/components";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { baseURL, renderContent } from "@/app/resources";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import fs from "fs";
import path from "path";

// Utility function to shuffle an array
function shuffleArray(array: any[]) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

export async function generateMetadata(
	{params: {locale}}: { params: { locale: string }}
) {
	// Fetch translations for the current locale
	const t = await getTranslations();
	const { gallery } = renderContent(t);

	// Set metadata variables for the gallery page
	const title = gallery.title;
	const description = gallery.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	// Return metadata configuration for the gallery page, including Open Graph and Twitter card settings
	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}/gallery`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function Gallery(
	{ params: {locale}}: { params: { locale: string }}
) {
	// Set the locale dynamically for the current request
	unstable_setRequestLocale(locale);

	// Fetch translations using hooks for rendering text content
	const t = useTranslations();
	const { gallery, person } = renderContent(t);

	// Get all images from the "public/images/gallery" directory
	const imagesDirectory = path.join(process.cwd(), 'public/images/gallery');
	const imageFiles = fs.readdirSync(imagesDirectory);
	let images = imageFiles.map((fileName) => ({
		src: `/images/gallery/${fileName}`, // Use a relative path for each image
		alt: fileName, // Use the file name as the alt text for the image
		orientation: fileName.startsWith("h-") ? "horizontal" : "vertical" as "horizontal" | "vertical", // Determine orientation based on file naming convention (h- for horizontal, v- for vertical)
	}));

	// Shuffle the images to mix horizontal and vertical orientations
	images = shuffleArray(images);

	return (
		<Flex fillWidth>
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'ImageGallery',
						name: gallery.title,
						description: gallery.description,
						url: `https://${baseURL}/gallery`,
						image: images.map((image) => ({
							'@type': 'ImageObject',
							url: image.src,
							description: image.alt,
						})), // Add dynamically generated images list to the JSON-LD
						author: {
							'@type': 'Person',
							name: person.name,
							image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`, // URL to the author's avatar image
							},
						},
					}),
				}}
			/>
			{/* Render the gallery using the MasonryGrid component, passing the images as a prop */}
			<MasonryGrid images={images} />
		</Flex>
	);
}
