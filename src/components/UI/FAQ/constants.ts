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
      "En Biblio Fe, seleccionamos cuidadosamente cada libro basándonos en la sana doctrina y la profundidad espiritual, asegurándonos de ofrecer contenido que realmente enriquezca tu fe.",
  },
  {
    question: "¿Ofrece Biblio Fe recursos para el estudio en grupo?",
    answer:
      "Sí, ofrecemos una variedad de recursos que son perfectos para el estudio en grupo, incluyendo guías de discusión y materiales de estudio bíblico.",
  },
  {
    question: "¿Cómo puedo profundizar más en mi comprensión de Jesús?",
    answer:
      "Te recomendamos explorar nuestra colección de libros enfocados en la vida y enseñanzas de Jesús, así como participar en nuestras comunidades de discusión en línea para un aprendizaje compartido.",
  },
];
