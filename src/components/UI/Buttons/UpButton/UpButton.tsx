import React, { FC } from 'react';
import UpBtnStyles from './UpButton.module.scss';

interface IUpButtonProps {
  className?: string;
}

const UpButton: FC<IUpButtonProps> = (props) => {
  return <div className={`${UpBtnStyles.button} ${props.className}`}></div>;
};

export default UpButton;
