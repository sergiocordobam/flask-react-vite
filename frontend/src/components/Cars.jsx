import { useState, useEffect } from 'react'
import '../styles/Cars.css'
import { Container } from 'react-bootstrap'

function Cars() {
  const [cars, setCars] = useState([{}])
  useEffect(() => {
    fetch("http://localhost:5000/cars/list_cars").then(
      res => res.json()
    ).then(
      cars => {
        setCars(cars)
      }
    )
  }, []) 

  return (
    <>
        <Container className='cars d-flex justify-content-center align-items-center'>
          {cars.cars}
        </Container>
    </>
  )
}

export default Cars
