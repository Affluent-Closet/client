import Button from 'components/button/Button';
import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';
import { ReviewTit } from './GoodsReviewSummery';

const InquirtyWrapper = styled.div`
  margin: 0px 30px;
`;
const InquirtyTit = styled(ReviewTit)`
  display: flex;
  justify-content: space-between;
`;
const WriteBtn = styled(Button)`
  width: 100px;
  height: 25px;
  background-color: black;
  color: ${palette.backgroundColor};
`;
const QnaList = styled.li`
  padding: 10px 0px;
  text-align: center;
  display: flex;
  border-bottom: 1px solid #bdbdbd;
  font-size: 12px;
  .qna-status {
    width: 15%;
  }
  .qna-contents {
    width: 55%;
    text-align: left;
    padding-left: 10px;
  }
  .qna-writer {
    width: 15%;
  }
  .qna-date {
    width: 15%;
  }
`;
const QnAHead = styled(QnaList)`
  font-weight: 500px;
  padding: 20px 0px;
  .qna-contents {
    text-align: center;
  }
`;

function GoodsInquiry() {
  return (
    <InquirtyWrapper>
      <InquirtyTit>
        <div>Q&A</div>
        <WriteBtn hoverButtonColor="backgroundColor">작성하기</WriteBtn>
      </InquirtyTit>
      <ul>
        <QnAHead>
          <div className="qna-status">답변상태</div>
          <div className="qna-contents">내용</div>
          <div className="qna-writer">작성자</div>
          <div className="qna-date">작성일</div>
        </QnAHead>
        {/* map 돌리기 */}
        <QnaList>
          <div className="qna-status">답변완료</div>
          <div className="qna-contents">이거 궁금해요</div>
          <div className="qna-writer">이지호</div>
          <div className="qna-date">2022.03.08</div>
        </QnaList>
      </ul>
    </InquirtyWrapper>
  );
}

export default GoodsInquiry;
