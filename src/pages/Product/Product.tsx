import React from 'react';
// import { useParams } from 'react-router-dom';
import ProductPageStyles from './Product.module.scss';
import BackButton from '../../components/UI/Buttons/BackButton/BackButton';
import ProductName from '../../components/ProductName/ProductName';
import ProductView from '../../components/ProductView/productView';
import ProductDescription from '../../components/productDescription/productDescription';
import Recommendations from '../../components/recommendations/recommendations';

const Product = () => {
  // const { id } = useParams(); // 94756956

  return (
    <div className={ProductPageStyles.productPage}>
      <div className={ProductPageStyles.head}>
        <BackButton className={ProductPageStyles.backButton} />
        <ProductName
          name={'Luitui R1060 розовый, платье'}
          className={ProductPageStyles.productName}
        ></ProductName>
      </div>
      <ProductView className={ProductPageStyles.productView} />
      <ProductDescription className={ProductPageStyles.productDescription}></ProductDescription>
      <Recommendations className={ProductPageStyles.recommendations}></Recommendations>
    </div>
  );
};

export default Product;
