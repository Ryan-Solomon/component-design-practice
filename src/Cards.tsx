import React from 'react';
import people from './Data';
import Card from './Card';

const Cards = () => {
  const renderedCards = people.map((person) => {
    return <Card key={person.id} person={person} />;
  });

  return <div>{renderedCards}</div>;
};

export default Cards;
