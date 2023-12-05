import { Application } from 'express';
import { authRoutes } from '@auth/routes/authRoutes';
import { serverAdapter } from '@service/queues/base.queue';
import { currentUserRoutes } from './features/auth/routes/currentRoutes';

const BASE_PATH='/api/v1'

export default (app: Application) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const routes = () => {
    app.use(BASE_PATH, serverAdapter.routes());
    app.use('/queues', authRoutes.getRouter());
    app.use('/queues', authRoutes.signoutRoute());


    app.use('/queues', currentUserRoutes.routes());
  };
  routes();
};
