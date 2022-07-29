import GlobalStyles from 'libs/styles/globalStyles';
import React from 'react';
import styled from 'styled-components';
import MobileHeader from 'components/base/MobileHeader';
import WebHeader from 'components/base/WebHeader';
import { mediaSize } from 'libs/styles/media';
import Footer from 'components/footer';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { isLogin } from 'libs/utils/auth';
import { PrivateRouting, PublicRouting } from 'routes/Routing';

const ContentsLayout = styled.div`
  width: 100%;
  max-width: ${mediaSize.xlarge}px;
  margin: 0 auto;
  flex: 1 0 auto;
`;

const AppLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout>
        <GlobalStyles />
        <MobileHeader />
        <WebHeader />
        <ContentsLayout>
          {isLogin() ? <PrivateRouting /> : <PublicRouting />}
        </ContentsLayout>
        <Footer />
      </AppLayout>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
