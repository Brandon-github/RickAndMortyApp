import { useEffect, useState, useCallback } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import CharactersList from "../../components/CharactersList/CharacterList";
import Loader from "../../components/Loader/Loader";
import { Character_I } from "../../interfaces/Character";
import Nav from "../../layout/Nav/Nav";
import "./CharactersPage.css";

function CharactersPage() {
  const [characters, setCharacters] = useState<Array<Character_I> | null>(null);
  const [page, setPage] = useState<number>(0);
  const [maxPages, setMaxPages] = useState<number>(0);


  const { id } = useParams(); 
  const pageId = Number(id);


  const fetchCharacters = useCallback(async () => {
    await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setMaxPages(data.info.pages);
      });
  }, [page]);

  useEffect(() => {
    if (id !== undefined) setPage(pageId);
    fetchCharacters();
    if (pageId <= 0 || pageId > maxPages) (<Navigate to="/" />)
  }, [id, pageId, maxPages, fetchCharacters]);

  return (
    <div className="characters">
      <Nav />

      <h2 className="characters__title">
        Characters {page < 10 ? `0${page}` : page}/{maxPages}
      </h2>
      <div className="characters__buttons">
        <Link to={`/characters/page/${pageId - 1}`} className="button">Prev Pag</Link>
        <Link to={`/characters/page/${pageId + 1}`} className="button">Next Pag</Link>
      </div>
      {characters !== null ? 
        <CharactersList characters={characters} />
        : 
        <Loader />
      }
    </div>
  );
}

export default CharactersPage;
