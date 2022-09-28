import { CharacterProps } from "../../interfaces/Character";
import "./CharacterCard.css";

function CharacterCard({ character }: CharacterProps) {

  const date = character.created?.substring(0, 10);
  const dateList: Array<string> = date?.split("-") !== undefined ? date?.split("-") : [];
  
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];

  const year: number = Number(dateList[0]);
  const month: number = Number(dateList[1]);
  const day: number = Number(dateList[2]);
  const monthFormat: string = months[month - 1];
  const dayFormat: string = day < 10 ? `0${day}` : day.toString();

  return (
    <div className="characterCard">
      <h2 className="characterCard__name">{character.name}</h2>
      <div className="characterCard__container">
        <img
          src={character.image}
          className="characterCard__image"
          alt="character"
        />
        <div className="characterCard__content">
          <p className="characterCard__status">
            <span
              className={`characterCard__status--circle characterCard__status--${character.status}`.trimEnd()}
            ></span>
            {character.status} - {character.species}
          </p>
          <p className="character__gender">Gender: {character.gender}</p>
          <p className="character__gender">Location: {character.location?.name}</p>
          <p className="character__origin">Origin: {character.origin?.name}</p>
          <p className="character__">{dayFormat} - {monthFormat} - {year}</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
