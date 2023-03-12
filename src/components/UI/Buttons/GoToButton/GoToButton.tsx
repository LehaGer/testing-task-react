import React, { FC } from 'react';
import GoToButtonStyles from './GoToButton.module.scss';

interface IGoToButtonProps {
  className?: string;
  icon: string;
  name: string;
  amount: number;
}

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
