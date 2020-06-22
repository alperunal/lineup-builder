import React from 'react';
import classnames from 'classnames';

interface IProps {
    customClass: string;
    children: React.ReactNode;
}

const Tag: React.FC<IProps> = ({ customClass, children }: IProps) => {
    return <span className={classnames('tag', customClass)}>{children}</span>;
}

export default Tag;
