import React from 'react';
import classnames from 'classnames';

interface IProps {
    customClass?: string;
    children?: React.ReactNode;
}

const List: React.FC<IProps> = ({ customClass, children }: IProps) => (
    <ul
        className={
            classnames('list', customClass)
        }
    >
        {children}
    </ul>
);
export default List;
