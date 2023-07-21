import React, { Component } from 'react'
import CardItems from './CardItems'
import '../css/cardcss.css'

export class Card extends Component {
  
  
  render() {
    return (
      
      <div className="container my-3">
       <h2>Cards</h2>
      
        <div className="row">
       
        <div className='col-md-3'>
        <div className='card-container'>
        <CardItems/>
        </div>
        </div>
        <div className='col-md-3'>
        <CardItems/>
        </div>
        <div className='col-md-3'>
        <CardItems/>
        </div>
        <div className='col-md-3'>
        <CardItems/>
        </div>
      </div>
     </div>
    
    )
  }
}

export default Card
