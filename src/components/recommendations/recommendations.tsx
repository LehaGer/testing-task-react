import React, { FC } from 'react';
import RecommendationsStyles from './recommendations.module.scss';

interface IRecommendationsProps {
  className: string;
}

const Recommendations: FC<IRecommendationsProps> = ({ className }) => {
  return <div className={`${RecommendationsStyles.recommendations} ${className}`}></div>;
};

export default Recommendations;
