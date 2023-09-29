import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage'
import MapScreen from './Pages/MapScreen/MapScreen'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Map" element = {<MapScreen/>}/>
      </Routes>
    </Router>
  );
}

export default App;