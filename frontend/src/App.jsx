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
          <h1 id="Services">Services</h1>
          <h2>hello</h2>
      </section></div>
    </>
  )
}

export default App
