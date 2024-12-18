import './App.css'
import {Routes,Route} from "react-router-dom"
import RegisterForm from './Common/Register'
import Login from './Common/Login'
import Navbar from './Common/Navbar'
import Footer from './Common/Footer'

function App() {

  return (
    <>

        <Navbar/>
       <Routes>
        <Route path='/reg' element={<RegisterForm/>}></Route>
        <Route path='/' element={<Login/>}></Route>
       </Routes>
       <Footer/>
    </>
  )
}

export default App
