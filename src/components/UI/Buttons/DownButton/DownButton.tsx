import React, { FC } from 'react';
import DownBtnStyles from './DownButton.module.scss';

interface IDownButtonProps {
  isActive: boolean;
  onClick: (e: React.MouseEvent) => void;
  className?: string;
}

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
