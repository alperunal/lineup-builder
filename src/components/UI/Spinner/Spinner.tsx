import React from 'react';
import './Spinner.module.scss';

const Spinner = (): JSX.Element => (
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
