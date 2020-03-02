import React from 'react';
import {Card} from 'react-bootstrap';
import Rate from './Rate'
import WithLoading from './WithLoader'

function Movies(props) {
    return (
        <div>
        
<div className="carts">
{props.bf.map((el)=>( 
                <div className="carts">
                    <Card  className="item" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.image} />
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
  </Card.Body>
<Rate rating={el.rating}/>
   
</Card>
          
      </div>))
}

</div> 

    </div> )}

export default WithLoading(Movies)