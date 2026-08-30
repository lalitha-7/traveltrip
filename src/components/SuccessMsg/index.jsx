import './index.css'

const SuccessMsg = props => {
  const {setActiveStep} = props

  const home = () => {
    localStorage.clear()
    setActiveStep(1)
  }

  return (
    <div className="details-container">
      <div className="form-box success-box">
        <img
          src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
          alt="Success"
        />

        <h2>Awesome</h2>

        <p>Your booking has been confirmed</p>

        <button type="button" className="success-button" onClick={home}>
          Book New Trip
        </button>
      </div>
    </div>
  )
}

export default SuccessMsg
