import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ResourceList from './ResourceList';

function App() {
  const [query, setQuery] = useState('');
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query === '') return;

    setLoading(true);

    fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setResources(data.results || []);
        setLoading(false);
      })
      .catch(() => {
        setResources([]);
        setLoading(false);
      });
  }, [query]);

  return (
    <div>
      <h1>Buscador de personajes Rick and Morty</h1>
      <SearchBar onSearch={setQuery} />
      {loading ? <p>Cargando...</p> : <ResourceList items={resources} />}
    </div>
  );
}

export default App;

