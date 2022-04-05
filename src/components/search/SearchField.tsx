import useSearchForm from 'hooks/search/useSearchForm';
import { mediaMax } from 'libs/styles/media';
import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';

const SearchFieldStyled = styled.input`
  border-radius: 4px;
  border: 2px solid ${palette.border};
  width: 75%;
  max-width: 500px;
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
    margin-bottom: 20px;
    border: 2.5px solid black;
  }
  ${mediaMax.medium} {
    :focus {
      height: 40px;
      max-width: 100%;
      border: 2.5px solid black;
    }
  }
`;

export const SearchTit = styled.div`
  font-size: 16px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 3%;
`;

function SearchField() {
  const { onChangeSearchIndex, onSearch } = useSearchForm();

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <>
      <SearchTit>Search</SearchTit>
      <SearchFieldStyled
        type="text"
        placeholder="어떤 상품을 찾으시나요?"
        onChange={onChangeSearchIndex}
        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
          onEnter(e);
        }}
      />
    </>
  );
}

export default SearchField;
