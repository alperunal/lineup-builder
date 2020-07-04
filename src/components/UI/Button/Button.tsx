import React from 'react';
import classnames from 'classnames';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    customClass?: string;
    styleType?: string;
}

const Button: React.FC<IProps> = ({styleType, children, customClass, ...props}) => {
    return (
        <button
            className={classnames(customClass, 'button', {
                'button--success': styleType === 'success',
                'button--warning': styleType === 'warning',
                'button--danger': styleType === 'danger',
            })}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
