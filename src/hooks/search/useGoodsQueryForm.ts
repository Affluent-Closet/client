import { SortMethod } from 'model/enums';
import { IGoodsQuery } from 'model/goods';
import { ChangeEvent, MouseEventHandler, useState } from 'react';

export default function useGoodsQueryForm() {
  // const [pageNoIndex, onChangePageNoIndex] = useInput('');
  // const [searhIndex, onChangeSearchIndex] = useInput('');
  // const [categoryIndex, , onChangeCategoryIndex] = useInput('');
  // const [sortByIndex, , onChangeSortByIndex] = useInput('');

  // return {
  //   pageNoIndex,
  //   onChangePageNoIndex,
  //   searhIndex,
  //   onChangeSearchIndex,
  //   categoryIndex,
  //   onChangeCategoryIndex,
  //   sortByIndex,
  //   onChangeSortByIndex,
  // };

  const [goodsQueryString, setGoodsQueryString] = useState<IGoodsQuery>({
    pageNo: 1,
    pageSize: 10,
    name: '',
    category: '',
    sortBy: SortMethod.BEST,
  });

  const onChangeGoodsQueryString = (
    e: any,
    // e: ChangeEvent<HTMLInputElement> | MouseEventHandler<HTMLButtonElement>,
  ) => {
    const { name, value } = e.target;
    setGoodsQueryString((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return { goodsQueryString, onChangeGoodsQueryString };
}
