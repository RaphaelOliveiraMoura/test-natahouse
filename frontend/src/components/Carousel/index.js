import React from 'react';
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdMonetizationOn,
  MdArrowForward,
} from 'react-icons/md';

import { Container } from './styles';

const items = [
  { id: 1, name: 'Sentinel-class landing craft', price: 100000000 },
  { id: 2, name: 'Item2', price: 100000000 },
  { id: 3, name: 'Item3', price: 100000000 },
  { id: 4, name: 'Item4', price: 100000000 },
  { id: 5, name: 'Item5', price: 100000000 },
];

export default function Carousel() {
  return (
    <Container>
      <MdKeyboardArrowLeft color="#D6CACA" size={30} />
      {items.map(item => (
        <div className="card" key={String(item.id)}>
          <div className="card-body">
            <h1>{item.name}</h1>
            <MdArrowForward color="#333" size={30} />
          </div>

          <footer>
            <p>{item.price}</p>
            <MdMonetizationOn size={20} color="#fff" />
          </footer>
        </div>
      ))}
      <MdKeyboardArrowRight color="#D6CACA" size={30} />
    </Container>
  );
}
