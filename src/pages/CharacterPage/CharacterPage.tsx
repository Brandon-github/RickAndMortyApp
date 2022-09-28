import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import Loader from '../../components/Loader/Loader';
import Nav from '../../layout/Nav/Nav';
import './CharacterPage.css';

function CharacterPage() {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);

  const fetchCharacter = async () => {
    await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(data => setCharacter(data));
  }

  useEffect(() => {
    fetchCharacter();
  });

  return(
    <div className='character__page'>
      <Nav />
      <div className="character__container">
        {character !== null ? 
        <CharacterCard character={character} /> 
        :
        <Loader />}
      </div>
    </div>
  );
}

export default CharacterPage;