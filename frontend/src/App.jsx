import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import SoapIcon from '@mui/icons-material/Soap';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import { Accordion, AccordionTab } from 'primereact/accordion';
        


import { Fieldset } from 'primereact/fieldset';
        


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
           <div className="smallcircle">
           <div className="small2"></div></div></div>
        </div>

          <div className="bluebox"> 
            <div className="left">
              <div className="logo1">
           
              <h4>19/Kilo</h4>
               <p> Wash n' dry <br></br>
                and fold</p>
           
                <h4>19/kilo</h4>
                <p>Hand <br /> Wash</p>
                </div>
            </div>
             <div className="right">
              <h4>19Kilo</h4>
             <p>Wash n' dry <br />
                and press</p>

                <h4>19Kilo</h4>
             <p>Dry and <br />Fold</p>
             </div>
          </div>

          <div className="content3">
            <div className="aboutT">
              <h1 id="AboutT">About</h1>
            <div className="bigcircle1">
           <div className="smallcircle1">
           <div className="small3"></div></div></div>
            </div>

            <p>VSP Laundry Shop was founded in [Year] by a group of laundry enthusiasts who shared a 
              common vision: to provide a comprehensive and customer-centric laundry experience. 
              Their passion for laundry stemmed from the belief that doing laundry should be easy, efficient, 
              and accessible to everyone. 
              With that aspiration, VSP Laundry Shop was born.</p>
          </div>
          
      </section>
      </div>
      <div className="content3">
          

          <div className="faqs">
            <h1>FAQs</h1>

            <Accordion activeIndex={0}>
    <AccordionTab header="Header I">
        <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </AccordionTab>
    <AccordionTab header="Header II">
        <p className="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </AccordionTab>
    <AccordionTab header="Header III">
        <p className="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </AccordionTab>
</Accordion>

            <div className="info">
            <h2>Phone Number: 09203982039</h2>
            <h2>Location: Quezon Street, Panabo City, Davao Region, 8105</h2>
          </div>
          </div>
          </div>
    </>
  )
}

export default App
