/* eslint-disable no-console */
import { loadTossPayments } from '@tosspayments/payment-sdk';

interface RequestPayMentsProps {
  amount: number;
  orderId: string;
  orderName: string;
  customerName: string;
  successUrl: string;
  failUrl: string;
}
const requestPayMents = async (body: RequestPayMentsProps) => {
  const clientKey = 'test_ck_7XZYkKL4MrjjNY5Db1Er0zJwlEWR';
  const tossPayments = await loadTossPayments(clientKey);
  tossPayments
    .requestPayment('카드', {
      amount: body.amount,
      orderId: body.orderId,
      orderName: body.orderName,
      customerName: body.customerName,
      successUrl: body.successUrl,
      failUrl: body.failUrl,
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(tossPayments);
};

export default requestPayMents;
