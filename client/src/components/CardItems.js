import React, { Component } from 'react'

export class CardItems extends Component {
  handleClick=()=>{
    const script = document.createElement('script');
    script.src = '/components/Details.js';
    script.async = true;
    document.body.appendChild(script);
   
  };
  render() {
    return (
      <div className='my-3'>
        
        <div className="card" style={{width:"18rem"}}>
        <div className="card-body">
    <h5 className="card-title">Title</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button type="button" onClick={this.handleClick} className="btn btn-dark">Dark</button>
  </div>
</div>
      </div>
      
    )
  }
}

export default CardItems
