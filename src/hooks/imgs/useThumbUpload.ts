import { postImageAPI } from 'libs/api/imagesAPI';

function useThumbUpload(
  onChangeValue: (name: string, value: string | string[]) => void,
) {
  const onThumbUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const formData = new FormData();
      formData.append('images', e.target.files[0]);
      try {
        const image = await postImageAPI(formData);
        onChangeValue('thumbnail', image);
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert('이미지 업로드에 실패했습니다.');
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }
  };
  return { onThumbUpload };
}

export default useThumbUpload;
