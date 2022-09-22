import CardComponent from './card/CardComponent';

import './card-list.css';

function CardList(props) {
  const { monster } = props;

  return (
    <div className="card-list">
      <CardComponent monster={monster} />
    </div>
  );
}

export default CardList;
