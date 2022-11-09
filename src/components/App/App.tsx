import { useState, useEffect } from 'react';

import { getData } from '../../utils/data.utils';

import CardList from '../card-list/Card-List';
import SearchInput from '../search-input/Search-input';

import './App.css';

export type Monster {
  id: string;
  name: string;
  email: string;

}

function App() {
  const [monsters, setMonsters] = useState<Monster[]>([]); // lista de monstros
  const [searchInput, setsearchInput] = useState(''); // valor do input pra fazer a busca
  const [filtrados, setFiltrados] = useState(monsters); // armazena  os montros filtardos à partir do input(o de cima)

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(res);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    // array com os nomes já filtrados
    const newFiltrados = monsters.filter(user => {
      return user.name.toLowerCase().includes(searchInput);
    });
    setFiltrados(newFiltrados);
  }, [monsters, searchInput]);

  function onSearchChange(event) {
    const searchInputString = event.target.value.toLowerCase(); // transforma o input pra lowerCase = (searchInput) state
    setsearchInput(searchInputString);
  }

  return (
    <div className="App">
      <a
        href="https://www.linkedin.com/in/andr%C3%A9luiz027357/"
        target="_blank"
      >
        <img
          src="https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png"
          alt="Linkedin"
          className="lknd-img"
        />
      </a>

      <h1 className="title">Monsters Rolodex </h1>

      <SearchInput
        changeHandler={onSearchChange}
        placeholder={'Search Monster'}
        className={'search-box'}
      />

      <CardList monster={filtrados} />
    </div>
  );
}

export default App;
