
import React from 'react';
import "./Bottle.css"
const Bottle = ({bottle,handlePurchase}) => {

    let {name,img,price} = bottle
    return (
        <div className='bottle'>

            <h2>Bottle :{name}</h2>
            <img style={{width:"50%", borderRadius:"20px"}} src={img} alt="" />
            <p>Price:{price}</p>

            <button onClick={()=>handlePurchase(bottle)}>Purchase</button>
            
        </div>
    );
};

export default Bottle;