import { useState, useEffect } from 'react'
import './Products.css'

function Products() {
  const [products, setProducts] = useState([{}])
  useEffect(() => {
    fetch("/list_products").then(
      res => res.json()
    ).then(
      products => {
        setProducts(products)
      }
    )
  }, []) 

  return (
    <>
        <div className='products'>
            {products.products}
        </div>
    </>
  )
}

export default Products
