import { SortMethod } from 'model/enums';
import { IReviewQuery } from 'model/review';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { INITIALQUERYSTRING } from './constants';

export default function useReviewQueryForm(goodsId: string, sort?: SortMethod) {
  const params = useParams();
  const [reviewQS, setReviewQS] = useState<IReviewQuery>(INITIALQUERYSTRING);

  useEffect(() => {
    setReviewQS({
      goodsId,
      pageNo: 1,
      pageSize: 10,
      sortBy: sort || SortMethod.NEW,
    });
  }, [params]);

  const onChangeReviewQS = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setReviewQS((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Item sort 버튼에 적용할거
  const onClickReviewQS = (e: MouseEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setReviewQS((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { reviewQS, onChangeReviewQS, onClickReviewQS };
}
