import {Router, Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import Contact from './components/Contact'

function App(){
    return(
        
        <Router>
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Shop' element={<Shop/>}/>
                <Route path='/Contact' element={<Contact/>}/>
            </Routes>
        </Router>
    )
}
export default App;