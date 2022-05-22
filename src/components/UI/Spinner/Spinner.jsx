import React from 'react';
import './Spinner.module.scss';

const Spinner = () => (
  <div className="spinner">
    <div className="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Spinner;
