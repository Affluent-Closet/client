import { PageContainer } from 'components/common/CommonComponents';
import { SearchTit } from 'components/search/SearchField';
import ResultItems from 'components/search/ResultItems';
import React from 'react';
import { useParams } from 'react-router-dom';

function CategoryPage() {
  const params = useParams();
  // eslint-disable-next-line no-console
  console.log(params.categoryid);
  return (
    <PageContainer>
      <SearchTit>Category</SearchTit>
      <ResultItems isSearch={false} keyword={params.categoryid} />
    </PageContainer>
  );
}

export default CategoryPage;
