import React, { FC } from 'react';
import UpBtnStyles from './UpButton.module.scss';

interface IUpButtonProps {
  onClick?: (e: React.MouseEvent) => void;
  isActive: boolean;
  className?: string;
}

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
