import { postImageAPI } from 'libs/api/imagesAPI';
import { useState } from 'react';

function useThumbUpload() {
  const [thumbURL, setThumbURL] = useState('');

  const onThumbUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setThumbURL(e.target.value);
    if (e.target.files !== null) {
      const formData = new FormData();
      formData.append('images', e.target.files[0]);
      try {
        const image = await postImageAPI(formData);
        setThumbURL(image);
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert('이미지 업로드에 실패했습니다.');
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }
  };

  return { thumbURL, onThumbUpload };
}

export default useThumbUpload;
