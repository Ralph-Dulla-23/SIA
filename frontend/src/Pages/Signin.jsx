import './Signin.css'

import { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import {useNavigate} from 'react-router-dom';

        


function Signin() {
  const navigate = useNavigate();

  const handleHomeClick = () => navigate('/');
  const handleServiceClick = () => navigate('/Services');
  const handleLoginClick = () => navigate('/Login');

  const items = [
    {
      label: <div className='navtext' onClick={handleHomeClick}>HOME</div>,
      icon: 'pi pi-fw pi-home',
    },
    {
      label: <div className='navtext' onClick={handleServiceClick}>SERVICES</div>,
      icon: 'pi pi-fw pi-info-circle',
    },
    {
      label: <div className='navtext' >INQUIRY</div>,
      icon: 'pi pi-fw pi-question-circle',
    },
    {
      label: <div className='navtext' onClick={handleLoginClick}>LOGIN</div>,
      icon: 'pi pi-fw pi-sign-in',
    }
  ];
  const [value, setValue] = useState('');
  const [nameValue, setName] = useState('');
  const [passwordValue, setPassword] = useState('');
      
    
    const start = <h1>VSP LAUNDRY SHOP</h1>;
    
    const logo = 
      <h1>VSPLAUNDRY SHOP</h1>


      
    return(
    <>
      <div className="Content1">
        <Menubar className="navbar" model={items} start={start} />

        <div className="credentials">

          <Card className='slogin'>

            <h1>Create an account</h1>

            <div className="loginlabel">
              <label style={{fontSize: '20px'}} className="username" htmlFor="username">Enter a Username</label>            
              <br />
              <InputText style={{fontFamily: "Noyh R W01 Medium"}} id="username" aria-describedby="username-help" />
            </div>

            <div className="loginlabel">
              <label style={{fontSize: '20px'}} className="username" htmlFor="username">Enter Phone Number</label>            
              <br />
              <InputText keyfilter="int" style={{fontFamily: "Noyh R W01 Medium"}} id="username" aria-describedby="username-help" />
            </div>

            <div className="passwordlabel">
              <label style={{fontSize: '20px'}} className="password" htmlFor="password">Create a Password</label>
              <br />
              <Password inputStyle={{width: "100%",   height: "3.2rem", fontSize: "1.1rem", fontFamily: "Noyh R W01 Medium"}} style={{width: "100%", height: "3.4rem", fontSize: "1.1rem"}} value={value} onChange={(e) => setValue(e.target.value)} feedback={false}
              toggleMask />
            </div> 

             <div className="passwordlabel">
              <label style={{fontSize: '20px'}} className="password" htmlFor="password">Confirm Password</label>
              <br />
              <Password inputStyle={{width: "100%",   height: "3.2rem", fontSize: "1.1rem", fontFamily: "Noyh R W01 Medium"}} style={{width: "100%", height: "3.4rem", fontSize: "1.1rem"}} value={value} onChange={(e) => setValue(e.target.value)} feedback={false}
              toggleMask />
            </div>       

            <div className="buttons">
            <Button className='loginb'  label="Sign up" rounded />
              
             
            <Button icon='pi pi-google' className='loginG'  label="Sign up with Google" rounded />
           </div>


           <div className="signin">
            <h3>
              Already have an account?  <a href='/Login'>Login</a>
            </h3>
           </div>
          </Card>

        </div>

        <div style={{zIndex: "0"}} className="wave" />
      </div>
    
    </>
    )
}
export default Signin
