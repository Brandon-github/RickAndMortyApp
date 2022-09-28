import { Link } from "react-router-dom";
import { CharacterProps } from "../../interfaces/Character";
import './Character.css';

function Character({ character }: CharacterProps) {
  return (
    <div className="character">
      <Link to={`/character/${character.id}`} className="character__image">
        <img src={character.image} alt="" className="img" />
      </Link>
      <h2 className="character__name">{character.name}</h2>
    </div>
  );
}

export default Character;