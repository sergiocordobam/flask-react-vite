import { useState, useEffect } from 'react'
import './Cars.css'

function Cars() {
  const [cars, setCars] = useState([{}])
  useEffect(() => {
    fetch("/list_cars").then(
      res => res.json()
    ).then(
      cars => {
        setCars(cars)
      }
    )
  }, []) 

  return (
    <>
        <div className='cars'>
            {cars.cars}
        </div>
    </>
  )
}

export default Cars
