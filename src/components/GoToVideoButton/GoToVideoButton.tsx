import React, { FC } from 'react';
import GoToButton from '../UI/Buttons/GoToButton/GoToButton';
import videoImg from 'assets/video.svg';
import { IGoToCommentButtonProps } from '../../types';

const GoToVideoButton: FC<IGoToCommentButtonProps> = ({ className, amount }) => {
  return (
    <GoToButton
      icon={videoImg}
      name={'Смотреть видеообзоры'}
      amount={amount}
      className={className}
    />
  );
};

export default GoToVideoButton;
