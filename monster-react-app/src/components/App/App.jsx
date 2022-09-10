import { Component } from 'react'
import './App.css'

const url = 'https://jsonplaceholder.typicode.com/users' // API 

class App extends Component {

  constructor() {
    super();

    this.state = {
      monster: []
    }

  }

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(users => this.setState(() => {
        return { monster: users }
      }))
  }

  render() {
    return (
      <div className="App">
        <input
          className="search-box"
          placeholder='Search'
          type="search"
          onChange={e => {
            //.includes() é não CaseSensitive [uma var pra ser tudo minúsculo na busca]
            const searchInptValue = e.target.value.toLowerCase();

            const filtrados = this.state.monster.filter(monster =>
              monster.name.toLowerCase().includes(searchInptValue)
            );
            // imbutabilidade
            // nao modificar dados, e sim criar novos (uma var pra .filter)
            this.setState(() => {
              return { monster: filtrados }
            });
          }}
        />

        {this.state.monster.map((monster) => {
          return (
            <div key={monster.id}>
              <h3> {monster.name} </h3>
            </div>
          )
        })}
      </div>
    )
  }
}



export default App
