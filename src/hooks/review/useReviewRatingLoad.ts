import { getReviewRatingAPI } from 'libs/api/reviewAPI';
import { IRatingResponse } from 'model/review';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

function useReviewRatingLoad() {
  const { goodsid = '' } = useParams();
  const ratingData = useQuery<IRatingResponse>(
    ['rating', goodsid],
    () => getReviewRatingAPI(goodsid),
    {
      cacheTime: 5 * 60 * 1000,
      staleTime: 5 * 60 * 1000,
    },
  );
  return { ratingData };
}

export default useReviewRatingLoad;
