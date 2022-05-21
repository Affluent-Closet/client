import { PageContainer } from 'components/common/CommonComponents';
import ResultItems from 'components/search/ResultItems';
import { SearchTit } from 'components/search/SearchField';
import useGoodsQueryForm from 'hooks/search/useGoodsQueryForm';
import { SortMethod } from 'model/enums';
import React from 'react';
import { useLocation } from 'react-router-dom';

function NewBestPage() {
  const location = useLocation();
  const { goodsQueryString, onClickGoodsQS } = useGoodsQueryForm(
    location.pathname === '/best' ? SortMethod.BEST : SortMethod.NEW,
  );
  return (
    <PageContainer>
      <SearchTit>{location.pathname.replace('/', '')}</SearchTit>
      <ResultItems
        isSearch={false}
        qs={goodsQueryString}
        onClickSort={onClickGoodsQS}
      />
    </PageContainer>
  );
}

export default NewBestPage;
