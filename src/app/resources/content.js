import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Valeria",
  lastName: "Fonseca",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Ingeniera en Software",
  avatar: "/images/avatar.png",
  location: "America/Costa_Rica", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

/*const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}*/

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
];

const home = {
  label: "Inicio",
  title: `[3`,
  description: `G + V`,
  headline: <>para: Honey [3</>,
  subline: (
    <>
      ¡Feliz cumpleaños, amor! Este <InlineCode>website</InlineCode> fue creado
      para conservar una línea de tiempo de nuestra vida juntos y disfrutarlo
      siempre que queramos.💕 pd: tienes una carta de cum en "Publicaciones"
    </>
  ),
};

const about = {
  label: "Nuestra historia",
  title: "Nuestra historia",
  description: `nuestra historia inmortalizada`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Comienzo",
    description: (
      <>
        Nos conocimos por cosas del destino ❤️
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Noches de Minecraft",
    experiences: [
      {
        company: "Primera interacción",
        timeframe: "03 Nov 2020",
        role: "",
        achievements: [
          <>
            El día exacto que nos hablamos por primera vez, el día exacto que
            Lisa me invitó a UCRLand, fue un 3 de Noviembre en plena pandemia de
            Covid.{" "}
          </>,
          <>
            Cuando entre al servidor de minecraft, de las primeras cosas que
            dije fue "dnd", y usted dijo "dungeons and dragons?"
          </>,
          <>
            Me acuerdo que ese día nos empezaron a tirar items a Lisa y a mí, y
            ud estaba ahí.
          </>,
          <>
            En ese mismo servidor conocimos a Saurio, Danielito, Jose, Raptor,
            Kendrita y a otros.
          </>,
          <>
            Desde ese momento hasta los próximos 2 años te llamaba Rekt, por tu
            username RektbyNoob_.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-02/ucrland.png",
            alt: "minecraft UCRLand",
            width: 17,
            height: 8,
          },
        ],
      },
      {
        company: "Primera videollamada",
        timeframe: "19 Dic 2020",
        role: "",
        achievements: [
          <>
            La primera vez que nos vimos la cara fue en este día, en una llamada
            que hicimos Lisa, Kendrita, Jose, Raptor, Danielito, Cpasqui, ud y
            yo.
          </>,
          <>
            Yo estaba en la casa de mi papá en Santa Ana, usted estaba en su
            cuarto en Guápiles, y según ud me tenías en pantalla completa :3
          </>,
          <>
            En esos tiempos haciamos muchísimas llamadas, como estabamos en
            cuarentena y no se podá salir de la casa nos la pasabamos día y
            noche en discord jugando.
          </>,
          <>
            Quiero recordar que eras builder oficial del server de minecraft, y
            desde entonces te he visto construir cada vez mejor, lo haces muuy
            bien!
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-02/videollamada00.png",
            alt: "videollamada de los de UCRLand",
            width: 17,
            height: 8,
          },
        ],
      },
      {
        company: "Mensajes Privados",
        timeframe: "Ene 2021",
        role: "",
        achievements: [
          <>
            La primera vez que te escribí por privado (03 de Enero) fue porque
            me pediste una comisión de arte, me dijiste que te gustan los
            templarios y las galaxias.
          </>,
          <>
            Me dijiste que te gusta rajar los talentos de tus amigos y sea lo
            que sea que dibuje te va a gustar. Entonces te mandé una imagen de
            un rayón y dijiste que te encantó y creo que s elo puso dde foto de
            perfil jj.
          </>,
          <>
            Me dijiste que no lo hiciera si es un peso para mí hacerlo, y me
            invitaste a quedarnos hablando en llamada mientras lo trabajaba.
          </>,
          <>
            Empezamos hablando sobre puro DnD al principio (como unos nerds). Ud
            estaba empezando con la campaña de Alfheim.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-02/rekt.jpg",
            alt: "comisión de arte de rektbynoob_",
            width: 17,
            height: 18,
          },
        ],
      },
      {
        company: "Llamadas hasta tarde",
        timeframe: "",
        role: "",
        achievements: [
          <>
            Estaba viedo mensajes viejos y realmente fui muy vulnerable contigo
            desde el puro principio, siempre me hiciste sentir segura, y gran
            parte es pq eres muy abierto con temas emocionales.
          </>,
          <>
            Nos la pasamos haciendo tests (incluso el bdsm test), y nos
            quedabamos hasta muy tarde solos hablando y haciendonos preguntas
            deep.
          </>,
          <>
            Desde enero hablabamos casi todos los días, siempre encontrabas una
            razón para escribirme.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-02/videollamada01.png",
            alt: "habando hasta tarde pt.1",
            width: 17,
            height: 8,
          },
          {
            src: "/images/projects/project-02/videollamada02.png",
            alt: "habando hasta tarde pt.2",
            width: 17,
            height: 8,
          },
        ],
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Romper la cuarentena!",
    skills: [
        {
            title: "Nos conocimos!",
            description: (
              <>
                Fue el 10 de Febrero del 2021 el día que nos conocimos
                presencialmente por primera vez. Fuimos Lisa y yo a darte un "tour"
                por San José. Fuimos a un mariposario, al barrio chino a comer pasta
                y sushi, y al final terminamos en la plaza de la democracia a solo
                existir, nos quedamos hasta la noche hablando y vacilando. Yo te
                abracé las piernas porque me dio frío en un momento y te robé
                nuestra sueta morada. Al final se hizo de noche y esperaste conmigo
                hasta que llegara mi uber. Luego me contaste que la sueta quedó
                oliendo a vainilla n.n
              </>
            ),
            images: [
              
                {
                    src: '/images/projects/project-01/SJO01.jpg',
                    alt: 'Project image',
                    width: 17,
                    height: 15
                },{
                    src: '/images/projects/project-01/SJO00.jpg',
                    alt: 'Project image',
                    width: 17,
                    height: 15
                },
            ],
          },
          {
            title: "Salir, salir, salir!",
            description: (
              <>
                Seguimos saliendo muy seguido los tres, siempre terminabamos yendo al Barrio Chino o a la Plaza de la Democracia, ese era nuestro spot. Los tres disfrutabamos muchísimo solo poder salir un rato a socializar entre amigos, pasarla bonito y comer rico. Salimos muchísimas veces solo los tres.
              </>
            ),
            images: [
              
                {
                    src: '/images/projects/project-01/SJO02.jpg',
                    alt: 'Project image',
                    width: 17,
                    height: 8
                },
              
                {
                    src: '/images/projects/project-01/SJO03.jpg',
                    alt: 'Project image',
                    width: 17,
                    height: 8
                }
            ],
          },{
            title: "Sneak in a Casa del Cas",
            description: (
              <>
                En Abril me infiltré por primera vez a la Casa del Cas, al apartamento de estudiante donde estuviste viviendo durante casi toda tu carrera. Ya para este entonces conocías a Mango, hacíamos llamadas todos los días.
              </>
            ),
            images: [
              
                {
                    src: '/images/projects/project-02/videollamada03.png',
                    alt: 'Project image',
                    width: 17,
                    height: 8
                },
              
                {
                    src: '/images/projects/project-02/videollamada06.png',
                    alt: 'Project image',
                    width: 17,
                    height: 8
                }
            ],
          },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Continuará...",
    institutions: [
      {
        name: "",
        description: (
          <>
          </>
        ),
      },
    ],
  },
};

const blog = {
  label: "Publicaciones",
  title: "Para fechas especiales...",
  description: `Cada fecha especial voy a escribirte aquí algo bonito para que lo puedas leer.`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Metas de Vida",
  title: "Metas de vida",
  description: `Metas de vida que hemos ido cumpliendo juntos`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Recuerdos",
  title: "Galería de recuerdos",
  description: `Colección de fotos recopilada de todas las personas que aman a Gabo`,
};

export { person, social, /*newsletter,*/ home, about, blog, work, gallery };
