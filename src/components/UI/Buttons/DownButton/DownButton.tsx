import React, { FC } from 'react';
import DownBtnStyles from './DownButton.module.scss';
import { IDownButtonProps } from '../../../../types';

const DownButton: FC<IDownButtonProps> = ({ onClick, isActive, className }) => {
  const onClickResultEvent = isActive
    ? onClick
    : (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
      };
  return (
    <div
      className={`${DownBtnStyles.button} ${className} ${!isActive ? DownBtnStyles.inactive : ''}`}
      onClick={onClickResultEvent}
    ></div>
  );
};

export default DownButton;
