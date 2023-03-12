import React, { FC } from 'react';
import ProductViewListItemStyles from './productViewListItem.module.scss';

interface IProductNameViewListItem {
  className?: string;
  type: ProductListItemType;
  preview: string;
  onClick: (type: ProductListItemType, id: string) => void;
  photoId: string;
}

export enum ProductListItemType {
  PHOTO = 'PHOTO',
  VIDEO = 'VIDEO',
}

const ProductViewListItem: FC<IProductNameViewListItem> = ({
  className,
  type,
  preview,
  onClick,
  photoId,
}) => {
  return (
    <div
      className={`${ProductViewListItemStyles.productViewListItem} ${className}`}
      onClick={(e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        e.stopPropagation();
        onClick(type, String(photoId));
      }}
    >
      <img className={ProductViewListItemStyles.image} src={preview} alt={''} draggable={false} />
      {type === ProductListItemType.VIDEO ? (
        <div className={ProductViewListItemStyles.videoButtonWrapper}>
          <div className={ProductViewListItemStyles.videoButton}>
            <div className={ProductViewListItemStyles.sign}></div>
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default ProductViewListItem;
