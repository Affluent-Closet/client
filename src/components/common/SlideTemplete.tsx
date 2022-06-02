import Button from 'components/common/Button';
import useSlider from 'hooks/common/useSlider';
import { mediaMax } from 'libs/styles/media';
import { palette } from 'libs/styles/palette';
import React from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import styled from 'styled-components';
import { FlexBetween } from './CommonComponents';
import Slide from './Slide';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
`;

const BtnGroupBox = styled(FlexBetween)``;

const SliderContainer = styled.div`
  display: flex; //이미지들을 가로로 나열합니다.
`;

const SliderDots = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 1rem 0;
  list-style-type: none;
  li {
    margin: 0 0.25rem;
  }
  button {
    display: block;
    width: 10px;
    height: 10px;
    padding: 0;
    border: none;
    border-radius: 100%;
    background-color: ${palette.border};
    text-indent: -9999px;
    ${mediaMax.small} {
      width: 5px;
      height: 5px;
    }
  }

  li.slick-active button {
    background-color: ${palette.hoverDarkColor};
  }
`;

interface ISlideTempleteProps {
  img: Array<string>;
}
function SlideTemplete({ img }: ISlideTempleteProps) {
  const { currentSlide, element, nextSlide, prevSlide, setCurrentSlide } =
    useSlider(img.length);
  return (
    <Container>
      <SliderContainer ref={element}>
        {img.map((imgs) => (
          <Slide img={imgs} />
        ))}
      </SliderContainer>
      <BtnGroupBox>
        <Button onClick={prevSlide} hoverButtonColor="backgroundHover">
          <AiFillCaretLeft size={16} />
        </Button>
        <SliderDots>
          {img.map((_imgs, index) => (
            <li className={currentSlide === index ? 'slick-active' : ''}>
              <button type="button" onClick={() => setCurrentSlide(index)}>
                {index}
              </button>
            </li>
          ))}
        </SliderDots>
        <Button onClick={nextSlide} hoverButtonColor="backgroundHover">
          <AiFillCaretRight size={16} />
        </Button>
      </BtnGroupBox>
    </Container>
  );
}

export default SlideTemplete;
