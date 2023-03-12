import React, { FC } from 'react';
import ProductViewStyles from './productView.module.scss';
import ProductViewList from '../ProductViewList/productViewList';
import shareBtnImg from 'assets/share.svg';
import likeBtnImg from 'assets/like.svg';
import downloadBtnImg from 'assets/downloadsvg.svg';
import RightBottomLabel from '../UI/RightBottomLabel/RightBottomLabel';
import { IProductInfo } from '../../types';
import { useAppSelector } from '../../hooks/redux';

interface IProductNameView {
  data: Pick<IProductInfo, 'photos' | 'videos' | 'isNew' | 'promocode'>;
  className?: string;
}

const ProductView: FC<IProductNameView> = ({ className, data }) => {
  const { photos, videos, isNew, promocode } = data;
  const currentImage = useAppSelector((state) => state.currentImageReducer);

  return (
    <div className={`${ProductViewStyles.productView} ${className}`}>
      <ProductViewList data={{ photos, videos }} className={ProductViewStyles.list} />
      <div className={ProductViewStyles.current}>
        <img
          className={ProductViewStyles.img}
          src={currentImage.url ?? undefined}
          alt={'current image'}
          draggable={false}
        />
        <img className={ProductViewStyles.likeBtn} src={likeBtnImg} alt={''} draggable={false} />
        <img className={ProductViewStyles.shareBtn} src={shareBtnImg} alt={''} draggable={false} />
        <img
          className={ProductViewStyles.downloadBtn}
          src={downloadBtnImg}
          alt={''}
          draggable={false}
        />
        {isNew ? <div className={ProductViewStyles.topLeftMark}>NEW</div> : null}
        <RightBottomLabel className={ProductViewStyles.bottomRightMark}>
          {`${promocode.title}`}
        </RightBottomLabel>
      </div>
    </div>
  );
};

export default ProductView;
