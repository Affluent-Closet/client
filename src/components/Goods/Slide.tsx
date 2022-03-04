import React from 'react';
import styled from 'styled-components';

const IMG = styled.img`
  width: 100%;
  height: 70vh;
`;
interface SlideProps {
  img: string;
}
export default function Slide({ img }: SlideProps) {
  return <IMG src={img} />;
}
