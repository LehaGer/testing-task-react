import React, { FC } from 'react';
import RightBottomLabelStyles from './RightBottomLabel.module.scss';
import RightBottomRectangle from 'assets/right-bottom-rectangle.svg';
import { IRightBottomLabel } from '../../../types';

const RightBottomLabel: FC<IRightBottomLabel> = ({ className, children }) => {
  return (
    <div className={`${RightBottomLabelStyles.rightBottomLabel} ${className}`}>
      <img
        className={RightBottomLabelStyles.decorationImg}
        src={RightBottomRectangle}
        alt={''}
        draggable={false}
      />
      <div className={RightBottomLabelStyles.mainPartWrapper}>
        <div className={RightBottomLabelStyles.mainPart}>{children}</div>
      </div>
    </div>
  );
};

export default RightBottomLabel;
