import React from 'react';
import { useQuery, gql } from '@apollo/client';

const ALL_FILMS = gql`{
  allFilms {
    films {
      title
    }
  }
}`;

function App() {
  const { loading, error, data } = useQuery(ALL_FILMS);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Whoops ... something is wrong!</p>;

  return (
    <>
      <h2>Movies{''}</h2>
      {data.allFilms.films.map((film, id) => (
        <p key={id}>{film.title}</p>
      ))}
    </>
  );
}

export default App;
