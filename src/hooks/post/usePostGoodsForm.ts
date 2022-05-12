import useForm from 'hooks/common/useForm';
import React from 'react';

function usePostGoodsForm() {
  const { form, onChangeForm, onResetForm } = useForm({
    category: 'PANTS',
    name: '수정된 데님',
    price: '200000',
    discount: '10',
    stock: '1000',
    detail: [],
    thumbnail: '',
  });
}

export default usePostGoodsForm;
