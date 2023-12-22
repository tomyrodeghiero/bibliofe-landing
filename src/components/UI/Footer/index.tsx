import Image from "next/image";
import BiblioFeLogotype from "../../../../public/images/biblio-fe-logotype.png";
import ic_google_playstore from "../../../../public/svgs/ic_google_playstore.svg";
import ic_baseline_apple from "../../../../public/svgs/ic_baseline_apple.svg";
import ic_chevron_down from "../../../../public/svgs/ic_chevron_down.svg";
import ic_copyright from "../../../../public/svgs/ic_copyright.svg";

const linksArr = [
  {
    title: "About us",
    links: ["Our Company", "Careers", "Press kits"],
  },
  {
    title: "Legal",
    links: ["Terms of use", "Privacy policy", "About us"],
  },
  {
    title: "About us",
    links: ["Contact us", "FAQ"],
  },
];

import {
  Wrapper,
  Inner,
  FooterLogo,
  FooterMainContent,
  FooterMiddle,
  QRContainer,
  QRImageCtn,
  TextCtn,
  IconCtn,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  FooterBottom,
  Translator,
  CopyRight,
} from "./styles";

const Footer = () => {
  // Función para volver al principio de la página
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Wrapper>
      <Inner>
        <FooterMainContent>
          <FooterMiddle>
            <div className="mx-auto lg:m-0">
              <Image
                className="mt-10"
                width={125}
                src={BiblioFeLogotype}
                alt="Biblio Fe Logotype"
              />
            </div>
            <QRContainer>
              <TextCtn>
                <p className="text-center">
                  Pronto Biblio Fe estará en la Apple Store y Play Store.
                </p>
                <IconCtn className="flex mx-auto">
                  <Image
                    src={ic_google_playstore}
                    width={45}
                    alt="playstore icon"
                  />
                  <Image src={ic_baseline_apple} height={45} alt="apple icon" />
                </IconCtn>
              </TextCtn>
            </QRContainer>
          </FooterMiddle>
          <FooterBottom>
            <div
              className="flex flex-col text-2xl lg:flex-row items-center w-full justify-between cursor-pointer"
              onClick={scrollToTop}
            >
              <Translator>
                <h3>Contruido por y para Cristianos Radicales</h3>
                <Image
                  src={ic_chevron_down}
                  className="rotate-180"
                  alt="chevron down"
                />
              </Translator>
              <CopyRight>
                <Image src={ic_copyright} alt="copyright svg" />
                Biblio Fe - Todos los derechos reservados 2023
              </CopyRight>
            </div>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
