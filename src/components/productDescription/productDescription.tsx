import React, { FC } from 'react';
import ProductDescriptionStyles from './productDescription.module.scss';
import SalesStats from '../SalesStats/SalesStats';
import GoToVideoButton from '../GoToVideoButton/GoToVideoButton';
import GoToCommentButton from '../GoToCommentButton/GoToCommentButton';

interface IProductDescriptionProps {
  className: string;
}

const ProductDescription: FC<IProductDescriptionProps> = ({ className }) => {
  return (
    <div className={`${ProductDescriptionStyles.productDescription} ${className}`}>
      <SalesStats
        boughtAmount={43}
        inBucketAmount={15}
        className={ProductDescriptionStyles.salesStats}
      ></SalesStats>
      <div className={ProductDescriptionStyles.goToButtonsWrapper}>
        <GoToVideoButton className={ProductDescriptionStyles.goToVideoBtn} amount={19} />
        <GoToCommentButton className={ProductDescriptionStyles.goToCommentBtn} amount={20} />
      </div>
    </div>
  );
};

export default ProductDescription;
