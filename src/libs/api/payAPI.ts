import { QueryParams } from 'model/pay';
import client from '.';

export const postPaymentAPI = async (body: QueryParams) => {
  const response = await client.post(`/pay/success`, body);
  console.log(response);
  return response.data;
};
