import { getGoodsAPI } from 'libs/api/goodsAPI';
import { IGoodsQuery, IGoodsResponse } from 'model/goods';
import { useQuery } from 'react-query';

function useGoodsEffect(goodsQueryString: IGoodsQuery) {
  const { pageNo, sortBy, category, name } = goodsQueryString;
  const goodsData = useQuery<IGoodsResponse>(
    ['goods', pageNo, sortBy, category, name],
    () => getGoodsAPI(goodsQueryString),
    {
      cacheTime: 5 * 60 * 1000,
      staleTime: 5 * 60 * 1000,
    },
  );
  // eslint-disable-next-line no-console
  console.log(goodsQueryString, goodsData.data);
  return { goodsData };
}

export default useGoodsEffect;
