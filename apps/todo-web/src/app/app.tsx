import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import { TodoList, trpc } from '@nx-trpc-demo/components';

export function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [httpBatchLink({ url: '/api' })],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <AddTodoForm />
        <TodoList />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
