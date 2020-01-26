import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdMonetizationOn,
  MdArrowForward,
} from 'react-icons/md';

import { Container, Card } from './styles';

import history from '~/services/history';

export default function Carousel({
  starships,
  loadMore,
  clearOnChange,
  loading,
  ...rest
}) {
  const [offset, setOffset] = useState(0);

  const [listSize, setListSize] = useState(4);

  const nextIsAble = useMemo(() => offset + listSize < starships.length, [
    listSize,
    offset,
    starships.length,
  ]);

  const previusIsAble = useMemo(() => offset > 0, [offset]);

  useEffect(() => setOffset(0), [clearOnChange]);

  useEffect(() => {
    function resizeListSize() {
      if (window.innerWidth > 1000) {
        setListSize(5);
      } else if (window.innerWidth > 750) {
        setListSize(3);
      } else if (window.innerWidth > 400) {
        setListSize(2);
      } else {
        setListSize(1);
      }
    }

    window.addEventListener('resize', resizeListSize);
    resizeListSize();
  }, []);

  function hanldleNext() {
    if (nextIsAble) setOffset(offset + 1);

    if (offset + 7 === starships.length) {
      loadMore();
    }
  }

  function handlePrevius() {
    if (previusIsAble) setOffset(offset - 1);
  }

  return (
    <Container {...rest} isLoading={loading}>
      <MdKeyboardArrowLeft
        color="#D6CACA"
        size={30}
        onClick={handlePrevius}
        style={{
          transform: previusIsAble ? 'translateX(0px)' : 'translateX(100000px)',
        }}
      />

      <div className="list-container">
        {starships.map((item, index) => (
          <Card
            key={String(item.name)}
            listShow={index >= offset && index < offset + listSize}
            onClick={() =>
              history.push(`/starships/${item.name}`, { starship: item })
            }
          >
            <div className="card-body">
              <h1>{item.name}</h1>
              <MdArrowForward color="#333" size={30} />
            </div>

            <footer>
              <p>{item.cost_in_credits}</p>
              <MdMonetizationOn size={20} color="#fff" />
            </footer>
          </Card>
        ))}
      </div>

      <MdKeyboardArrowRight
        color="#D6CACA"
        size={30}
        onClick={hanldleNext}
        style={{
          transform: nextIsAble ? 'translateX(0px)' : 'translateX(100000px)',
        }}
      />
    </Container>
  );
}

Carousel.propTypes = {
  starships: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.id,
      name: PropTypes.string,
      cost_in_credits: PropTypes.string,
    })
  ),
  loadMore: PropTypes.func,
  clearOnChange: PropTypes.string,
  loading: PropTypes.bool,
};

Carousel.defaultProps = {
  starships: [],
  loadMore: () => {},
  clearOnChange: () => {},
  loading: false,
};
