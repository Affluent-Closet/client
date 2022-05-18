/* eslint-disable no-console */
/* eslint-disable no-alert */
import { postSizeInfoAPI } from 'libs/api/goodsAPI';
import { IRequestSizeInfo } from 'model/goods';
import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';

function useSizeForm() {
  const { goodsid } = useParams<'goodsid'>();
  const parseGoodsId = goodsid ? Number(goodsid) : 0;
  const [sizeDatas, setSizeDatas] = useState<IRequestSizeInfo[]>([
    {
      size: '',
      stock: 0,
      goodsId: parseGoodsId,
    },
  ]);

  const onChangeSizeData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const { name, value } = e.target;
      const newList = [...sizeDatas];
      if (name === 'size') newList[index].size = value;
      else {
        const stockValue = Number(e.currentTarget.value);
        newList[index].stock = stockValue;
      }
      console.log(newList);
      setSizeDatas(newList);
    },
    [sizeDatas],
  );

  const onAddData = useCallback(() => {
    const newList = [...sizeDatas];
    newList.push({
      size: '',
      stock: 0,
      goodsId: parseGoodsId,
    });
    setSizeDatas(newList);
  }, [sizeDatas]);

  const onPostSize = async () => {
    console.log(sizeDatas);
    try {
      await Promise.all(
        sizeDatas.map(async (sizeData) => {
          console.log(sizeData);
          await postSizeInfoAPI(sizeData);
        }),
      );
    } catch (error) {
      alert('sizeInfo 추가에 실패했습니다');
      console.log(error);
    }
  };
  return { sizeDatas, onChangeSizeData, onAddData, onPostSize };
}

export default useSizeForm;
