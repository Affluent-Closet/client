import { IOrderItem } from 'model/goods';
import { useEffect, useState } from 'react';

function useSelectGoods(price: number) {
  const [selectedList, setSelectedList] = useState<IOrderItem[]>([]);
  const [list, setList] = useState<IOrderItem>({
    color: '',
    size: '',
    quantity: 1,
    total: 0,
  });

  const onChangeList = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, id } = e.target;
    setList((prev) => ({
      ...prev,
      [name]: id,
    }));
  };

  const onChangeQuantity = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const value = Number(e.currentTarget.value);
    const newList = [...selectedList];
    newList[index].quantity += value;
    newList[index].total = newList[index].quantity * price;
    setSelectedList(newList);
  };

  const onDeleteList = (index: number) => {
    const newList = [...selectedList];
    newList.splice(index, 1);
    setSelectedList(newList);
  };

  useEffect(() => {
    if (list.color !== '' && list.size !== '') {
      setSelectedList((prev) => [...prev, list]);
      setList({ size: '', color: '', quantity: 1, total: 0 });
    }
    // 일단 주석처리중
    // return () => {
    //   setList({ size: '', color: '' });
    // };
  }, [list]);
  return { selectedList, list, onChangeList, onChangeQuantity, onDeleteList };
}

export default useSelectGoods;
