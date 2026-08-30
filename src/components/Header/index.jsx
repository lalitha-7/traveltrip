
import './index.css'
import Cookies from 'js-cookie'
import {useNavigate} from 'react-router'

const Header = props => {
  const {darkMode, setDarkMode} = props

  const navigate = useNavigate()

  const onLogout = () => {
    Cookies.remove('jwt_token')
    localStorage.clear()
    navigate('/login', {replace: true})
  }

  return (
    <header className="header">
      <div className="header-left">
        <div className="travel-icon">✈️</div>

        <h1>Travel Trip</h1>
      </div>

      <div className="header-right">
        <button
          type="button"
          className="theme-button"
          onClick={() => setDarkMode(prev => !prev)}
          aria-label="Toggle theme"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        <button
          type="button"
          className="logout-button"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </header>
  )
}

export default Header

