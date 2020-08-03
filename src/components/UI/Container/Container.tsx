import React from 'react';
import './Container.module.scss';

type Props = {
    children: React.ReactNode,
};

const Container = ({ children }: Props): JSX.Element => <div className="container">{children}</div>;

export default Container;
