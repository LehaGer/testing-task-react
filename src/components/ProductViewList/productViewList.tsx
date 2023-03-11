import React, { FC } from 'react';
import ProductViewListStyles from './productViewList.module.scss';
import UpButton from '../UI/Buttons/UpButton/UpButton';
import DownButton from '../UI/Buttons/DownButton/DownButton';
import ProductViewListItem, {
  ProductListItemType,
} from '../ProductViewListItem/productViewListItem';
import sidePreview1 from 'assets/photos/side-previw-1.png';
import sidePreview2 from 'assets/photos/side-previw-2.png';
import sidePreview3 from 'assets/photos/side-previw-3.png';
import sidePreview4 from 'assets/photos/side-previw-4.png';

const sidePreviewArr = [sidePreview1, sidePreview2, sidePreview3, sidePreview4];

interface IProductNameViewList {
  className?: string;
}

const ProductViewList: FC<IProductNameViewList> = ({ className }) => {
  return (
    <div className={`${ProductViewListStyles.productViewList} ${className}`}>
      <UpButton></UpButton>
      <div>
        {Array(3)
          .fill(null)
          .map((el, index) => (
            <ProductViewListItem
              key={index}
              className={ProductViewListStyles.item}
              type={ProductListItemType.PHOTO}
              preview={sidePreviewArr[index]}
            ></ProductViewListItem>
          ))}
        <ProductViewListItem
          className={ProductViewListStyles.item}
          type={ProductListItemType.VIDEO}
          preview={sidePreview4}
        ></ProductViewListItem>
      </div>
      <DownButton></DownButton>
    </div>
  );
};

export default ProductViewList;
