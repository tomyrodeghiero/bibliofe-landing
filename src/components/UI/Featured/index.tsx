"use client";
import Image from "next/image";
import big_banner from "../../../../public/images/big_banner.png";
import featured_mobile_banner from "../../../../public/images/featured_mobile_banner.png";
import ParallaxText from "@/components/Common/ParallaxImages";
import companies_image from "../../../../public/images/companies.png";
import { Wrapper, Inner, ImageContainer, ParallaxImages, Div } from "./styles";
import RevealCover from "@/components/Common/RevealCover";
import { useIsMobile } from "../../../../libs/useIsMobile";
import Author01 from "../../../../public/images/author01.webp";
import Author02 from "../../../../public/images/author03.jpg";
import Author03 from "../../../../public/images/author04.jpg";
import Author04 from "../../../../public/images/author05.jpg";
import Author05 from "../../../../public/images/author06.jpg";

const images = [
  {
    id: 1,
    desktopSrc: Author01,
    mobileSrc: Author01,
    alt: "Descripción de la imagen 1",
  },
  {
    id: 2,
    desktopSrc: Author02,
    mobileSrc: Author02,
    alt: "Descripción de la imagen 2",
  },
  {
    id: 3,
    desktopSrc: Author03,
    mobileSrc: Author03,
    alt: "Descripción de la imagen 3",
  },
  {
    id: 4,
    desktopSrc: Author04,
    mobileSrc: Author04,
    alt: "Descripción de la imagen 4",
  },
  {
    id: 5,
    desktopSrc: Author05,
    mobileSrc: Author05,
    alt: "Descripción de la imagen 5",
  },
];

export const imageVariants = {
  hidden: {
    scale: 1.6,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.6, 0.05, -0.01, 0.9],
      delay: 0.2,
    },
  },
};

const HorizontalScrollContainer = ({ isMobile }: any) => {
  const containerStyle: any = {
    display: "flex",
    overflowX: "scroll",
    gap: "21px",
  };

  const imageStyle: any = {
    borderRadius: "100%", // Esto hará que la imagen sea completamente redonda
    width: isMobile ? "50px" : "90px",
    height: isMobile ? "50px" : "90px",
    objectFit: "cover",
  };

  return (
    <div style={containerStyle}>
      {images.map((image, index) => (
        <div key={index}>
          <Image
            src={isMobile ? image.mobileSrc : image.desktopSrc}
            alt={image.alt}
            style={imageStyle}
          />
        </div>
      ))}
    </div>
  );
};

const Featured = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <ImageContainer>
          <RevealCover />
          <Div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
          >
            {isMobile ? (
              <Image
                src={featured_mobile_banner}
                alt="featured_mobile_banner"
                fill
              />
            ) : (
              <Image src={big_banner} alt="big_banner" fill />
            )}
          </Div>
        </ImageContainer>
        <h2 className="mb-5 text-black-200">
          Autores Inspiradores y Desafiantes
        </h2>
        <HorizontalScrollContainer isMobile={isMobile} />
      </Inner>
    </Wrapper>
  );
};

export default Featured;
