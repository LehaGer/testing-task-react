import React, { FC } from 'react';
import BackBtnStyles from './BackButton.module.scss';
import { IBackButtonProps } from '../../../../types';

const BackButton: FC<IBackButtonProps> = (props) => {
  return (
    <div className={`${BackBtnStyles.button} ${props.className}`}>
      <div className={BackBtnStyles.arrow}></div>
      <div className={BackBtnStyles.name}>Назад</div>
    </div>
  );
};

export default BackButton;
