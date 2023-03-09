import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LeftNavbar from './Components/Navbars/LeftNavbar';
import RightNavbar from './Components/Navbars/RightNavbar';
import MobileNavBar from './Components/Navbars/MobileNavBar';
import Test from './Test';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className=" bg-[url('./main_bg.png')] min-w-[375px] max-w-[1440px] min-h-[100vh] text-white font-['Poppins] ">
      {/* <Test/> */}
      <LeftNavbar/>
      <RightNavbar/>
      <MobileNavBar/>
     {/* hover btn animation */}
     {/* <div className='relative inline-block ml-16'>

     
        <p class=" w-[130px] h-[50px]  text-[2rem] tracking-widest font-[600]
              
              duration-200
              flex justify-center items-center
              before:absolute before:bg-[#3f4344]
              before:top-[10px] before:left-0
              
              before:duration-1000 before:content-['']
              before:h-[2px] before:w-[130px] 

              after:absolute after:bg-[#3f4344]
              after:bottom-[10px] after:right-0
              after:duration-1000 after:content-['']
              after:h-[2px] after:w-[130px] 
              
              hover:before:bg-[white]
              hover:before:w-[0px]
              hover:after:bg-[white]
              hover:after:w-[0px]
              
              ">APJCR</p>
    </div> */}
    <Routes>
      <Route path='/' element={<Navigate to="/home"></Navigate>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/portfolio' element={<Portfolio/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>


    </div>
  )
}

export default App
