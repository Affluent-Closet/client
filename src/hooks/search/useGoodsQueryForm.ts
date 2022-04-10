import { SortMethod } from 'model/enums';
import { IGoodsQuery } from 'model/goods';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { INITIALQUERYSTRING } from './constants';

export default function useGoodsQueryForm(sort?: SortMethod) {
  const params = useParams();
  const [searchParam] = useSearchParams();
  const [goodsQueryString, setGoodsQueryString] =
    useState<IGoodsQuery>(INITIALQUERYSTRING);

  useEffect(() => {
    setGoodsQueryString({
      pageNo: 1,
      pageSize: 10,
      name: searchParam.get('name') || '',
      category: params.categoryid?.toUpperCase() || '',
      sortBy: sort || SortMethod.BEST,
    });
  }, [params]);

  const onChangeGoodsQS = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setGoodsQueryString((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Item sort 버튼에 적용할거
  const onClickGoodsQS = (e: MouseEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setGoodsQueryString((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { goodsQueryString, onChangeGoodsQS, onClickGoodsQS };
}
