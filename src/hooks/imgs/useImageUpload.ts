import { postImageAPI } from 'libs/api/imagesAPI';
import { useState } from 'react';

function useImageUpload() {
  const [imgURL, setImgURL] = useState('');

  const imgUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setImgURL(e.target.value);
    if (e.target.files !== null) {
      const formData = new FormData();
      formData.append('images', e.target.files[0]);
      try {
        const image = await postImageAPI(formData);
        setImgURL(image);
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert('이미지 업로드에 실패했습니다.');
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }
  };

  return { imgURL, imgUpload };
}

export default useImageUpload;
