import { mediaMax } from 'libs/styles/media';
import React from 'react';
import styled from 'styled-components';

const IMG = styled.img`
  max-width: 576px;
  width: 100%;
  height: 500px;
  flex: 1 0 auto;
  object-fit: fill;
  ${mediaMax.medium} {
    height: 400px;
  }
  ${mediaMax.small} {
    height: 300px;
  }
`;
interface SlideProps {
  img: string;
}
export default function Slide({ img }: SlideProps) {
  return <IMG src={img} />;
}
