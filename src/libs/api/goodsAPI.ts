import client from '.';

export const getGoodsAPI = async (pageNo: number) => {
  const response = await client.get(`/goods?pageNo=${pageNo}`);
  return response.data;
};
