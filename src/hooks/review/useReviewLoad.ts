import { getReviewAPI } from 'libs/api/reviewAPI';
import { IReviewQuery, IReviewResponse } from 'model/review';
import { useQuery } from 'react-query';

function useReviewLoad(reviewQueryString: IReviewQuery) {
  const { pageNo, sortBy, goodsId, pageSize } = reviewQueryString;
  const reviewData = useQuery<IReviewResponse>(
    ['review', pageNo, sortBy, goodsId, pageSize],
    () => getReviewAPI(reviewQueryString),
    {
      cacheTime: 5 * 60 * 1000,
      staleTime: 5 * 60 * 1000,
    },
  );
  return { reviewData };
}

export default useReviewLoad;
