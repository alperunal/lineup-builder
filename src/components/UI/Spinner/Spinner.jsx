import React from 'react';
import './Spinner.scss';

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
