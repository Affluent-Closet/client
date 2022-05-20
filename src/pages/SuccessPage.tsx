import { postPaymentAPI } from 'libs/api/payAPI';
import { QueryParams } from 'model/pay';
import QueryString from 'qs';
import React, { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

function SuccessPage() {
  const location = useLocation();
  // const navigate = useNavigate();
  const query = useMemo(() => {
    const parseQuery = QueryString.parse(location.search, {
      ignoreQueryPrefix: true,
    }) as QueryParams;
    return parseQuery;
  }, [location.search]);

  useEffect(() => {
    postPaymentAPI(query);
    // navigate('/');
  }, []);

  return <div>SuccessPage</div>;
}

export default SuccessPage;
