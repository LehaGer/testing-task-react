import React, { FC } from 'react';
import ProductViewStyles from './productView.module.scss';

interface IProductNameView {
  className: string;
}

const ProductView: FC<IProductNameView> = ({ className }) => {
  return <div className={`${ProductViewStyles.productView} ${className}`}></div>;
};

export default ProductView;
