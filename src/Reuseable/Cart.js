import Swal from 'sweetalert2'

const Cart = ({CartItems,setCartItems,counter,setCounter,totalAmount,setTotalAmount}) => {

  const decrement=(item)=>{
    if(item.Quantity===1)
    {
      Swal.fire({
        title: 'Are you sure?',
        text: "This Item Will Be Removed",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Remove it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Removed!',
            'Item has been Removed.',
            'success'
          )
          deleteItem(item)
     setTotalAmount(totalAmount-item.price)
        }
      })
    }else{
            setCartItems( CartItems.map(index=>{
              if(index.id===item.id )
              {
                index.Quantity=item.Quantity-1;
                setTotalAmount(totalAmount-item.price)
              }
              return index;
            })
          )
        }
        
  }
  const increment=(item)=>{
    setTotalAmount(totalAmount+item.price)
    
    setCartItems( CartItems.map(index=>{
      if(index.id===item.id )
      {
        index.Quantity=item.Quantity+1;
      }
      return index;
    })
   )
  }
  const deleteItem=(item)=>{
    setCartItems(CartItems.filter(x=>x.id!==item.id))
    setCounter(counter-1)
    setTotalAmount(totalAmount-item.Quantity*item.price)
  }
  const confirmOrder=()=>{
    setTotalAmount(0)
    setCartItems([])
    setCounter(0)
    Swal.fire(
      'Order Confirmed!',
      'Thanks For Ordering!',
      'success'
    )
  }
  
  return (
    <div>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="CartCanvas"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header" style={{overflow:'scrolly'}}>
          <button
            type="button"
            style={{backgroundColor:'white'}}
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body" style={{color:"white"}}>
          {totalAmount!==0?
           <>
        <div className="container cart-container" >
         {CartItems.map(item=>(
         <div key={item.id}>
        <div className="row " style={{border:'2px solid rgb(28, 24, 22)'}}>
            <div className="col-md-4 ">
                <img src={item.image} alt="Product " className="img-fluid"/>
            </div>
            <div className="col-md-2 cart-title" style={{marginTop:'25px',marginLeft:'-20px'}}>
                <p >{item.title}</p>
            </div>
            <div className="col-md-2 cart-quantity ">
               <button className="btn-cart-edit "onClick={()=>decrement(item)}>-</button>
                <p>{item.Quantity}</p>
               <button className="btn-cart-edit " onClick={()=>increment(item)}>+</button>
            </div>
            <div className="col-md-2 cart-price"style={{marginTop:'32px'}}>
                <p >{item.price}</p>
            </div>
            <div className="col-md-1">
                <button  className='btn btn-sm  btn-danger cart-delete' 
                style={{marginTop: '28px'}} type="button"
                onClick={()=>deleteItem(item)}>Delete</button>
            </div>
        </div>
        </div>
        ))}
    </div>
        {<>
        <div className="row cart-total" > Total Amount : Rs. {totalAmount}</div>
        <button type="button" className="btn btn-danger btn-confirm-order"
        onClick={()=>confirmOrder()}
        >Confirm Order</button>
        </>
        }
        </> :(
          <div className='Empty-order'
       style={{textAlign:'center' ,justifyContent:'center'}}>
        <h3>Empty Cart</h3>
        </div> 
        
        )}
        </div>
        </div>
      </div>
  );
};

export default Cart;
