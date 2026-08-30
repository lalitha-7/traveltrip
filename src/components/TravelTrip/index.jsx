import './index.css'

const TravelTrip = props => {
  const {activeStep} = props

  const steps = [
    {number: 1, title: 'Your Details'},
    {number: 2, title: 'Date Selection'},
    {number: 3, title: 'Guests'},
    {number: 4, title: 'Travel Assistance'},
    {number: 5, title: 'Confirmation'},
  ]

  return (
    <div className="main">
      <h2>Travel Trip</h2>

      {steps.map(step => {
        let cardClass = 'card'

        if (step.number < activeStep) {
          cardClass = 'card completed'
        } else if (step.number === activeStep) {
          cardClass = 'card active'
        }

        return (
          <div className={cardClass} key={step.number}>
            <p className="circle">
              {step.number < activeStep ? '✓' : step.number}
            </p>

            <p>{step.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default TravelTrip
