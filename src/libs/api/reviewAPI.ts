import { IReviewQuery } from 'model/review';
import client from '.';

export const getReviewAPI = async (reviewQueryString: IReviewQuery) => {
  const { goodsId } = reviewQueryString;
  const response = await client.get(`/review/goods?goodsId=${goodsId}`);
  return response.data;
};
