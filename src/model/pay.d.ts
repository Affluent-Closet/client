import { ParsedQs } from 'qs';

export interface QueryParams extends ParsedQs {
  orderId: string;
  paymentKey: string;
  amount: string;
}
