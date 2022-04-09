import { PageContainer } from 'components/common/CommonComponents';
import { SearchTit } from 'components/search/SearchField';
import ResultItems from 'components/search/ResultItems';
import React from 'react';
import { useParams } from 'react-router-dom';
import useGoodsQueryForm from 'hooks/search/useGoodsQueryForm';

function CategoryPage() {
  const params = useParams();
  const { goodsQueryString, onClickGoodsQS } = useGoodsQueryForm(
    undefined,
    undefined,
    `${params.categoryid?.toUpperCase()}`,
  );
  return (
    <PageContainer>
      <SearchTit>Category</SearchTit>
      <ResultItems
        isSearch={false}
        keyword={params.categoryid}
        qs={goodsQueryString}
        onClickSort={onClickGoodsQS}
      />
    </PageContainer>
  );
}

export default CategoryPage;
