import { Component } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(user =>
        this.setState(() => {
          return { monsters: user }
        })
      )
  }

  render() {
    console.log('render')

    const filteredMonsters = this.state.monsters.filter(monster => {
      return monster.name.toLowerCase().includes(this.state.searchField)
    })

    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search Monster"
          className="search-box"
          onChange={e => {
            const searchField = e.target.value.toLocaleLowerCase()
            this.setState(() => {
              return { searchField }
            })
          }}
        />

        {this.state.monsters.map(monster => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    )
  }
}

export default App
