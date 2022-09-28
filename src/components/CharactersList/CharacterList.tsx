import { CharactersProps } from "../../interfaces/Character";
import Character from "../Character/Character";
import "./CharactersList.css";



function CharactersList({ characters }: CharactersProps) {
  return (
    <div className="characters__list">
      {characters.map((character) => (
        <Character key={character.id} character={character}/>
      ))}
    </div>
  );
}

export default CharactersList;
