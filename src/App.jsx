import {Routes, Route, Link} from 'react-router-dom'
import './index.css'
import './App.css'
import HomePage from './pages/homePage'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
