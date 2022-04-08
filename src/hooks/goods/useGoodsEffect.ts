import { getGoodsAPI } from 'libs/api/goodsAPI';
import { IGoodsQuery, IGoodsResponse } from 'model/goods';
import { useQuery } from 'react-query';

function useGoodsEffect(goodsQueryString: IGoodsQuery) {
  const goodsData = useQuery<IGoodsResponse>(
    ['goods', goodsQueryString.pageNo, goodsQueryString.sortBy],
    () => getGoodsAPI(goodsQueryString),
    {
      keepPreviousData: true,
    },
  );
  return { goodsData };
}

export default useGoodsEffect;
