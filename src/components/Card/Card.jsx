import './Card.css';

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_shiny} alt="" />
      </div>
      <h3 className="cardName">{pokemon.name}</h3>
      <div className="cardTypes">
        <div>タイプ</div>
        {pokemon.types.map((type) => {
          return (
            <div key={type.slot}>
              <span>{type.type.name}</span>
            </div>
          );
        })}
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p className="title">重さ : {pokemon.weight}</p>
        </div>
        <div className="cardData">
          <p className="title">高さ : {pokemon.height}</p>
        </div>
        <div className="cardData">
          <p className="title">特性 :{pokemon.abilities[0].ability.name}</p>
          {pokemon.abilities[1] && (
            <p className="title">夢特性 :{pokemon.abilities[1].ability.name}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
