import { Component } from 'react'
import './App.css'

const url = 'https://jsonplaceholder.typicode.com/users' // API 

class App extends Component {

  constructor() {
    super();

    this.state = {
      monster: []
    }

    console.log('1')
  }

  componentDidMount() {
    console.log('3')
    fetch(url)
      .then(res => res.json())
      .then(users => this.setState(() => {
        return { monster: users }
      }))
  }

  render() {
    console.log('2')
    return (
      <div className="App">
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
