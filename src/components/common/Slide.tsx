import React from 'react';
import styled from 'styled-components';

const IMG = styled.img`
  display: inline-block;
  max-width: 576px;
  width: 100%;
  height: 500px;
  object-fit: fill;
`;
interface SlideProps {
  img: string;
}
export default function Slide({ img }: SlideProps) {
  return <IMG src={img} />;
}
