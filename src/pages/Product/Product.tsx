import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import ProductPageStyles from './Product.module.scss';
import BackButton from '../../components/UI/Buttons/BackButton/BackButton';
import ProductName from '../../components/ProductName/ProductName';
import ProductView from '../../components/ProductView/productView';
import ProductDescription from '../../components/productDescription/productDescription';
import Recommendations from '../../components/recommendations/recommendations';
import ProductService, { IProductQueryAttributes } from '../../API/ProductService';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { PRODUCT_CARD_LOAD_STATUS } from '../../store/reducers/productCardSlice';

const Product = () => {
  const { id } = useParams(); // 94756956
  const dispatch = useAppDispatch();
  const productCard = useAppSelector((state) => state.productCardReducer);

  useEffect(
    () => {
      (async () => {
        await updateProductCard({ productId: String(id) });
      })();
    }, // eslint-disable-next-line
    []
  );

  const updateProductCard = async (productQueryAttr: IProductQueryAttributes) => {
    dispatch(ProductService.getProductInfo(productQueryAttr));
  };

  if (productCard.status === PRODUCT_CARD_LOAD_STATUS.LOADING) return <>загрузка...</>;
  if (!productCard.data) return <>нет данных о товаре</>;

  return (
    <div className={ProductPageStyles.productPage}>
      <div className={ProductPageStyles.head}>
        <BackButton className={ProductPageStyles.backButton} />
        <ProductName
          name={`${productCard.data.fullName}, ${productCard.data.category.value}`}
          className={ProductPageStyles.productName}
        ></ProductName>
      </div>
      {productCard.data ? (
        <ProductView
          className={ProductPageStyles.productView}
          data={{
            photos: productCard.data.photos,
            videos: productCard.data.videos,
            isNew: productCard.data.isNew,
            promocode: productCard.data.promocode,
          }}
        />
      ) : null}
      <ProductDescription
        data={productCard.data}
        className={ProductPageStyles.productDescription}
      ></ProductDescription>
      <Recommendations className={ProductPageStyles.recommendations}></Recommendations>
    </div>
  );
};

export default Product;
