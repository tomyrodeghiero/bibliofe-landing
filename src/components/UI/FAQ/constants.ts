type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ["Preguntas frecuentes"];
export const mobileHeaderPhrase = ["Preguntas", "frecuentes"];
export const animate = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  open: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: "¿Cómo puedo empezar a explorar libros en Biblio Fe?",
    answer:
      "Comenzar es fácil. Simplemente crea una cuenta en nuestra plataforma y tendrás acceso a una amplia selección de libros que te ayudarán en tu camino de fe.",
  },
  {
    question: "¿Cómo garantiza Biblio Fe la calidad de sus libros?",
    answer:
      "En Biblio Fe, seleccionamos cuidadosamente cada libro basándonos en la Sana Doctrina y la profundidad espiritual, asegurándonos de ofrecer contenido que realmente enriquezca tu fe.",
  },
  {
    question:
      "¿Ofrecerá Biblio Fe recursos para estudios en grupo en el futuro?",
    answer:
      "Próximamente, planeamos incorporar recursos para estudios en grupo, incluyendo guías de estudio y otros materiales, para enriquecer aún más tu experiencia de fe compartida.",
  },
  {
    question: "¿Cómo puedo profundizar más en mi comprensión de Jesús?",
    answer:
      "Te recomendamos explorar nuestra colección de libros enfocados en la vida y enseñanzas de Jesús, así como participar en nuestras comunidades de discusión en línea para un aprendizaje compartido.",
  },
  {
    question: "¿Es gratis el acceso a los libros en Biblio Fe?",
    answer:
      "Sí, proporcionamos acceso totalmente gratuito a nuestra biblioteca, permitiéndote explorar y disfrutar de una amplia gama de libros sin costo.",
  },
  {
    question: "¿Cómo puedo contribuir con libros a la biblioteca de Biblio Fe?",
    answer:
      "Valoramos tus contribuciones. Puedes compartir libros que encajen con la Sana Doctrina para enriquecer la biblioteca y la comunidad de Creyentes en Jesús.",
  },
  {
    question: "¿Biblio Fe tendrá una aplicación móvil?",
    answer:
      "Sí, se desarrollará una aplicación móvil para Biblio Fe. Pronto también tendrás acceso a nuestros recursos y comunidad a través de ella.",
  },
];
