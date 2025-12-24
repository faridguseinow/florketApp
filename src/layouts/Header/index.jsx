import React from 'react';
import './style.scss';

import LogoSM from '../../assets/icons/florket_logo.svg';

export default function Index() {

  return (
    <div className="header">
      <div className="logo">
        <img src={LogoSM} width={40} alt="logo" />
      </div>
      <span>Florket</span>
    </div>
  );
}
