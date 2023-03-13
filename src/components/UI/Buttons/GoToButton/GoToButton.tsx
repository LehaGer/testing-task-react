import React, { FC } from 'react';
import GoToButtonStyles from './GoToButton.module.scss';
import { IGoToButtonProps } from '../../../../types';

const GoToButton: FC<IGoToButtonProps> = ({ className, icon, name, amount }) => {
  return (
    <div className={`${GoToButtonStyles.goToButton} ${className}`}>
      <img src={icon} alt={'icon'} draggable={false} />
      <div className={GoToButtonStyles.amount}>+{amount}</div>
      <div className={GoToButtonStyles.name}>{name}</div>
    </div>
  );
};

export default GoToButton;
