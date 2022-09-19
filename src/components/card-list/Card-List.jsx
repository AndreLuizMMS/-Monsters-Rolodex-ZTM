import { Component } from 'react'

import CardComponent from './card/CardComponent'

import './card-list.css'


class CardList extends Component {
  render() {
    const { monster } = this.props

    return (
      <div className='card-list'>
        <CardComponent monster={monster} />
      </div>
    )
  }
}

export default CardList;
