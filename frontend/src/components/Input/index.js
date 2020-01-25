import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Input({ icon, ...rest }) {
  return (
    <Container>
      <input type="text" {...rest} />
      {icon}
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
};

Input.defaultProps = {
  icon: null,
};
