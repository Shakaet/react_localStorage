import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import "./Bottles.css"
import { AddToLocalStorage, getStoredCart, removeFromLS} from '../../Utilities/localStorage';
import Cart from '../Cart/Cart';

const Bottles = () => {


    let[bottle,setBottles] = useState([])

    let [purchase,setPurchase]=useState([])

    useEffect(()=>{
        fetch("bottle.json")
        .then(res=>res.json())
        .then(data=>setBottles(data))
        
    },[])

    useEffect(()=>{

       console.log(bottle.length)

       if(bottle.length>0){

        let DataLOcalStorage= getStoredCart()
        console.log(DataLOcalStorage,bottle)
        let saveArray=[]
        for(let id of DataLOcalStorage){
            console.log(id)
            let Bottles= bottle.find(item=>item.id === id)

            if(Bottles){

                saveArray.push(Bottles)

            }
        }
        console.log(saveArray)
        setPurchase(saveArray)





       }
        
    },[bottle])


    // useEffect(()=>{

    //     console.log(bottle.length)
    
    //     if(bottle.length>0){
    //         let storedCard=getStoredCart()
    //         console.log(storedCard,bottle)
    //         let saveCard= []
    //         for (let id of storedCard){
    //             console.log(id)
    //             let b=bottle.find(bottle=>bottle.id=== id)
    //             if(b){
    //                 saveCard.push(b)
    //             }

    //         }
    //         console.log(saveCard)

    //         setPurchase(saveCard)
    //     }
        
        

        
    // },[bottle])


    let handlePurchase=(bottle)=>{

        console.log(bottle)
       
        let newA=[...purchase,bottle]
        setPurchase(newA)
        AddToLocalStorage(bottle.id)
    }

    const handleRemove = id => {

        console.log(id,purchase)
        // Step 1: Remove from purchase (UI update)
        const remainingCart = purchase.filter(bottle => bottle.id !== id);
        console.log(remainingCart)
        setPurchase(remainingCart);
    
        // Step 2: Remove from localStorage
        removeFromLS(id);
    };
    


   






    return (
        <div>

            <h2>length:{bottle.length}</h2>

            <Cart cart={purchase} handleRemove={handleRemove}></Cart>

            {/* <h2>card:{purchase.length}</h2> */}
            {/* <ul>
                {
                    purchase.map((item,idx)=><p key={idx}>{item.name}</p>)
                }
            </ul> */}


            <div className='bottles'>
            {
                bottle.map((bottle,idx)=> <Bottle key={idx} bottle={bottle} handlePurchase={handlePurchase}></Bottle>)
            }
            </div>
            
        </div>
    );
};

export default Bottles;