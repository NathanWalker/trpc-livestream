import { Component, createSignal } from 'solid-js';
// import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';

import logo from './logo.svg';
import styles from './App.module.css';
// import { TodoList, trpc } from '@nx-trpc-demo/components';
// import { httpBatchLink } from 'solid-trpc';

const App: Component = () => {

  // const [queryClient] = createSignal(() => new QueryClient());
  // const [trpcClient] = createSignal(() =>
  //   trpc.createClient({
  //     links: [httpBatchLink({ url: '/api' })],
  //   })
  // );

  // return (
  //   <trpc.Provider client={trpcClient} queryClient={queryClient}>
  //     <QueryClientProvider client={queryClient}>
  //       <div class={styles.App}>
  //         <header class={styles.header}>
  //         <TodoList />
  //           <img src={logo} class={styles.logo} alt="logo" />
  //           <p>
  //             Edit <code>src/App.tsx</code> and save to reload.
  //           </p>
  //           <a
  //             class={styles.link}
  //             href="https://github.com/solidjs/solid"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             Learn Solid
  //           </a>
  //         </header>
  //       </div>
  //     </QueryClientProvider>
  //   </trpc.Provider>
  // );

  return  (
    <div class={styles.App}>
        <header class={styles.header}>
          <img src={logo} class={styles.logo} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            class={styles.link}
            href="https://github.com/solidjs/solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Solid
          </a>
        </header>
      </div>
  )
};

export default App;
