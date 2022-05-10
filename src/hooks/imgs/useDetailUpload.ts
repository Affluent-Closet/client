import { postImageAPI } from 'libs/api/imagesAPI';
import { useState } from 'react';

function useDetailUpload() {
  const [detailURLs, setDetailURLs] = useState<Array<string>>([]);

  const onThumbUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const formData = new FormData();
      formData.append('images', e.target.files[0]);
      try {
        const image = await postImageAPI(formData);
        setDetailURLs(image);
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert('이미지 업로드에 실패했습니다.');
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }
  };

  return { detailURLs, onThumbUpload };
}

export default useDetailUpload;
