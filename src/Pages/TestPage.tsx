import Slide from 'components/Goods/Slide';
import useSlider from 'hooks/common/useSlider';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 60%;
  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
`;
const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;
const SliderContainer = styled.div`
  width: 100%;
  display: flex; //이미지들을 가로로 나열합니다.
`;

function TestPage() {
  const { currentSlide, element, nextSlide, prevSlide } = useSlider();
  return (
    <Container>
      {currentSlide}
      <SliderContainer ref={element}>
        <Slide img="https://media.vlpt.us/images/peppermint100/post/d99e3dff-779f-4000-9857-5844481da5b8/image.png" />
        <Slide img="https://media.vlpt.us/images/peppermint100/post/d99e3dff-779f-4000-9857-5844481da5b8/image.png" />
        <Slide img="https://media.vlpt.us/images/peppermint100/post/d99e3dff-779f-4000-9857-5844481da5b8/image.png" />
      </SliderContainer>
      <Button onClick={prevSlide}>Previous Slide</Button>
      <Button onClick={nextSlide}>Next Slide</Button>
    </Container>
  );
}

export default TestPage;
