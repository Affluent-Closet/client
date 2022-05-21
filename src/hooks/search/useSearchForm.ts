import { useNavigate } from 'react-router-dom';
import useGoodsQueryForm from './useGoodsQueryForm';

export default function useSearchForm() {
  const { goodsQueryString, onChangeGoodsQS } = useGoodsQueryForm();
  const { pageNo, name } = goodsQueryString;
  const navigate = useNavigate();

  const onSearch = () => {
    navigate(`/search/result?pageNo=${pageNo}&name=${name}`);
  };

  return {
    goodsQueryString,
    onChangeGoodsQS,
    onSearch,
  };
}
