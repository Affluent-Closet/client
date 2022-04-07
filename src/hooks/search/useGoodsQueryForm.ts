import { SortMethod } from 'model/enums';
import { IGoodsQuery } from 'model/goods';
import { ChangeEvent, MouseEventHandler, useState } from 'react';

export default function useGoodsQueryForm(
  q?: string | null,
  sort?: SortMethod,
) {
  const [goodsQueryString, setGoodsQueryString] = useState<IGoodsQuery>({
    pageNo: 1,
    pageSize: 10,
    name: q || '',
    category: '',
    sortBy: sort || SortMethod.BEST,
  });

  const onChangeGoodsQS = (
    e: any,
    // e: ChangeEvent<HTMLInputElement>
    // | MouseEventHandler<HTMLButtonElement>
  ) => {
    const { name, value } = e.target;
    setGoodsQueryString((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onChangeCustomQS = (name: string, value: string) => {
    setGoodsQueryString((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { goodsQueryString, onChangeGoodsQS, onChangeCustomQS };
}
