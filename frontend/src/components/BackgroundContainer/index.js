import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function BackgroundContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

BackgroundContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.element])),
  ]),
};

BackgroundContainer.defaultProps = {
  children: null,
};
