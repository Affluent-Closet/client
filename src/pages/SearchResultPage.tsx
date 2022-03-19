import { PageContainer } from 'components/common/CommonComponents';
import SearchField from 'components/search/SearchField';
import SearchResultItem from 'components/search/SearchResultItem';
import React from 'react';

function SearchResultPage() {
  return (
    <PageContainer>
      <SearchField />
      <SearchResultItem />
    </PageContainer>
  );
}

export default SearchResultPage;
