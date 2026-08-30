import './App.css'
import {useState} from 'react'
import {BrowserRouter,Routes,Route,Navigate,} from 'react-router'
import Header from './components/Header'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import TravelTrip from './components/TravelTrip'
import YourDetails from './components/YourDetails'
import DateSelection from './components/DateSelection'
import Guests from './components/Guests'
import TravelAssistence from './components/TravelAssistence'
import Confirmation from './components/Conformation'
import SuccessMsg from './components/SuccessMsg'

const TravelTripPage = () => {
  const [activeStep, setActiveStep] = useState(1)
  const [darkMode, setDarkMode] = useState(false)

  const renderCurrentStep = () => {
    switch (activeStep) {
      case 1:
        return <YourDetails setActiveStep={setActiveStep} />

      case 2:
        return <DateSelection setActiveStep={setActiveStep} />

      case 3:
        return <Guests setActiveStep={setActiveStep} />

      case 4:
        return <TravelAssistence setActiveStep={setActiveStep} />

      case 5:
        return <Confirmation setActiveStep={setActiveStep} />

      case 6:
        return <SuccessMsg setActiveStep={setActiveStep} />

      default:
        return <YourDetails setActiveStep={setActiveStep} />
    }
  }

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="page">
        <div className="left-section">
          <TravelTrip activeStep={activeStep} />
        </div>

        <div className="right-section">
          {renderCurrentStep()}
        </div>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <TravelTripPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

