import React from 'react';
import classnames from 'classnames';

interface IProps {
    title?: string;
    type?: string;
    customClass?: string;
    children: React.ReactNode;
}

function Card({ title, customClass, children, type }: IProps) {
    return (
        <div
            className={classnames(customClass, 'card', {
                'card--success': type === 'success',
                'card--warning': type === 'warning',
                'card--danger': type === 'danger',
            })}
        >
            {title ? <div className="card__title">{title}</div> : null}
            {children}
        </div>
    );
}

export default Card;