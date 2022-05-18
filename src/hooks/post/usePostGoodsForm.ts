import useThumbUpload from 'hooks/imgs/useThumbUpload';
import { postGoodsAPI } from 'libs/api/goodsAPI';
import { postImageAPI } from 'libs/api/imagesAPI';
import { IRequestGoods } from 'model/goods';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Path from 'routes/Path';

function usePostGoodsForm() {
  const ITITIALFORM: IRequestGoods = {
    category: '',
    name: '',
    price: 0,
    discount: 0,
    detail: [],
    thumbnail: '',
  };
  const navigate = useNavigate();
  const [goodsForm, setGoodsForm] = useState<IRequestGoods>(ITITIALFORM);

  const onChangeForm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setGoodsForm({ ...goodsForm, [name]: value });
    },
    [goodsForm],
  );

  const onResetForm = useCallback(() => {
    setGoodsForm(ITITIALFORM);
  }, [ITITIALFORM]);

  const onCustomChange = useCallback(
    (name: string, value: string | string[]) => {
      setGoodsForm({ ...goodsForm, [name]: value });
    },
    [goodsForm],
  );

  const onPushDetail = useCallback(
    (name: string, image: string) => {
      setGoodsForm({
        ...goodsForm,
        [name]: [...goodsForm.detail, image],
      });
    },
    [goodsForm],
  );

  const { onThumbUpload } = useThumbUpload(onCustomChange);

  const onDetailUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const formData = new FormData();
      formData.append('images', e.target.files[0]);
      try {
        const image = await postImageAPI(formData);
        onPushDetail('detail', image);
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert('이미지 업로드에 실패했습니다.');
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }
  };

  const onPostGoods = async () => {
    try {
      const response = await postGoodsAPI(goodsForm);
      navigate(`${Path.PostGoodsPage}/${response.id}`);
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('공고 작성에 실패했습니다');
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
  return {
    goodsForm,
    onChangeForm,
    onResetForm,
    onPostGoods,
    onThumbUpload,
    onDetailUpload,
  };
}

export default usePostGoodsForm;
