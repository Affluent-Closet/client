import { IOrderItem } from 'model/goods';
import { useEffect, useState } from 'react';

function useSelectGoods() {
  const [selectedList, setSelectedList] = useState<IOrderItem[]>([]);
  const [list, setList] = useState<IOrderItem>({ color: '', size: '' });

  const onChangeList = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, id } = e.target;
    setList((prev) => ({
      ...prev,
      [name]: id,
    }));
  };

  useEffect(() => {
    console.log('실행');
    if (list.color !== '' && list.size !== '') {
      setSelectedList((prev) => [...prev, list]);
      setList({ size: '', color: '' });
    }
    // 일단 주석처리중
    // return () => {
    //   setList({ size: '', color: '' });
    // };
  }, [list]);
  return { selectedList, list, onChangeList };
}

export default useSelectGoods;
