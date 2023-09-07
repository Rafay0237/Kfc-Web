import React from "react";

const Product = ({item ,AddtoCart}) => {
  return (
    <div className="card mx-2 text-light " style={{width: "16rem" , backgroundColor:"hsl(20, 12%, 10%)",color :"black"}}>
      <img src={item.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <p style={{display:"flex" ,justifyContent:"left",fontWeight:"bold"}}
        >RS. {item.price}</p>
        <button className="btn btn-danger " id="OrderCanvas" type="button"
          data-bs-toggle="offcanvas"data-bs-target="#OrderCanvas"
          aria-controls="offcanvasRight"
           onClick={()=>AddtoCart(item)}
          >+ ADD TO BUCKET</button>
      </div>
    </div>
  );
};

export default Product;
