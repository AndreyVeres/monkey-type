import { memo, FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from './config/config';

export const AppStore: FC<PropsWithChildren> = memo(({ children }) => {
  const store = createReduxStore();

  return <Provider store={store}>{children}</Provider>;
});
