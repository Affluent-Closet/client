import client from '.';

export const getGoodsAPI = async (
  pageNo: number,
  pageSize?: number,
  sortBy?: string,
  name?: string,
  category?: string,
) => {
  const response = await client.get(
    `/goods?pageNo=${pageNo}&pageSize=${pageSize}&name=${name}&category=${category}&sortBy=${sortBy}`,
  );
  return response.data;
};
