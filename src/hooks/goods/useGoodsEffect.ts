import useGoodsQueryForm from 'hooks/search/useGoodsQueryForm';
import { getGoodsAPI } from 'libs/api/goodsAPI';
import { IGoodsResponse } from 'model/goods';
import { useQuery } from 'react-query';

function useGoodsEffect() {
  const { goodsQueryString, onChangeGoodsQueryString } = useGoodsQueryForm();
  const { pageNo } = goodsQueryString;
  const goodsData = useQuery<IGoodsResponse>(
    ['goods', pageNo],
    () => getGoodsAPI(goodsQueryString),
    {
      keepPreviousData: true,
    },
  );
  return { goodsData, onChangeGoodsQueryString };
}

export default useGoodsEffect;
