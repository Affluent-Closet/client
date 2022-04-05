import useInput from 'hooks/common/useInput';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function useSearchForm() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searhIndex, onChangeSearchIndex] = useInput('');
  const onSearch = () => {
    navigate(
      `/search/result?pageNo=1&pageSize=20&name=${searhIndex}&category=&sortBy=`,
    );
  };
  return { onSearch, onChangeSearchIndex, searchParams };
}
