import { IOrderItem } from 'model/goods';
import { useState } from 'react';

function useSelectGoods(price: number) {
  const [selectedList, setSelectedList] = useState<IOrderItem[]>([]);

  const onClickSize = (id: string) => {
    const isExist = selectedList.some((item) => item.size === id);
    if (isExist) return;

    setSelectedList((prev) =>
      prev.concat({
        size: id,
        quantity: 1,
        total: price,
      }),
    );
  };

  const onChangeQuantity = (type: 'plus' | 'minus', size: string) => {
    const value = type === 'plus' ? 1 : -1;

    const isItem = selectedList.find((item) => item.size === size);
    if (isItem && isItem.quantity + value === -1) return;

    setSelectedList((prev) =>
      prev.map((item) =>
        item.size === size
          ? {
              ...item,
              quantity: item.quantity + value,
              total: item.total + price * value,
            }
          : item,
      ),
    );
  };

  const onDeleteList = (size: string) => {
    setSelectedList((prev) => prev.filter((item) => item.size !== size));
  };

  return { selectedList, onClickSize, onChangeQuantity, onDeleteList };
}

export default useSelectGoods;
