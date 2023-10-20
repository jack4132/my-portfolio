import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Nav from './Components/Nav/Nav'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Components/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div style={{position:'relative'}}>
        
        <BrowserRouter>
        <Nav/>
          <Routes>
            
             <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
           </Routes>
           <Footer/>
        </BrowserRouter>
        
      </div>
  )
}

export default App
