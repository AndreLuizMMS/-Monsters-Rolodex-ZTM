import { Monster } from '../../App/App';

import './index.css';

type cardProps = {
  monster: Monster;
};

function CardComponent({ monster }: cardProps) {
  const { name, id, email } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={name}
      />
      <h2> {name} </h2>
      <p className="monster-email">{email}</p>
    </div>
  );
}

export default CardComponent;
