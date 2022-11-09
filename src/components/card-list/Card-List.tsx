import { Monster } from '../App/App';

import CardComponent from './card/CardComponent';

import './card-list.css';

type cardListProps = {
  monster: Monster[];
};

function CardList({ monster }: cardListProps) {
  return (
    <div className="card-list">
      {monster.map(monster => {
        return <CardComponent monster={monster} />;
      })}
    </div>
  );
}

export default CardList;
