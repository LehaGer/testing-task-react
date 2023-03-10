import React, { FC } from 'react';
import ProductNameStyles from './ProductName.module.scss';

interface IProductNameProps {
  name: string;
  className: string;
}

const ProductName: FC<IProductNameProps> = ({ name, className }) => {
  return <div className={`${ProductNameStyles.productName} ${className}`}>{name}</div>;
};

export default ProductName;
