import React, { FC } from 'react';
import SalesStatsStyles from './SalesStats.module.scss';
import bucketImage from 'assets/bucket.svg';
import { ISalesStats } from '../../types';

const SalesStats: FC<ISalesStats> = ({ className, boughtAmount, inBucketAmount }) => {
  return (
    <div className={`${SalesStatsStyles.salesStats} ${className}`}>
      <div className={SalesStatsStyles.boughtAmount}>купили {boughtAmount} раза</div>
      <div className={SalesStatsStyles.divider} />
      <div className={SalesStatsStyles.inBucketAmount}>
        <img src={bucketImage} alt={''} draggable={false} />
        <div>в корзине у {inBucketAmount} пользователей</div>
      </div>
    </div>
  );
};

export default SalesStats;
