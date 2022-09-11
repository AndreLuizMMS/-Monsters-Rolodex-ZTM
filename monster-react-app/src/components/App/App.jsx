import { Component } from 'react'
import CardList from '../card-list/cardList';
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
    const { onSearchChange } = this

    // imbutabilidade
    // nao modificar dados, e sim criar novos (uma var pra .filter)
    const filtrados = monster.filter(monster =>
      monster.name.toLowerCase().includes(searchInptValue)
    );

    return (
      <div className="App">
        <input
          className="search-box"
          placeholder='Search'
          type="search"
          onChange={onSearchChange}
        />
        <CardList monster={'props de monster'} />
{/* 
        {filtrados.map((monster) => {
          return (
            <div key={monster.id}>
              <h3> {monster.name} </h3>
            </div>
          )
        })} */}
      </div>
    )
  }
}



export default App
