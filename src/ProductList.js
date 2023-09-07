import Product from "./Products";
import React from "react";

const ProductList = ({ AddtoCart, ShowCat,displayCat }) => {
  
  return (
    <>
      <div >
          {displayCat.map((cat) => {
            return(<div key={cat.id}>
            <h3 id="category-header">{cat.title}</h3>
            <div className="row P-List-row row-cols-4 row-cols-md-2 g-4 ">
            {
              ShowCat.map((item) => (
                cat.id===item.categoryId?
                <Product key={item.id} item={item} AddtoCart={AddtoCart} />:(null)
              ))
            }
            </div>
           </div> )
          })}
      </div>
    </>
  );
};

export default ProductList;
