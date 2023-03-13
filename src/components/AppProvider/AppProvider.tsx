import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '../../store/store';
import { IAppProviderProps } from '../../types';

export const AppProvider: FC<IAppProviderProps> = ({ children }) => {
  const store = setupStore();

  return <Provider store={store}>{children}</Provider>;
};
