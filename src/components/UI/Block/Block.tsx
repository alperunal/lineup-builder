import React from 'react';
import cn from 'classnames';
import './Block.module.scss';

type Props = {
    title?: string,
    customClass?: string,
    children: React.ReactNode,
};

const Block = ({
    title, customClass, children,
}: Props): JSX.Element => (
    <div
        className={
            cn(
                'block',
                customClass,
            )
        }
    >
        {title ? (
            <div className="heading">
                {title}
            </div>
        ) : null}
        <div className="content">
            {children}
        </div>
    </div>
);

Block.defaultProps = {
    customClass: '',
};

export default Block;
