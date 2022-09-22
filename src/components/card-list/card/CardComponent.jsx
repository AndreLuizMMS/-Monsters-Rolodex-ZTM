import './index.css';

function CardComponent(props) {
  const { monster } = props;

  return (
    <>
      {monster.map(user => {
        const { name, id, email } = user;

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
      })}
    </>
  );
}

export default CardComponent;
