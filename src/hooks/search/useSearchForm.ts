import { useNavigate } from 'react-router-dom';
import useGoodsQueryForm from './useGoodsQueryForm';

export default function useSearchForm() {
  const { goodsQueryString, onChangeGoodsQueryString } = useGoodsQueryForm();
  const { pageNo, category, name, sortBy } = goodsQueryString;
  const navigate = useNavigate();

  const onSearch = () => {
    navigate(
      `/search/result?pageNo=${pageNo}&pageSize=20&name=${category}&category=${name}&sortBy=${sortBy}`,
    );
  };
  return {
    goodsQueryString,
    onChangeGoodsQueryString,
    onSearch,
  };
}
