import { getGoodsAPI } from 'libs/api/goodsAPI';
import { IGoodsQuery, IGoodsResponse } from 'model/goods';
import { useQuery } from 'react-query';

function useGoodsEffect(goodsQueryString: IGoodsQuery) {
  const { pageNo, sortBy, category } = goodsQueryString;
  const goodsData = useQuery<IGoodsResponse>(
    ['goods', pageNo, sortBy, category],
    () => getGoodsAPI(goodsQueryString),
    {
      keepPreviousData: true,
    },
  );
  // eslint-disable-next-line no-console
  console.log(goodsQueryString, goodsData.data);
  return { goodsData };
}

export default useGoodsEffect;
