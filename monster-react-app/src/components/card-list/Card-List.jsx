import { Component } from 'react'
import './style.scss'

class CardList extends Component {
  render() {
    const { monster } = this.props

    return (
      <>
        {monster.map(user =>
          <h3 key={user.id}> {user.name} </h3>
        )}
      </>
    )
  }
}

export default CardList;
