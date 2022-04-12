import { PageContainer } from 'components/common/CommonComponents';
import SearchField from 'components/search/SearchField';
import ResultItems from 'components/search/ResultItems';
import React from 'react';
import useGoodsQueryForm from 'hooks/search/useGoodsQueryForm';

function SearchResultPage() {
  const { goodsQueryString, onClickGoodsQS } = useGoodsQueryForm();
  return (
    <PageContainer>
      <SearchField />
      <ResultItems
        isSearch
        qs={goodsQueryString}
        onClickSort={onClickGoodsQS}
      />
    </PageContainer>
  );
}

export default SearchResultPage;
