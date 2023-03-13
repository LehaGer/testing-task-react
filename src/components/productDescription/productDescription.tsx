import React, { FC } from 'react';
import ProductDescriptionStyles from './productDescription.module.scss';
import SalesStats from '../SalesStats/SalesStats';
import GoToVideoButton from '../GoToVideoButton/GoToVideoButton';
import GoToCommentButton from '../GoToCommentButton/GoToCommentButton';
import { IProductInfo } from '../../types';
import Price from '../Price/Price';

interface IProductDescriptionProps {
  className: string;
  data: IProductInfo;
}

const ProductDescription: FC<IProductDescriptionProps> = ({ className, data }) => {
  return (
    <div className={`${ProductDescriptionStyles.productDescription} ${className}`}>
      <SalesStats
        boughtAmount={43}
        inBucketAmount={15}
        className={ProductDescriptionStyles.salesStats}
      ></SalesStats>
      <div className={ProductDescriptionStyles.goToButtonsWrapper}>
        <GoToVideoButton
          className={ProductDescriptionStyles.goToVideoBtn}
          amount={data.reviewsCount}
        />
        <GoToCommentButton
          className={ProductDescriptionStyles.goToCommentBtn}
          amount={data.questionsCount}
        />
      </div>
      <Price
        data={{ price: data.price, promocode: data.promocode }}
        className={ProductDescriptionStyles.price}
      />
    </div>
  );
};

export default ProductDescription;
