import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <>
      <div>
        <header className="header">
          <a href="#" className='logo'>VSP</a>
          <div style={{ backgroundImage: "url(Assets/Backgorund.png)" }}>
              
          </div>
          <nav  style></nav>
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">SERVICES</a>
            <a href="#">INQUIRY</a>
            <a href="#">ACCOUNT</a>

        </header>
        
      </div>
    </>
  )
}

export default App
