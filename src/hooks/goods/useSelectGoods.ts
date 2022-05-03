import { IOrderItem } from 'model/goods';
import { useEffect, useState } from 'react';

function useSelectGoods() {
  const [selectedList, setSelectedList] = useState<IOrderItem[]>([]);
  const [list, setList] = useState<IOrderItem>({
    color: '',
    size: '',
    quantity: 1,
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
    setSelectedList(newList);
  };

  useEffect(() => {
    if (list.color !== '' && list.size !== '') {
      setSelectedList((prev) => [...prev, list]);
      setList({ size: '', color: '', quantity: 1 });
    }
    // 일단 주석처리중
    // return () => {
    //   setList({ size: '', color: '' });
    // };
  }, [list]);
  return { selectedList, list, onChangeList, onChangeQuantity };
}

export default useSelectGoods;
