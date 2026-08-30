import './index.css'

const Confirmation = props => {
  const {setActiveStep} = props

  const name = localStorage.getItem('name') || ''
  const startLocation = localStorage.getItem('startLocation') || ''
  const endLocation = localStorage.getItem('endLocation') || ''
  const startDate = localStorage.getItem('startDate') || ''
  const endDate = localStorage.getItem('endDate') || ''
  const travelAssistance = localStorage.getItem('travelAssistance') || ''

  const adults = Number(localStorage.getItem('adults')) || 1
  const children = Number(localStorage.getItem('children')) || 0
  const infants = Number(localStorage.getItem('infants')) || 0

  const totalGuests = adults + children + infants

  const cancelTrip = () => {
    localStorage.clear()
    setActiveStep(1)
  }

  const confirmTrip = () => {
    setActiveStep(6)
  }

  return (
    <div className="details-container">
      <h1>Confirmation</h1>

      <p>Confirm your details</p>

      <div className="form-box">
        <div className="summary-row">
          <p>Name</p>
          <p>{name}</p>
        </div>

        <div className="summary-row">
          <p>Start Location</p>
          <p>{startLocation}</p>
        </div>

        <div className="summary-row">
          <p>End Location</p>
          <p>{endLocation}</p>
        </div>

        <div className="summary-row">
          <p>Start Date</p>
          <p>{startDate}</p>
        </div>

        <div className="summary-row">
          <p>End Date</p>
          <p>{endDate}</p>
        </div>

        <div className="summary-row">
          <p>Guests</p>
          <p>{totalGuests}</p>
        </div>

        <div className="summary-row">
          <p>Travel Assistance</p>
          <p>{travelAssistance || 'Not Needed'}</p>
        </div>

        <div className="button">
          <button type="button" className="previous button" onClick={cancelTrip}>
            Cancel
          </button>

          <button type="button" className="next button" onClick={confirmTrip}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default Confirmation
