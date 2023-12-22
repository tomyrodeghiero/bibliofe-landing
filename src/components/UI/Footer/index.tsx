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
  return (
    <Wrapper>
      <Inner>
        <FooterLogo>
          <Image
            className="mt-10"
            width={125}
            src={BiblioFeLogotype}
            alt="Biblio Fe Logotype"
          />
        </FooterLogo>
        <FooterMainContent>
          <FooterMiddle>
            <QRContainer>
              <TextCtn>
                <p>Scan to download App on the Playstore and Appstore.</p>
                <IconCtn>
                  <Image src={ic_google_playstore} alt="playstore icon" />
                  <Image src={ic_baseline_apple} alt="apple icon" />
                </IconCtn>
              </TextCtn>
            </QRContainer>
          </FooterMiddle>
          <FooterBottom>
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
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
