import { IGoodsQuery } from 'model/goods';
import client from '.';

export const getGoodsAPI = async (goodsQueryString: IGoodsQuery) => {
  const { pageNo, category, name, pageSize, sortBy } = goodsQueryString;
  const response = await client.get(
    `/goods?pageNo=${pageNo}&pageSize=${pageSize}&name=${name}&category=${category}&sortBy=${sortBy}`,
  );
  return response.data;
};
