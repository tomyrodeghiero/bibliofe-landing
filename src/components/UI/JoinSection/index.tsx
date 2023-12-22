"use client";
import { useState } from "react";
import {
  Wrapper,
  Inner,
  Header,
  TestimonialWrapper,
  Testimonial,
  Testimony,
  UserInfo,
  Name,
  Avatar,
  PaginationButtonContainer,
  Previous,
  Next,
} from "./styles";
import ic_arrow_left from "../../../../public/svgs/ic_arrow_left.svg";
import ic_arrow_right from "../../../../public/svgs/ic_arrow_right.svg";
import Image from "next/image";
import { MaskText } from "@/components";
import { useIsMobile } from "../../../../libs/useIsMobile";
import { Props, desktopHeaderPhrase, testimonials } from "./constants";

const JoinSection = () => {
  return (
    <Wrapper>
      <Inner>
        <Header>
          <MaskText phrases={desktopHeaderPhrase} tag="h1" />
        </Header>
      </Inner>
    </Wrapper>
  );
};

export default JoinSection;
