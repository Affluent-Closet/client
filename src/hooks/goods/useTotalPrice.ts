/* eslint-disable no-console */
import { useEffect, useState } from 'react';

export function useTotalPrice(quantity: number, price: number) {
  const [totalPrice, setTotalPrice] = useState(0);
  console.log(quantity, price);
  useEffect(() => {
    setTotalPrice(quantity * price);
  }, [quantity]);
  console.log(totalPrice);
  // const totalPriceString = totalPrice.toLocaleString('ko-KR');
  return totalPrice;
}
