import Button from 'components/common/Button';
import { PageContainer } from 'components/common/CommonComponents';
import useForm from 'hooks/common/useForm';
import requestPayMents from 'hooks/pay/requestPayMents';
import { MAIN_URL } from 'libs/utils/constants';
import React from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
  border: 1px solid #4d473f;
  width: 500px;
`;

function PaymentPage() {
  const { form, onChangeForm } = useForm({
    amount: 1,
    orderId: 'brL9yXo4bVrpAHe7p5s1232',
    orderName: '토스 티셔츠 외 2건!',
    customerName: '박토스',
    successUrl: `${MAIN_URL}/success`,
    failUrl: `${MAIN_URL}/false`,
  });

  return (
    <PageContainer>
      <InputStyle
        type="text"
        name="orderId"
        value={form.orderId}
        onChange={onChangeForm}
      />
      <Button
        onClick={() => {
          requestPayMents(form);
        }}
        buttonColor="kakaoColor"
        width="100px"
        height="40px"
      >
        PaymentPage
      </Button>
    </PageContainer>
  );
}

export default PaymentPage;
