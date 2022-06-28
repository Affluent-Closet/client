// eslint-disable-next-line import/no-extraneous-dependencies
import { renderHook } from '@testing-library/react-hooks';
import useToggle from 'hooks/common/useToggle';

describe('useToggle', () => {
  test('useToggle은 길이가 2인 배열을 리턴한다. (state, onToggle)', () => {
    const { result } = renderHook(() => useToggle(false));
    expect(result.current).toHaveLength(2);
  });

  test('initialValue 값이 주어지지 않으면 초기값으로 false를 가진다', () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current[0]).toBe(false);
  });

  test('initalValue 값이 true로 넣어주면 초기값은 true 이다.', () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current[0]).toBe(true);
  });
});
