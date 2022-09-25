import { IReviewQuery } from 'model/review';
import client from './client';

export const getReviewAPI = async (reviewQueryString: IReviewQuery) => {
  const { goodsId } = reviewQueryString;
  const response = await client.get(`/review/goods?goodsId=${goodsId}`);
  return response.data;
};

export const getReviewRatingAPI = async (goodsId: string) => {
  const response = await client.get(`/review/goods/rating?goodsId=${goodsId}`);
  return response.data;
};
