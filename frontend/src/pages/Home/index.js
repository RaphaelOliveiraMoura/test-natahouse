import React from 'react';
import { MdSearch } from 'react-icons/md';

import Input from '~/components/Input';

import startWarsLogo from '~/assets/startwars-logo.png';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <div className="content">
        <div className="image-container">
          <img src={startWarsLogo} alt="Star Wars" />
        </div>

        <div className="search-container">
          <h1>
            Encontre as mais diversas e incríveis naves espaciais presentes na
            saga Star Wars
          </h1>
          <Input
            placeholder="nome da nave que deseja encontrar..."
            icon={<MdSearch color="#333333" size={20} />}
          />
        </div>
      </div>
    </Container>
  );
}
