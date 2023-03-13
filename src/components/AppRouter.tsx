import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from '../pages/Product/Product';
import NotFound from '../pages/NotFound/NotFound';

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="product/:id" element={<Product />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
