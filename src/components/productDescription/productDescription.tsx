import React, { FC } from 'react';
import ProductDescriptionStyles from './productDescription.module.scss';
import SalesStats from '../SalesStats/SalesStats';
import GoToVideoButton from '../GoToVideoButton/GoToVideoButton';
import GoToCommentButton from '../GoToCommentButton/GoToCommentButton';
import { IProductDescriptionProps } from '../../types';
import Price from '../Price/Price';

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
      <div className={ProductDescriptionStyles.sizes}></div>
      <div className={ProductDescriptionStyles.heights}></div>
      <div className={ProductDescriptionStyles.deadline}></div>
      <div className={ProductDescriptionStyles.controlButtons}></div>
      <div className={ProductDescriptionStyles.delivery}></div>
      <div className={ProductDescriptionStyles.colors}></div>
      <div className={ProductDescriptionStyles.description}></div>
    </div>
  );
};

export default ProductDescription;
