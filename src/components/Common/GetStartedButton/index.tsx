import { LinkTo } from "./styles";

const GetStartedButton = ({ padding }: { padding: string }) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href="https://bibliofe.com"
      target="_blank"
      className="bg-sky-800 md:mt-10 hover:bg-sky-900 focus:outline-none focus:ring-1 focus:ring-green-600 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:shadow-md hover:-translate-y-1 rounded-[40px] text-white px-6 py-3"
    >
      ¡Vamos a la Biblioteca!
    </LinkTo>
  );
};

export default GetStartedButton;
