import React from 'react';
import classnames from 'classnames';

interface IProps {
    customClass: string;
}

const Input: React.FC<IProps> = ({customClass, ...props}: IProps) => {
    return <input {...props} className={classnames('input', customClass)} />;
}

export default Input;
