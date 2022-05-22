import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import './Block.module.scss';

const Block = ({ title, customClass, children }) => (
  <div className={cn('block', customClass)}>
    {title ? <div className="heading">{title}</div> : null}
    <div className="content">{children}</div>
  </div>
);

Block.propTypes = {
  title: PropTypes.string,
  customClass: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Block.defaultProps = {
  title: '',
  customClass: '',
};

export default Block;
