import React, { FC } from 'react';
import GoToButton from '../UI/Buttons/GoToButton/GoToButton';
import commentImg from 'assets/message.svg';

interface IGoToCommentButtonProps {
  className?: string;
  amount: number;
}

const GoToCommentButton: FC<IGoToCommentButtonProps> = ({ className, amount }) => {
  return (
    <GoToButton
      icon={commentImg}
      name={'Отзывы покупателей'}
      amount={amount}
      className={className}
    />
  );
};

export default GoToCommentButton;
