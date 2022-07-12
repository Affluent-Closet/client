import { QueryParams } from 'model/pay';
import client from './client';

export const postPaymentAPI = async (body: QueryParams) => {
  const response = await client.post(`/pay/success`, body);
  return response.data;
};
