"use client";
import { useState } from "react";
import Image from "next/image";
import { Edge, Edges, Title } from "../FinancialFreedom/styles";
import lola_card from "../../../../public/images/lola_card.png";
import orange_card from "../../../../public/images/orange_card.png";
import terry_card from "../../../../public/images/terry_card.png";
import {
  Wrapper,
  Inner,
  Header,
  HeaderMainText,
  CardsContainer,
  LeftImage,
  MiddleImage,
  RightImage,
} from "./styles";
import { MaskText } from "@/components";
import { useIsMobile } from "../../../../libs/useIsMobile";
import {
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  edges,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
} from "./constants";

const IntroSection = () => {
  const isMobile = useIsMobile();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return <Wrapper></Wrapper>;
};

export default IntroSection;
