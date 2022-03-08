import Button from 'components/button/Button';
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

function SlideTemplete() {
  const { currentSlide, element, nextSlide, prevSlide, setCurrentSlide } =
    useSlider();
  return (
    <Container>
      <SliderContainer ref={element}>
        <Slide img="https://image.msscdn.net/images/prd_img/20220121/2319884/detail_2319884_2_500.jpg" />
        <Slide img="https://avatars.githubusercontent.com/u/64634992?v=4" />
        <Slide img="https://image-comic.pstatic.net/webtoon/748105/156/20220223140726_caa0c1e44c7e8737a30f73f75755068d_IMAG01_1.jpg" />
      </SliderContainer>
      <BtnGroupBox>
        <Button onClick={prevSlide} hoverButtonColor="backgroundHover">
          <AiFillCaretLeft size={16} />
        </Button>
        <SliderDots>
          {/* 나중에 map으로 돌릴 예정 */}
          <li className={currentSlide === 0 ? 'slick-active' : ''}>
            <button type="button" onClick={() => setCurrentSlide(0)}>
              1
            </button>
          </li>
          <li className={currentSlide === 1 ? 'slick-active' : ''}>
            <button type="button" onClick={() => setCurrentSlide(1)}>
              2
            </button>
          </li>
          <li className={currentSlide === 2 ? 'slick-active' : ''}>
            <button type="button" onClick={() => setCurrentSlide(2)}>
              3
            </button>
          </li>
        </SliderDots>
        <Button onClick={nextSlide} hoverButtonColor="backgroundHover">
          <AiFillCaretRight size={16} />
        </Button>
      </BtnGroupBox>
    </Container>
  );
}

export default SlideTemplete;
