import {Routes, Route, Link} from 'react-router-dom'
import './index.css'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/login' element={<LoginPage />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
