import { createTRPCSolid } from 'solid-trpc';
import { TodoTrpcRouter, trpcRouter } from '@nx-trpc-demo/todo-trpc-server';
import { setupTRPC } from '@nx-trpc-demo/components';

setupTRPC(createTRPCSolid<TodoTrpcRouter>());
