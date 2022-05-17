import { IGoodsQuery, IRequestGoods, IRequestSizeInfo } from 'model/goods';

import client from '.';

export const getGoodsAPI = async (goodsQueryString: IGoodsQuery) => {
  const { pageNo, category, name, pageSize, sortBy } = goodsQueryString;
  const response = await client.get(
    `/goods?pageNo=${pageNo}&pageSize=${pageSize}&name=${name}&category=${category}&sortBy=${sortBy}`,
  );
  return response.data;
};

export const getGoodsByIdAPI = async (goodsId: string) => {
  const response = await client.get(`/goods/${goodsId}`);
  return response.data;
};

export const postGoodsAPI = async (body: IRequestGoods) => {
  const response = await client.post(`/goods`, body);
  return response.data;
};

export const postSizeInfoAPI = async (body: IRequestSizeInfo) => {
  const response = await client.post(`/goods/size`, body);
  return response.data;
};
