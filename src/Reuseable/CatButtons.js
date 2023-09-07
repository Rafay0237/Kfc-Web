import React from 'react'
import categories from "../categories.json"

const CatButtons = ({getCat,selectedCat}) => {
  return (
    <div className='my-3 cat-buttons ' >
      {
        categories.map(cat=>(
    <button type="button" className={`${selectedCat===cat.id?'btn-category-active':'btn-category'}`} key={cat.id} onClick={()=>getCat(cat.id)}>{cat.title}</button>
  ))}
    </div>
  )
}

export default CatButtons
