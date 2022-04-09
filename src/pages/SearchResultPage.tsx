import { PageContainer } from 'components/common/CommonComponents';
import SearchField from 'components/search/SearchField';
import ResultItems from 'components/search/ResultItems';
import React from 'react';
import useGoodsQueryForm from 'hooks/search/useGoodsQueryForm';
import { useSearchParams } from 'react-router-dom';

function SearchResultPage() {
  const [searchParams] = useSearchParams();
  const { goodsQueryString, onClickGoodsQS } = useGoodsQueryForm(
    searchParams.get('name'),
  );
  return (
    <PageContainer>
      <SearchField />
      <ResultItems
        isSearch
        keyword={searchParams.get('name')}
        qs={goodsQueryString}
        onClickSort={onClickGoodsQS}
      />
    </PageContainer>
  );
}

export default SearchResultPage;
