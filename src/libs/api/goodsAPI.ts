import client from '.';

export const getGoodsAPI = async () => {
  const response = await client.get('/goods');
  return response.data;
};
