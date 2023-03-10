import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '../../store/store';

interface BaseProps {
  children?: ReactNode;
}

export const AppProvider: FC<BaseProps> = ({ children }) => {
  const store = setupStore();

  return <Provider store={store}>{children}</Provider>;
};
