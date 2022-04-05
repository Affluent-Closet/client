import { getGoodsAPI } from 'libs/api/goodsAPI';
import { IGoodsResponse } from 'model/goods';
import { useState } from 'react';
import { useQuery } from 'react-query';

function useGoodsEffect(pageSize: number) {
  const [pageNo, setPageNo] = useState(1);

  const goodsQuery = useQuery<IGoodsResponse>(
    ['goods', pageNo],
    () => getGoodsAPI(pageNo, pageSize),
    {
      keepPreviousData: true,
    },
  );
  return { goodsQuery, setPageNo };
}

export default useGoodsEffect;
