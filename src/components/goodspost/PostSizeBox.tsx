import React from 'react';
import { FlexAlignCenter } from 'components/common/CommonComponents';
import styled from 'styled-components';
import { AiFillPlusCircle } from 'react-icons/ai';
import { mediaMin } from 'libs/styles/media';
import useSizeForm from 'hooks/post/useSizeForm';
import { PostAns, PostButton, PostQue } from './PostGoodsBox';

const PostInputBox = styled(FlexAlignCenter)`
  p {
    margin-left: 20px;
  }
`;
const AnsStyled = styled(PostAns)`
  width: 90%;
  margin: 2px;
`;
// const SizeInputBox = styled.div`
//   width: 300px;
// `;
const BtnBox = styled.div`
  text-align: right;
  margin: 15px;
`;

const InputGrid = styled.div`
  text-align: left;
  display: grid;
  margin-top: 10px;
  grid-template-columns: 1fr;
  ${mediaMin.medium} {
    grid-template-columns: 1fr 1fr;
  }
  ${mediaMin.large} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
function PostSizeBox() {
  const { sizeDatas, onChangeSizeData, onAddData, onPostSize } = useSizeForm();
  return (
    <>
      <PostInputBox>
        <PostQue>사이즈/수량</PostQue>
        <InputGrid>
          {sizeDatas.map(({ size, stock }, index) => (
            <div key={`${size}_${index}`}>
              <AnsStyled
                type="text"
                placeholder="사이즈"
                name="size"
                value={size}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChangeSizeData(e, index)
                }
              />
              <AnsStyled
                type="number"
                placeholder="갯수"
                name="stock"
                value={stock}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChangeSizeData(e, index)
                }
              />
            </div>
          ))}
        </InputGrid>
        <p>
          <AiFillPlusCircle size={25} onClick={onAddData} />
        </p>
      </PostInputBox>
      <BtnBox>
        <p>*사이즈는 대문자로 작성해 주세요!</p>
        <PostButton
          width="100px"
          height="30px"
          buttonColor="grayDarkest"
          fontColor="white"
          hoverButtonColor="grayDark"
        >
          초기화
        </PostButton>
        <PostButton
          width="100px"
          height="30px"
          buttonColor="mainColor"
          fontColor="white"
          hoverButtonColor="mainHoverColor"
          onClick={onPostSize}
        >
          등록하기
        </PostButton>
      </BtnBox>
    </>
  );
}

export default PostSizeBox;
