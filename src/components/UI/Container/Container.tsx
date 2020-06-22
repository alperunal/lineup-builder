import React from 'react';
import './Container.scss';

interface IProps {
    children: React.ReactNode;
}

const Container = ({ children }: IProps) => <div className="container">{children}</div>;

export default Container;
