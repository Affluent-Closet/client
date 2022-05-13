import useForm from 'hooks/common/useForm';
import useDetailUpload from 'hooks/imgs/useDetailUpload';
import useThumbUpload from 'hooks/imgs/useThumbUpload';
import { postGoodsAPI } from 'libs/api/goodsAPI';
import { IRequestGoods } from 'model/goods';

function usePostGoodsForm() {
  const { form, onChangeForm, onResetForm, onCustomChange } =
    useForm<IRequestGoods>({
      category: '',
      name: '',
      price: 0,
      discount: 0,
      detail: [],
      thumbnail: '',
    });
  const { onThumbUpload } = useThumbUpload(onCustomChange);
  const { onDetailUpload } = useDetailUpload(onCustomChange);

  const onPostGoods = async () => {
    try {
      postGoodsAPI(form);
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('공고 작성에 실패했습니다');
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
  return {
    form,
    onChangeForm,
    onResetForm,
    onPostGoods,
    onThumbUpload,
    onDetailUpload,
  };
}

export default usePostGoodsForm;
