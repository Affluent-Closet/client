import { PageContainer } from 'components/common/CommonComponents';
import { SearchTit } from 'components/search/SearchField';
import ResultItems from 'components/search/ResultItems';
import React from 'react';
import useGoodsQueryForm from 'hooks/search/useGoodsQueryForm';

function CategoryPage() {
  const { goodsQueryString, onClickGoodsQS } = useGoodsQueryForm();
  return (
    <PageContainer>
      <SearchTit>Category</SearchTit>
      <ResultItems
        isSearch={false}
        qs={goodsQueryString}
        onClickSort={onClickGoodsQS}
      />
    </PageContainer>
  );
}

export default CategoryPage;
