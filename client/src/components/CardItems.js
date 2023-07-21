import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/cardcss.css'


export class CardItems extends Component {

  
  render() {
    return (
      <>

      <div className='my-3'>
        
        <div className="card" style={{width:"18rem"}}>
        <div className="card-body">
    <h5 className="card-title">Title</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/details" className="btn btn-dark">Dark</Link>
  </div>
</div>
      </div>

      </>
    )
  }
}

export default CardItems
