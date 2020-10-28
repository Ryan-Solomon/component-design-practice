import React, { FC } from 'react';

import { Person as PersonType } from './Data';

type Props = {
  key: number;
  person: PersonType;
};

const Card: FC<Props> = ({ person }) => {
  return (
    <div className='center'>
      <div className='property-card'>
        <a href='#'>
          <div className='property-image'>
            <div className='property-image-title'></div>
          </div>
        </a>
        <div className='property-description'>
          <h5> {person.name} </h5>
          <h6>{person.title}</h6>
          <p>{person.quote}</p>
        </div>
        <a href='#'>
          <div className='property-social-icons'></div>
        </a>
      </div>
    </div>
  );
};

export default Card;
