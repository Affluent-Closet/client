import { act, renderHook } from '@testing-library/react-hooks';
import React from 'react';
import useForm from '../useForm';

const MOCK_FORM_DATA = {
  id: 12,
  text: '테스트',
};

describe('useForm', () => {
  test('useForm은 요소가 3개인 객체를 리턴한다. {form,onChangeForm,onResetForm}', () => {
    const { result } = renderHook(() => {
      useForm(MOCK_FORM_DATA);
    });
    expect(Object.keys(result)).toHaveLength(3);
  });

  test('onResetForm 함수를 실행했을 때 value 값이 초기화된다.', () => {
    const { result } = renderHook(() => useForm(MOCK_FORM_DATA));

    act(() => {
      result.current.onChangeForm({
        target: {
          name: 'text',
          value: '16',
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.form.text).toBe('16');

    act(() => {
      result.current.onResetForm();
    });

    expect(result.current.form).toBe(MOCK_FORM_DATA);
  });
});
