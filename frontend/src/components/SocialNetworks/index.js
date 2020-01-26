import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { Container } from './styles';

export default function SocialNetworks() {
  return (
    <Container>
      <a href="https://github.com/RaphaelOliveiraMoura">
        <FaGithub color="#fff" size={30} />
      </a>
      <a href="https://www.linkedin.com/in/raphael-oliveira-212663179/">
        <FaLinkedin color="#fff" size={30} />
      </a>
    </Container>
  );
}
