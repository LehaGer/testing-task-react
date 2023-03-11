import React, { FC } from 'react';
import DownBtnStyles from './DownButton.module.scss';

interface IDownButtonProps {
  className?: string;
}

const DownButton: FC<IDownButtonProps> = (props) => {
  return <div className={`${DownBtnStyles.button} ${props.className}`}></div>;
};

export default DownButton;
