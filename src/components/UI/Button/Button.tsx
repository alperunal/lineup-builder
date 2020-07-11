import React from 'react';
import classnames from 'classnames';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    customClass?: string;
    styleType?: string;
}

const Button: React.FC<IProps> = ({styleType, children, customClass, ...props}) => (
    <button
        className={
            classnames(
                customClass,
                'button'
            )
        }
        {...props}
    >
        {children}
    </button>
);

export default Button;
