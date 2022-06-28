// eslint-disable-next-line import/no-extraneous-dependencies
import { renderHook } from '@testing-library/react-hooks';
import useToggle from 'hooks/common/useToggle';

describe('useToggle', () => {
  test('useToggle은 길이가 2인 배열을 리턴한다. (state, onToggle)', () => {
    const { result } = renderHook(() => useToggle(false));
    expect(result.current).toHaveLength(2);
  });
});
