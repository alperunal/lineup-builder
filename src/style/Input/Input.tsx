import React from 'react';
import classnames from 'classnames';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    customClass?: string;
}

const Input: React.FC<IProps> = ({ customClass, ...props }) => (
    <input
        {...props}
        className={
            classnames('input', customClass)
        }
    />
);

export default Input;
