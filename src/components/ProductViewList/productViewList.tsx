import React, { FC, useState } from 'react';
import ProductViewListStyles from './productViewList.module.scss';
import UpButton from '../UI/Buttons/UpButton/UpButton';
import DownButton from '../UI/Buttons/DownButton/DownButton';

import { IProductNameViewList, ProductListItemType } from '../../types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { currentImageSlice } from '../../store/reducers/currentImageSlice';
import ProductViewListItem from '../ProductViewListItem/productViewListItem';

const ProductViewList: FC<IProductNameViewList> = ({ className, data }) => {
  const { photos, videos } = data;
  const [firstListImage, setFirstListImage] = useState(0);
  const [isUpBtnActive, setIsUpBtnActive] = useState(false);
  const [isDownBtnActive, setIsDownBtnActive] = useState(true);
  const dispatch = useAppDispatch();
  const currentImage = useAppSelector((state) => state.currentImageReducer);
  const { setCurrentImage } = currentImageSlice.actions;

  const isFirstItemAchieved = (firstDisplayedItem: number) => firstDisplayedItem === 0;
  const isLastItemAchieved = (firstDisplayedItem: number, displayingCapacity = 4) =>
    Math.abs(firstDisplayedItem) + displayingCapacity >= photos.length + videos.length;

  const moveListUp = () => {
    if (!isFirstItemAchieved(firstListImage)) {
      setFirstListImage(firstListImage + 1);
      setIsDownBtnActive(true);
    } else setIsUpBtnActive(false);
  };
  const moveListDown = () => {
    if (!isLastItemAchieved(firstListImage)) {
      setFirstListImage(firstListImage - 1);
      setIsUpBtnActive(true);
    } else setIsDownBtnActive(false);
  };

  const onClickPreview = (type: ProductListItemType, id: string) => {
    const url =
      type === ProductListItemType.PHOTO
        ? photos[Number(id)].original
        : videos[Number(id)].original;
    dispatch(setCurrentImage({ ...currentImage, url }));
  };

  return (
    <div className={`${ProductViewListStyles.productViewList} ${className}`}>
      <UpButton onClick={moveListUp} isActive={isUpBtnActive}></UpButton>
      <div className={ProductViewListStyles.scrollAreaWrapper}>
        <div
          className={ProductViewListStyles.scrollArea}
          style={{ top: `${firstListImage * 163}px` }}
        >
          {photos.map((photoInfo, index) => (
            <ProductViewListItem
              key={index}
              type={ProductListItemType.PHOTO}
              preview={photoInfo['260']}
              className={ProductViewListStyles.item}
              onClick={onClickPreview}
              photoId={String(index)}
            />
          ))}
          {videos.map((videoInfo, index) => (
            <ProductViewListItem
              key={index}
              type={ProductListItemType.VIDEO}
              preview={videoInfo['260']}
              className={ProductViewListStyles.item}
              onClick={onClickPreview}
              photoId={String(index)}
            />
          ))}
        </div>
      </div>
      <DownButton onClick={moveListDown} isActive={isDownBtnActive}></DownButton>
    </div>
  );
};

export default ProductViewList;
