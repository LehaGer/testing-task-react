import React, { FC } from 'react';
import ProductNameStyles from './ProductName.module.scss';
import { IProductNameProps } from '../../types';

const ProductName: FC<IProductNameProps> = ({ name, className }) => {
  return <div className={`${ProductNameStyles.productName} ${className}`}>{name}</div>;
};

export default ProductName;
