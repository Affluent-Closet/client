import client from 'libs/api';
import { IGoodsItem } from 'model/goods';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export interface GoodsParams {
  goodsid: string;
}

function useOneGoodsEffect() {
  const { goodsid } = useParams<keyof GoodsParams>() as GoodsParams;

  const [goods, setGoods] = useState<IGoodsItem>({
    id: '',
    category: '',
    name: '',
    price: 0,
    discount: 0,
    stock: 0,
    detail: [],
    thumbnail: '',
    sellnum: 0,
    createAt: new Date(),
    status: '',
  });
  useEffect(() => {
    if (!goodsid) return;
    const getData = async () => {
      const resopnse = await client.get(`/goods/${goodsid}`);
      setGoods(resopnse.data);
    };
    getData();
  }, [goodsid]);

  return { goods };
}
export default useOneGoodsEffect;
