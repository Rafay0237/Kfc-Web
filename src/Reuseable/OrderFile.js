import React, { useState } from 'react'
import Swal from 'sweetalert2'

const OrderFile = ({Order,setCounter,counter,setCartItems,CartItems,setOrder,totalAmount,setTotalAmount}) => {

  let [Quantity,setQuantity]=useState(1);

  const decrement=(Quantity)=>{
    if(Quantity!==1)
    setQuantity(Quantity-1)
  }
  const ConfirmOrder=(Order,Quantity)=>{
    setTotalAmount(totalAmount+Quantity*Order.price)
    
    let found=CartItems.find(item=>item.id===Order.id)
    if(found)
    {
     setCartItems(CartItems.map(item=>{
      if(item.id===Order.id)
      {
        return {...Order,Quantity:item.Quantity+Quantity}
        // price:Order.price*Quantity
      }
      return item;
    }))
    }
    else{
      setCartItems([...CartItems,{...Order,Quantity:Quantity}])
      // price:Order.price*Quantity
      setCounter(counter+1)
    }
    setQuantity(1);

    Swal.fire({
      position: 'mid',
      icon: 'success',
      title: 'Item Added To Cart',
      showConfirmButton: false,
      timer: 1500
    })
  }

  return (
    <div>
        <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="OrderCanvas"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header" >
          <button
            type="button"
            style={{backgroundColor:'white'}}
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body ">
       { 
        <div className="card mx-5 text-light " style={{width: "16rem" , backgroundColor:"hsl(20, 12%, 10%)",color :"black"}}>
      <img src={Order.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{Order.title}</h5>
        <hr></hr>
        <p className='card-text 'style={{fontWeight:'bold'}}>Rs. {Order.price*Quantity}</p>
         <div style={{display :'inline-flex'}}>
        <button className="btn btn-success mx-4 my-4 px-3" onClick={()=>setQuantity(Quantity+1)}>+</button>
        <p className='card-text my-4 pt-1'style={{fontWeight:'bold'}}>{Quantity}</p>
        <button className="btn btn-danger mx-4 my-4 px-3" onClick={()=>decrement(Quantity)}>-</button>
        </div>
        <br></br>
        
        <button className="btn btn-danger " 
        data-bs-dismiss="offcanvas"
        aria-label="Close"
        onClick={()=>ConfirmOrder(Order,Quantity)}
          >Add To Cart</button>
      </div>
    </div>
    
       }
        
        </div>
      </div>
      
    </div>
  )
}

export default OrderFile
