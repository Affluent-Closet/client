import { postImageAPI } from 'libs/api/imagesAPI';
import { useState } from 'react';

function useDetailUpload(
  onChangeValue: (name: string, value: string | string[]) => void,
) {
  const [imgList, setImgList] = useState<Array<string>>([]);
  const onDetailUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const formData = new FormData();
      formData.append('images', e.target.files[0]);
      try {
        const image = await postImageAPI(formData);
        setImgList((prev) => [...prev, image]);
        onChangeValue('detail', imgList);
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert('이미지 업로드에 실패했습니다.');
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }
  };

  return { onDetailUpload };
}

export default useDetailUpload;
