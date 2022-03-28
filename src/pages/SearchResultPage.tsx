import { PageContainer } from 'components/common/CommonComponents';
import SearchField from 'components/search/SearchField';
import ResultItems from 'components/search/ResultItems';
import React from 'react';

function SearchResultPage() {
  return (
    <PageContainer>
      <SearchField />
      <ResultItems isSearch keyword="데님" />
    </PageContainer>
  );
}

export default SearchResultPage;
