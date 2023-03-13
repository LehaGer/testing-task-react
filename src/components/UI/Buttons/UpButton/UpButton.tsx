import React, { FC } from 'react';
import UpBtnStyles from './UpButton.module.scss';
import { IUpButtonProps } from '../../../../types';

const UpButton: FC<IUpButtonProps> = ({ onClick, isActive, className }) => {
  const onClickResultEvent = isActive
    ? onClick
    : (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
      };

  return (
    <div
      className={`${UpBtnStyles.button} ${className} ${!isActive ? UpBtnStyles.inactive : ''}`}
      onClick={onClickResultEvent}
    ></div>
  );
};

export default UpButton;
