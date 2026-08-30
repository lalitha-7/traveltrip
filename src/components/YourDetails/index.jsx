import './index.css'
import {useState} from 'react'

const YourDetails = props => {
  const {setActiveStep} = props

  const [namemsg, setNameMsg] = useState(false)
  const [startmsg, setStartMsg] = useState(false)
  const [endmsg, setEndMsg] = useState(false)

  const [name, setName] = useState(localStorage.getItem('name') || '')

  const [start, setStart] = useState(
    localStorage.getItem('startLocation') || '',
  )

  const [end, setEnd] = useState(localStorage.getItem('endLocation') || '')

  const buttonSubmit = event => {
    event.preventDefault()

    let valid = true

    if (name.trim() === '') {
      setNameMsg(true)
      valid = false
    } else {
      setNameMsg(false)
    }

    if (start.trim() === '') {
      setStartMsg(true)
      valid = false
    } else {
      setStartMsg(false)
    }

    if (end.trim() === '') {
      setEndMsg(true)
      valid = false
    } else {
      setEndMsg(false)
    }

    if (!valid) {
      return
    }

    localStorage.setItem('name', name)
    localStorage.setItem('startLocation', start)
    localStorage.setItem('endLocation', end)
    setActiveStep(2)
  }

  return (
    <div className="details-container">
      <h2>Your Details</h2>

      <p>Enter your name and location details</p>

      <div className="form-box">
        <form onSubmit={buttonSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              value={name}
              onChange={event => {
                setName(event.target.value)
                setNameMsg(false)
                localStorage.setItem('name', event.target.value)
              }}
              onBlur={event => {
                if (event.target.value.trim() === '') {
                  setNameMsg(true)
                }
              }}
            />

            {namemsg && <p className="p">Enter your name</p>}
          </div>

          <div className="form-group">
            <label htmlFor="startlocation">Start Location</label>

            <input
              type="text"
              id="startlocation"
              placeholder="Enter Start Location"
              value={start}
              onChange={event => {
                setStart(event.target.value)
                setStartMsg(false)
                localStorage.setItem('startLocation', event.target.value)
              }}
              onBlur={event => {
                if (event.target.value.trim() === '') {
                  setStartMsg(true)
                }
              }}
            />

            {startmsg && <p className="p">Enter your start location</p>}
          </div>

          <div className="form-group">
            <label htmlFor="endlocation">End Location</label>

            <input
              type="text"
              id="endlocation"
              placeholder="Enter End Location"
              value={end}
              onChange={event => {
                setEnd(event.target.value)
                setEndMsg(false)
                localStorage.setItem('endLocation', event.target.value)
              }}
              onBlur={event => {
                if (event.target.value.trim() === '') {
                  setEndMsg(true)
                }
              }}
            />

            {endmsg && <p className="p">Enter your end location</p>}
          </div>

          <div className="button">
            <button className="button" type="submit">Next</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default YourDetails
