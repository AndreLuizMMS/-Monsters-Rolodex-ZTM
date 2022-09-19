import { Component } from 'react'

import CardList from '../card-list/Card-List';
import SearchInput from '../search-input/Search-input';

import './App.css'

const url = 'https://jsonplaceholder.typicode.com/users' // API 

class App extends Component {

  constructor() {
    super();

    this.state = {
      monster: [],
      searchInptValue: ''
    };


  }

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(users => this.setState(() => {
        return { monster: users }
      }))
  }

  onSearchChange = event => {
    const searchInptValue = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchInptValue }
    });
  }

  render() {
    //Optimization
    const { monster, searchInptValue } = this.state;
    const { onSearchChange } = this;

    // imbutabilidade
    // nao modificar dados, e sim criar novos (uma var pra .filter)
    const filtrados = monster.filter(monster =>
      monster.name.toLowerCase().includes(searchInptValue)
    );

    return (
      <div className="App">
        <a href="https://www.linkedin.com/in/andr%C3%A9luiz027357/" target='_blank'>
        <img 
          src="https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png" 
          alt="Linkedin"
          className='lknd-img' />
        </a>
        <h1 className='title'>Monsters Rolodex </h1>

        <SearchInput
          changeHandler={onSearchChange}
          placeholder={'Search Monster'}
          className={'search-box'}
        />

        <CardList monster={filtrados} />
      </div>
    )
  }
}



export default App
