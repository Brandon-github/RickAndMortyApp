import { useCallback, useEffect, useState } from 'react';
import CharactersList from '../../components/CharactersList/CharacterList';
import Field from '../../components/Field/Field';
import Loader from '../../components/Loader/Loader';
import { Character_I } from '../../interfaces/Character';
import Nav from '../../layout/Nav/Nav';
import './SearchPage.css';

function SearchPage() {
  // States
  const [search, setSearch] = useState<string>("");
  const [characters, setCharacters] = useState<Array<Character_I> | null>(null);

  // Fetch Method for loader character dates
  const fetchCharacters = useCallback(async () => {
    await fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.results !== undefined) {
          setCharacters(data.results);
        }
      });
  }, [search]);

  useEffect(() => {
    fetchCharacters();
  });


  const loadCharacters = useCallback(() => {
    if (characters !== null && search !== "") {
      return (<CharactersList characters={characters} />)
    } else if (search !== "") {
      return (<Loader />);
    }
  }, [characters, search])

  return (
    <div className='searchPage'>
      <Nav />

      <div className="searchPage__container">
        <Field type='text' value={search} setValue={setSearch} placeholder="What do you want search?"/>

        {loadCharacters()}
      </div>
    </div>
  );
}

export default SearchPage;