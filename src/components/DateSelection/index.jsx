import './index.css'
import {useState} from 'react'

const DateSelection = props => {
  const {setActiveStep} = props

  const [sdatemsg, setStartDateMsg] = useState(false)
  const [edatemsg, setEndDateMsg] = useState(false)
  const [dateError, setDateError] = useState(false)

  const [start, setStart] = useState(localStorage.getItem('startDate') || '')

  const [end, setEnd] = useState(localStorage.getItem('endDate') || '')

  const buttonClick = event => {
    event.preventDefault()

    let valid = true
    if (start === '') {
      setStartDateMsg(true)
      valid = false
    } else {
      setStartDateMsg(false)
    }
    if (end === '') {
      setEndDateMsg(true)
      valid = false
    } else {
      setEndDateMsg(false)
    }
    if (!valid) {
      return
    }
    if (end < start) {
      setDateError(true)
      return
    }

    setDateError(false)
    setActiveStep(3)
  }

  const previousPage = () => {
    setActiveStep(1)
  }

  return (
    <div className="details-container">
      <h2>Date Selection</h2>

      <p>Select Your Start and end date</p>

      <div className="form-box">
        <form onSubmit={buttonClick}>
          <div className="form-group">
            <label htmlFor="date">Start Date</label>

            <input
              type="date"
              id="date"
              value={start}
              onChange={event => {
                setStart(event.target.value)
                setStartDateMsg(false)
                setDateError(false)
                localStorage.setItem('startDate', event.target.value)
              }}
            />

            {sdatemsg && <p className="p">Select start date</p>}
          </div>

          <div className="form-group">
            <label htmlFor="enddate">End Date</label>

            <input
              type="date"
              id="enddate"
              value={end}
              onChange={event => {
                setEnd(event.target.value)
                setEndDateMsg(false)
                setDateError(false)
                localStorage.setItem('endDate', event.target.value)
              }}
            />

            {edatemsg && <p className="p">Select end date</p>}

            {dateError && (
              <p className="p">
                The end date cannot be less than the start date
              </p>
            )}
          </div>

          <div className="button">
            <button className="button" type="button" onClick={previousPage}>
              Previous
            </button>

            <button className="button" type="submit">Next</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DateSelection
