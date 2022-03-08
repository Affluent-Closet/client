import { mediaMax } from 'libs/styles/media';
import React from 'react';
import styled from 'styled-components';

const SearchFieldStyled = styled.input`
  border-radius: 18px;
  border: 2.5px solid black;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  height: 32px;
  outline: none;
  padding-left: 10px;
  font-size: 12px;
  transition: all ease 0.3s;
  text-align: center;
  :focus {
    max-width: 80vw;
    height: 60px;
    font-size: 18px;
  }
  ${mediaMax.medium} {
    :focus {
      height: 40px;
      max-width: 100%;
    }
  }
`;

function SearchField() {
  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // eslint-disable-next-line no-console
      console.log('enter 눌렀다');
    }
  };

  return (
    <SearchFieldStyled
      type="text"
      placeholder="어떤 상품을 찾으시나요?"
      onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
        onEnter(e);
      }}
    />
  );
}

export default SearchField;
