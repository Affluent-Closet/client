import client from '.';

export const postImageAPI = async (formData: FormData) => {
  const response = await client.post(
    'https://affluent-closet.herokuapp.com/image',
    formData,
  );
  return response.data;
};
