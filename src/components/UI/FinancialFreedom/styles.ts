"use client";
import { styled } from "styled-components";

export const Wrapper = styled.section`
  margin-top: 1.25rem;

  @media (max-width: 768px) {
    margint-top: 0rem;
  }
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto 2.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 45rem;
  margin: 0 auto 2.75rem;
  text-align: center;
  color: white;

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
    color: black;
  }

  p {
    max-width: 41.75rem;
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;

    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const BannerCtn = styled.div`
  margin-bottom: 2.5rem;
  width: 100%;
  position: relative;
  width: 100%;
  height: 30.4375rem;
  overflow: hidden;
  border-radius: 0.75rem;

  img {
    border-radius: 0.75rem;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Edges = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const Edge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.62rem;

  p {
    max-width: 26rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  }
`;

export const Title = styled.div`
  display: flex;
  gap: 0.5rem;
  color: black;
  align-items: center;

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    color: #222c57;
  }
`;

export const BriefNote = styled.div`
  padding: 2rem 8.5rem;
  background: #222c57;
  color: white;

  p {
    color: var(--Background, #070606);
    font-size: 8rem;
    font-weight: 400;
    max-width: 1440px;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    p {
      font-size: 3.75rem;
    }
  }
`;
