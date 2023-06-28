import React, { Component } from 'react'
import CardItems from './CardItems'

export class Card extends Component {
  render() {
    return (
      <div>
        <h1>Card</h1>
        <CardItems/>
      </div>
    )
  }
}

export default Card
