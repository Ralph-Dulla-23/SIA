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
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
      <div className='Content1'>
        <header className="header">
          <a className='logo'>VSP Laundry Shop</a>

          <label htmlFor="" className="icons"><i class="fa fa-bars" aria-hidden="true"></i></label>
        <div>
          <nav className='navbar'>
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">SERVICES</a>
            <a href="#">INQUIRY</a>
            <a href="#">ACCOUNT</a>
          </nav> </div>
        </header>
       
      </div>
      <div className='content2'>
      <section className="Services">
        <div className="servicetitle">
           <h1 id="Services">Services</h1>
           <div className="bigcircle">
           <div className="smallcircle"></div></div>
        </div>

          <div className="bluebox">
            <div className="left">
              <h4>19/Kilo</h4>
               <p> Wash n' dry <br></br>
                and fold</p>
                <h4>19/kilo</h4>
                <p>Hand <br /> Wash</p>
            </div>
             <div className="right">
              <h4>19Kilo</h4>
             <p>Wash n' dry <br />
                and press</p>
                <h4>19Kilo</h4>
             <p>Dry and <br />Fold</p>
                
                
                
             </div>
                
          </div>
      </section>
      </div>
    </>
  )
}

export default App
