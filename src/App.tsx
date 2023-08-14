import React from 'react';

import Home from './screens/Home';
import {QueryClient, QueryClientProvider} from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      retry: false,
    },
  },
});

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
