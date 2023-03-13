import React, { FC, useState } from 'react';
import PriceStyles from './Price.module.scss';
import { IProductInfo } from '../../types';
import clockImg from 'assets/clock.svg';
import dividerImg from 'assets/devider.svg';

interface IPriceProps {
  data: Pick<IProductInfo, 'price' | 'promocode'>;
  className: string;
}

const Price: FC<IPriceProps> = ({ data, className }) => {
  const { price, promocode } = data;
  const [timeToEnd, setTimeToEnd] = useState('');

  setInterval(() => {
    const promocodeDateEnd = Date.parse(promocode.endedAt);
    const dateNow = Date.now();
    const dateDiff = promocodeDateEnd - dateNow;
    if (dateDiff <= 0) {
      setTimeToEnd('00:00:00:00');
      return;
    }
    const days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(dateDiff / (1000 * 60)) % 60;
    const seconds = Math.floor(dateDiff / 1000) % 60;
    setTimeToEnd(`${days}:${hours}:${minutes}:${seconds}`);
  }, 1000);

  return (
    <div className={`${PriceStyles.price} ${className}`}>
      <div className={PriceStyles.retail}>Розничная цена:</div>
      <div className={PriceStyles.main}>
        <div className={PriceStyles.countingSection}>
          <div className={PriceStyles.pricePart}>
            <div className={PriceStyles.pricePartCurrent}>{`${price.current} ${price.symbol}`}</div>
            <div className={PriceStyles.pricePartOld}>{`${price.old} ${price.symbol}`}</div>
          </div>
          <div>
            <div className={PriceStyles.discountSection}>
              <div
                className={PriceStyles.discountTitle}
              >{`-${price.discount.market.amount} ${price.symbol}`}</div>
              <div
                className={PriceStyles.discountDescription}
              >{`скидка бренда ${price.discount.market.percent}%`}</div>
            </div>
            <div className={PriceStyles.discountSection}>
              <div
                className={PriceStyles.discountTitle}
              >{`-${price.discount.promocode.amount} ${price.symbol}`}</div>
              <div
                className={PriceStyles.discountDescription}
              >{`${promocode.name} ${price.discount.promocode.percent}%`}</div>
            </div>
          </div>
        </div>
        <div className={PriceStyles.coupon}>
          <div className={PriceStyles.leftPart}>
            <div className={PriceStyles.title}>{`ПРОМОКОД ${promocode.name}`}</div>
            <div className={PriceStyles.description}>{promocode.description}</div>
            <div className={PriceStyles.timerWrapper}>
              <img className={PriceStyles.clock} src={clockImg} alt={'timer'} draggable={false} />
              <div className={PriceStyles.timer}>{timeToEnd}</div>
            </div>
          </div>
          <img
            className={PriceStyles.divider}
            src={dividerImg}
            alt={'divider'}
            draggable={false}
          ></img>
          <div className={PriceStyles.rightPart}>{`-${price.discount.promocode.percent}%`}</div>
        </div>
      </div>
      <div className={PriceStyles.wholeSale}>
        <div className={PriceStyles.wholeSalePrice}>
          Оптовая цена: {`${price.wholesale}${price.symbol}`}
        </div>
        <div className={PriceStyles.questionSymbol}>?</div>
      </div>
    </div>
  );
};

export default Price;
