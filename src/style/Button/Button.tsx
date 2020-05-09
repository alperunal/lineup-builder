import React from 'react';
import classnames from 'classnames';

interface IProps {
    customClass?: string;
    styleType?: string;
}

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement> & IProps) {
    const { styleType, children, customClass } = props;

    return (
        <button
            className={classnames(customClass, 'card', {
                'card--success': styleType === 'success',
                'card--warning': styleType === 'warning',
                'card--danger': styleType === 'danger',
            })}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
