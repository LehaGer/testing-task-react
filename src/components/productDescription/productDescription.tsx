import React, { FC } from 'react';
import ProductDescriptionStyles from './productDescription.module.scss';

interface IProductDescriptionProps {
  className: string;
}

const ProductDescription: FC<IProductDescriptionProps> = ({ className }) => {
  return <div className={`${ProductDescriptionStyles.productDescription} ${className}`}></div>;
};

export default ProductDescription;
