import React, { useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { toast } from 'react-toastify';
import { defer } from 'rxjs';

import Input from '~/components/Input';

import starWarsLogo from '~/assets/starwars-logo.png';

import { Container, StarshipsList } from './styles';

import api from '~/services/api';

export default function Home() {
  const [starships, setStarships] = useState([]);

  const [filter, setFilter] = useState('');

  const [nextPage, setNextPage] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function loadStarships() {
      return api.get('/starships', {
        params: { name: filter },
      });
    }

    setLoading(true);

    const subscription = defer(loadStarships).subscribe(async response => {
      try {
        setStarships(response.data);
        setNextPage(response.headers.nextpage);
      } catch (error) {
        toast.error(
          'Erro ao buscar dados. Certifique que está com o servidor backend executando'
        );
      } finally {
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [filter]);

  async function loadMore() {
    try {
      if (Number.isNaN(Number(nextPage))) return;

      setLoading(true);
      const response = await api.get('/starships', {
        params: { page: nextPage },
      });

      setStarships([...starships, ...response.data]);
      setNextPage(response.headers.nextpage);
    } catch (error) {
      toast.error(
        'Erro ao buscar dados. Certifique que está com o servidor backend executando'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <div className="content">
        <div className="header">
          <div className="image-container">
            <img src={starWarsLogo} alt="Star Wars" />
          </div>

          <div className="search-container">
            <h1>
              Encontre as mais diversas e incríveis naves espaciais presentes na
              saga Star Wars
            </h1>
            <Input
              value={filter}
              onChange={e => setFilter(e.target.value)}
              placeholder="nome da nave que deseja encontrar..."
              icon={<MdSearch color="#333333" size={20} />}
            />
          </div>
        </div>

        <StarshipsList
          starships={starships}
          loadMore={loadMore}
          clearOnChange={filter}
          loading={loading}
        />
      </div>
    </Container>
  );
}
