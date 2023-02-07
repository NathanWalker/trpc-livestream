import { createTRPCReact } from '@trpc/react-query';
import { TodoTrpcRouter, trpcRouter } from '@nx-trpc-demo/todo-trpc-server';
import { setupTRPC } from '@nx-trpc-demo/components';

setupTRPC(createTRPCReact<TodoTrpcRouter>());
