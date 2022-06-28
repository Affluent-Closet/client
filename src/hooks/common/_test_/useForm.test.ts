import { renderHook } from '@testing-library/react-hooks';
import useForm from '../useForm';

const MOCK_FORM_DATA = {
  id: 12,
  text: '테스트',
};

describe('useForm', () => {
  it('useForm은 요소가 3개인 객체를 리턴한다. (form,onChangeForm,onResetForm)', () => {
    const { result } = renderHook(() => {
      useForm(MOCK_FORM_DATA);
    });
    expect(Object.keys(result)).toHaveLength(3);
  });
});
