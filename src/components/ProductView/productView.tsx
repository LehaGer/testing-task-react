import React, { FC } from 'react';
import ProductViewStyles from './productView.module.scss';
import ProductViewList from '../ProductViewList/productViewList';
import mainPreview from 'assets/photos/main-previw.png';
import shareBtnImg from 'assets/share.svg';
import likeBtnImg from 'assets/like.svg';
import downloadBtnImg from 'assets/downloadsvg.svg';
import RightBottomLabel from '../UI/RightBottomLabel/RightBottomLabel';

interface IProductNameView {
  className?: string;
}

const ProductView: FC<IProductNameView> = ({ className }) => {
  return (
    <div className={`${ProductViewStyles.productView} ${className}`}>
      <ProductViewList className={ProductViewStyles.list}></ProductViewList>
      <div className={ProductViewStyles.current}>
        <img className={ProductViewStyles.img} src={mainPreview} alt={''} draggable={false} />
        <img className={ProductViewStyles.likeBtn} src={likeBtnImg} alt={''} draggable={false} />
        <img className={ProductViewStyles.shareBtn} src={shareBtnImg} alt={''} draggable={false} />
        <img
          className={ProductViewStyles.downloadBtn}
          src={downloadBtnImg}
          alt={''}
          draggable={false}
        />
        <div className={ProductViewStyles.topLeftMark}>NEW</div>
        <RightBottomLabel className={ProductViewStyles.bottomRightMark}>#вклад</RightBottomLabel>
      </div>
    </div>
  );
};

export default ProductView;
