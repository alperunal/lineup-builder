import React from 'react';
import cn from 'classnames';
import './Switch.module.scss';

const Switch = ({
    id, checked, size, handleChange,
}) => (
    <label className="switch" htmlFor={`switch-${id}`}>
        <input
            type="checkbox"
            id={`switch-${id}`}
            checked={checked}
            onChange={handleChange}
        />
        <span
            className={
                cn(
                    'slider',
                    'round',
                    {
                        'slider--small': size === 'small',
                        'slider--medium': size === 'medium',
                        'slider--large': size === 'large',
                    },
                )
            }
        />
    </label>
);

export default Switch;
