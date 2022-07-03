import Button from 'components/common/Button';
import CheckBox from 'components/common/CheckBox';
import { palette } from 'libs/styles/palette';
import { IAgreementFormTypes, IAgreementItem } from 'model/auth';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

const AgreeAllBox = styled.div`
  font-weight: 500;
`;

const AgreeItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

const AgreeBox = styled.div`
  border: 1px solid ${palette.border};
  padding: 5px;
  margin: 20px 0;
`;

const AgreeText = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

interface IUseAgreementForm {
  useAgreement: IAgreementFormTypes;
}

function AgreementForm({ useAgreement }: IUseAgreementForm): ReactElement {
  const { agreementList, onAllCheck, onChangeCheck, isAllChecked } =
    useAgreement;

  return (
    <>
      <AgreeAllBox>
        <AgreeText>
          <CheckBox
            checked={isAllChecked}
            onChange={onAllCheck}
            width="15px"
            height="15px"
          />
          전체 동의
        </AgreeText>
      </AgreeAllBox>
      <AgreeBox>
        {agreementList.map(
          ({ name, text, isChecked, isModal }: IAgreementItem) =>
            name !== 'allAgree' && (
              <AgreeItem key={name}>
                <AgreeText>
                  <CheckBox
                    name={name}
                    checked={isChecked}
                    onChange={onChangeCheck}
                  />
                  {text}
                  <sup>*</sup>
                </AgreeText>
                {isModal && <Button width="16px"> &gt; </Button>}
              </AgreeItem>
            ),
        )}
      </AgreeBox>
    </>
  );
}

export default React.memo(AgreementForm);
