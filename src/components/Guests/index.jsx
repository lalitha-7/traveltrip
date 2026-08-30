import './index.css'
import {useState, useEffect} from 'react'

const Guests = props => {
  const {setActiveStep} = props

  const [adults, setAdults] = useState(() => {
    const savedAdults = localStorage.getItem('adults')
    return savedAdults !== null ? JSON.parse(savedAdults) : 1
  })

  const [children, setChildren] = useState(() => {
    const savedChildren = localStorage.getItem('children')
    return savedChildren !== null ? JSON.parse(savedChildren) : 0
  })

  const [infants, setInfants] = useState(() => {
    const savedInfants = localStorage.getItem('infants')
    return savedInfants !== null ? JSON.parse(savedInfants) : 0
  })

  useEffect(() => {
    localStorage.setItem('adults', JSON.stringify(adults))
  }, [adults])

  useEffect(() => {
    localStorage.setItem('children', JSON.stringify(children))
  }, [children])

  useEffect(() => {
    localStorage.setItem('infants', JSON.stringify(infants))
  }, [infants])

  const adultPlus = () => {
    setAdults(prev => prev + 1)
  }

  const adultMinus = () => {
    if (adults > 1) {
      setAdults(prev => prev - 1)
    }
  }

  const childrenPlus = () => {
    setChildren(prev => prev + 1)
  }

  const childrenMinus = () => {
    if (children > 0) {
      setChildren(prev => prev - 1)
    }
  }

  const infantPlus = () => {
    setInfants(prev => prev + 1)
  }

  const infantMinus = () => {
    if (infants > 0) {
      setInfants(prev => prev - 1)
    }
  }

  const previousPage = () => {
    setActiveStep(2)
  }

  const nextPage = () => {
    setActiveStep(4)
  }

  return (
    <div className="guests-container">
      <h2>Guests</h2>

      <p>Select your guests</p>

      <div className="guest-box">
        <div className="guest-row">
          <div>
            <p>Adults</p>
            <p>Age 13 or above</p>
          </div>

          <div className="counter">
            <button type="button" onClick={adultMinus}>
              -
            </button>

            <p>{adults}</p>

            <button type="button" onClick={adultPlus}>
              +
            </button>
          </div>
        </div>
        <div className="guest-row">
          <div>
            <p>Children</p>
            <p>Age 2-12</p>
          </div>

          <div className="counter">
            <button type="button" onClick={childrenMinus}>
              -
            </button>

            <p>{children}</p>

            <button type="button" onClick={childrenPlus}>
              +
            </button>
          </div>
        </div>
        <div className="guest-row">
          <div>
            <p>Infants</p>
            <p>under 2</p>
          </div>

          <div className="counter">
            <button type="button" onClick={infantMinus}>
              -
            </button>

            <p>{infants}</p>

            <button type="button" onClick={infantPlus}>
              +
            </button>
          </div>
        </div>

        <div className="button">
          <button type="button" className="previous button" onClick={previousPage}>
            Previous
          </button>

          <button  type="button" className="next button" onClick={nextPage}>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Guests
