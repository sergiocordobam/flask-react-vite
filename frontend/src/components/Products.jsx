import { useState, useEffect } from 'react'
import '../styles/Products.css'
import { Container } from 'react-bootstrap'

function Products() {
  const [products, setProducts] = useState([{}])
  useEffect(() => {
    fetch("http://localhost:5000/products/list_products").then(
      res => res.json()
    ).then(
      products => {
        setProducts(products)
      }
    )
  }, []) 

  return (
    <>
        <Container className='products d-flex justify-content-center align-items-center'>
          {products.products}
        </Container>
    </>
  )
}

export default Products
