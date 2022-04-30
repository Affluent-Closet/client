import { useEffect, useState } from 'react';

/** 원래가격, 할인률 입력 */
function useDiscountCal(originalPrice: number, discountRate: number) {
  const [discountPrice, setDiscountPrice] = useState<number>(0);
  useEffect(() => {
    setDiscountPrice(originalPrice * ((100 - discountRate) / 100));
  }, []);
  const discountPriceString = discountPrice.toLocaleString('ko-KR');
  return { discountPrice, discountPriceString };
}

/** discountPrice는 숫자 계산용, discountPriceString는 , 찍혀있는 보여주기용 */
export default useDiscountCal;
