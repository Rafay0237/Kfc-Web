import CatButtons from './Reuseable/CatButtons'
import ProductList from './ProductList'
import products from "./products.json"
import categories from "./categories.json";
import { useState } from 'react'

const MenuPage = ({AddtoCart}) => {
  let [ShowCat,setShowCat]=useState(products)
  let [displayCat,setdisplayCat]=useState(categories)
  let [selectedCat,setSelectedCat]=useState(1);
  const getCat=(id)=>{
    setShowCat(products.filter(p=>p.categoryId===id))
    setdisplayCat(categories.filter(cat=>cat.id===id))
    setSelectedCat(id);
  }
  return (
    <div>
        <CatButtons getCat={getCat} selectedCat={selectedCat}/>
        <ProductList AddtoCart={AddtoCart} ShowCat={ShowCat} displayCat={displayCat}/>
    </div>
  )
}

export default MenuPage
