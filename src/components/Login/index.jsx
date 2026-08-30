import {useState} from 'react'
import Cookies from 'js-cookie'
import {useNavigate, Navigate} from 'react-router'

import './index.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showSubmitError, setShowSubmitError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const navigate = useNavigate()

  const onChangeUsername = event => {
    setUsername(event.target.value)
    setShowSubmitError(false)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
    setShowSubmitError(false)
  }

  const submitForm = async event => {
    event.preventDefault()

    if (username === '' || password === '') {
      setShowSubmitError(true)
      setErrorMsg('Please enter username and password')
      return
    }

    const userDetails = {
      username,
      password,
    }

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    try {
      const response = await fetch(url, options)
      const data = await response.json()

      if (response.ok === true) {
        Cookies.set('jwt_token', data.jwt_token, {expires: 30})
        navigate('/', {replace: true})
      } else {
        setShowSubmitError(true)
        setErrorMsg(data.error_msg)
      }
    } catch (error) {
      setShowSubmitError(true)
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  const token = Cookies.get('jwt_token')

  if (token !== undefined) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-icon">✈️</div>

        <h1>Travel Trip</h1>

        <p className="login-subtitle">
          Plan your journey with us
        </p>

        <form onSubmit={submitForm}>
          <div className="input-group">
            <label htmlFor="username">USERNAME</label>

            <input
              type="text"
              id="username"
              value={username}
              onChange={onChangeUsername}
              placeholder="Enter username"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">PASSWORD</label>

            <input
              type="password"
              id="password"
              value={password}
              onChange={onChangePassword}
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>

          {showSubmitError && (
            <p className="error-message">*{errorMsg}</p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Login

