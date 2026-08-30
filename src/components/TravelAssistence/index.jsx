import './index.css'
import {useState} from 'react'

const TravelAssistence = props => {
  const {setActiveStep} = props

  const [assistanceNeeded, setAssistanceNeeded] = useState(
    localStorage.getItem('assistanceNeeded') === 'true',
  )

  const [travelAssistance, setTravelAssistance] = useState(
    localStorage.getItem('travelAssistance') || '',
  )

  const previousPage = () => {
    setActiveStep(3)
  }

  const nextPage = () => {
    localStorage.setItem('assistanceNeeded', JSON.stringify(assistanceNeeded))

    localStorage.setItem('travelAssistance', travelAssistance)
    setActiveStep(5)
  }

  return (
    <div className="details-container">
      <h2>Travel Assistance</h2>

      <p>Select your travel assistance</p>

      <div className="form-box">
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="assistanceNeeded"
            checked={assistanceNeeded}
            onChange={event => {
              const checked = event.target.checked

              setAssistanceNeeded(checked)

              localStorage.setItem('assistanceNeeded', JSON.stringify(checked))

              if (!checked) {
                setTravelAssistance('')
                localStorage.removeItem('travelAssistance')
              }
            }}
          />

          <p>Travel Assistance Needed</p>
        </div>

        {assistanceNeeded && (
          <div className="assistance-options">
            <label htmlFor="assistance">Travel Assistance</label>

            <select
              id="assistance"
              value={travelAssistance}
              onChange={event => {
                const value = event.target.value

                setTravelAssistance(value)
                localStorage.setItem('travelAssistance', value)
              }}
            >
              <option value="">Select Travel Assistance</option>
              <option value="bus">Bus</option>
              <option value="car">Car</option>
              <option value="train">Train</option>
              <option value="flight">Flight</option>
            </select>
          </div>
        )}

        <div className="button">
          <button type="button" className="previous button" onClick={previousPage}>
            Previous
          </button>

          <button type="button" className="next button" onClick={nextPage}>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default TravelAssistence
