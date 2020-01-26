import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdArrowBack } from 'react-icons/md';
import starwarsLogo from '~/assets/starwars-logo.png';

import Input from '~/components/Input';

import { Container } from './styles';

import api from '~/services/api';
import history from '~/services/history';

export default function StarshipInfo({ location }) {
  const { starship } = location.state;

  const [distance, setDistance] = useState('');
  const [stops, setStops] = useState(null);

  const canCalculateStops = starship.MGLT !== 'unknown';

  if (!starship) {
    history.push('/');
  }

  async function getStarshipStops(jouneyDistance) {
    const response = await api.post('/starships/stops', starship, {
      params: { distance: jouneyDistance },
    });

    setStops(response.data.stops);
  }

  return (
    <Container>
      <div className="card">
        <div className="card-header">
          <h1>{starship.name}</h1>
          <MdArrowBack
            color="#fff"
            size={30}
            onClick={() => history.push('/')}
          />
        </div>

        <div className="card-body">
          <div className="description">
            {starship.length && (
              <p>Esta nave tem uma largura de {starship.length} metros</p>
            )}
            {starship.max_atmosphering_speed &&
              starship.max_atmosphering_speed !== 'n/a' && (
                <p>
                  Chega a atingir uma velocidade de&nbsp;
                  {starship.max_atmosphering_speed}
                </p>
              )}
            {starship.cargo_capacity && (
              <p>
                Pode transportar até {starship.cargo_capacity} kg
                simultâneamente
              </p>
            )}
            {starship.films && starship.films.length > 0 && (
              <p>
                Apareceu em {starship.films.length} filme(s) da saga Star Wars
              </p>
            )}
            {starship.passengers && (
              <p>Pode transportar {starship.passengers} passageiros</p>
            )}
          </div>
          <img src={starwarsLogo} alt="Star Wars" />
        </div>

        <div className="card-footer">
          {canCalculateStops && (
            <>
              <p>
                Descubra quantos paradas são necessárias para essa nave
                completar uma jornada, digitando a distância da jornada abaixo:
              </p>
              <div className="calculate-container">
                <Input
                  type="number"
                  placeholder="digite a distância em mega lights...."
                  value={distance}
                  onChange={e => {
                    const { value } = e.target;
                    if (Number(value) <= 99999999999) {
                      setDistance(value);
                      getStarshipStops(value);
                    }
                  }}
                />
                {stops !== null && distance && (
                  <p>
                    Para percorrer {distance} MGLT com essa nave, são
                    necessárias&nbsp;
                    {stops} parada(s)
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </Container>
  );
}

StarshipInfo.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      starship: PropTypes.shape({
        name: PropTypes.string,
        length: PropTypes.string,
        max_atmosphering_speed: PropTypes.string,
        cargo_capacity: PropTypes.string,
        films: PropTypes.arrayOf(PropTypes.string),
        passengers: PropTypes.string,
        MGLT: PropTypes.string,
      }),
    }),
  }),
};

StarshipInfo.defaultProps = {
  location: {
    state: {
      starship: {},
    },
  },
};
