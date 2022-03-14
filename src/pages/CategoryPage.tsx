import { PageContainer } from 'components/common/CommonComponents';
import { SearchTit } from 'components/search/SearchField';
import SearchResultItem from 'components/search/SearchResultItem';
import React from 'react';
import { useParams } from 'react-router-dom';

function CategoryPage() {
  const params = useParams();
  // eslint-disable-next-line no-console
  console.log(params.categoryid);
  return (
    <PageContainer>
      <SearchTit>Top</SearchTit>
      <SearchResultItem />
    </PageContainer>
  );
}

export default CategoryPage;
