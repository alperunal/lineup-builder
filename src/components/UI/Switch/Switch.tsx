import React from 'react';
import cn from 'classnames';
import './Switch.module.scss';

type Props = {
    id: string,
    checked: boolean,
    size?: 'large' | 'medium' | 'small',
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
};

const Switch = ({
    id, checked, size, handleChange,
}: Props): JSX.Element => (
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
