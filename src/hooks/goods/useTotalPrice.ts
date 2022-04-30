import { useEffect, useState } from 'react';

function useTotalPrice(quantity: number, price: number) {
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(quantity * price);
  }, [quantity]);

  const totalPriceString = totalPrice.toLocaleString('ko-KR');
  return { totalPrice, totalPriceString };
}

export default useTotalPrice;
