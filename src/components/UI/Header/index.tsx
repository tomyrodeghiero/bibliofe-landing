"use client";

import Image from "next/image";
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  AbsoluteLinks,
  BurgerMenu,
} from "./styles";
import BiblioFeLogotype from "../../../../public/images/biblio-fe-logotype.png";
import ic_bars from "../../../../public/svgs/ic_bars.svg";
import { GetStartedButton } from "@/components";
import AnimatedLink from "@/components/Common/AnimatedLink";
import { useState } from "react";
import { motion } from "framer-motion";
import { links, menu } from "./constants";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Image
            width={55}
            src={BiblioFeLogotype}
            alt="Biblio Fe Logotype"
            priority
          />
          {/* <Link
            href="/"
            className="bg-sky-200 font-medium hover:bg-sky-900 focus:outline-none focus:ring-1 focus:ring-green-600 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:shadow-md hover:-translate-y-1 rounded-[40px] text-white px-4 py-2"
          >
            Iniciar Sesión
          </Link> */}
        </LogoContainer>
        <Nav>
          {/* {links.map((link, i) => (
            <AnimatedLink key={i} title={link.linkTo} />
          ))} */}
        </Nav>
        {/* <CallToActions className={isOpen ? "active" : ""}>
          <Link
            href="/"
            className="bg-sky-200 font-medium hover:bg-sky-900 focus:outline-none focus:ring-1 focus:ring-green-600 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:shadow-md hover:-translate-y-1 rounded-[40px] text-white px-4 py-2"
          >
            Iniciar Sesión
          </Link>
        </CallToActions> */}
      </Inner>
    </Wrapper>
  );
};

export default Header;
