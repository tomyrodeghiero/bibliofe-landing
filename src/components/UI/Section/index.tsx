"use client";

import { Wrapper, Inner, Edges, Edge, Title, BriefNote } from "./styles";
import MaskText from "@/components/Common/MaskText";
import { useIsMobile } from "../../../../libs/useIsMobile";
import {
  desktopBriefNotePhrase,
  edges,
  mobileBriefNotePhrase,
} from "./constants";

const Section = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Inner>
        <Edges>
          {edges.map((edge, i) => (
            <Edge key={i}>
              <Title>
                {/* <Image src={edge.icon} alt="icon" /> */}
                <MaskText phrases={new Array(edge.point)} tag="h3" />
              </Title>
              <MaskText phrases={new Array(edge.details)} tag="p" />
            </Edge>
          ))}
        </Edges>
      </Inner>
      <BriefNote>
        {isMobile ? (
          <MaskText phrases={mobileBriefNotePhrase} tag="p" />
        ) : (
          <MaskText phrases={desktopBriefNotePhrase} tag="p" />
        )}
      </BriefNote>
    </Wrapper>
  );
};

export default Section;
