import { IOrderItem } from 'model/goods';
import { useEffect, useState } from 'react';

function useSelectGoods(price: number) {
  const [selectedList, setSelectedList] = useState<IOrderItem[]>([]);
  const [list, setList] = useState<IOrderItem>({
    size: '',
    quantity: 1,
    total: 0,
  });

  const onClickSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setList({
      size: id,
      quantity: 1,
      total: price,
    });
  };

  const onChangeQuantity = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const value = Number(e.currentTarget.value);
    const newList = [...selectedList];
    newList[index].quantity += value;
    // eslint-disable-next-line operator-assignment
    newList[index].total = newList[index].total + price * value;
    setSelectedList(newList);
  };

  const onDeleteList = (index: number) => {
    const newList = [...selectedList];
    newList.splice(index, 1);
    setSelectedList(newList);
  };

  useEffect(() => {
    if (list.size !== '') {
      setSelectedList((prev) => [...prev, list]);
      setList({ size: '', quantity: 1, total: 0 });
    }
  }, [list.size]);
  return { selectedList, list, onClickSize, onChangeQuantity, onDeleteList };
}

export default useSelectGoods;
