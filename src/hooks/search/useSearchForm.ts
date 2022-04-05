import { useNavigate } from 'react-router-dom';
import useGoodsQueryForm from './useGoodsQueryForm';

export default function useSearchForm() {
  const { goodsQueryString, onChangeGoodsQS } = useGoodsQueryForm();
  const { pageNo, category, name, sortBy } = goodsQueryString;
  const navigate = useNavigate();

  const onSearch = () => {
    navigate(
      `/search/result?pageNo=${pageNo}&pageSize=20&name=${name}&category=${category}&sortBy=${sortBy}`,
    );
  };

  return {
    goodsQueryString,
    onChangeGoodsQS,
    onSearch,
  };
}
