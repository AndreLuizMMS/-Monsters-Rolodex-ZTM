import { Component } from 'react'
import './App.css'
import CardList from '../card-list/Card-List';
import SearchBox from '../search-box/Search-Box';

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
    const { onSearchChange } = this

    // imbutabilidade
    // nao modificar dados, e sim criar novos (uma var pra .filter)
    const filtrados = monster.filter(monster =>
      monster.name.toLowerCase().includes(searchInptValue)
    );

    return (
      <div className="App">

        <SearchBox />

        <CardList monster={filtrados} />
      </div>
    )
  }
}



export default App
