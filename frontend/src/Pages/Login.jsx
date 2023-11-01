import './Login.css';

import { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import {useNavigate} from 'react-router-dom';

        


function Login() {
  const navigate = useNavigate();

  const handleHomeClick = () => navigate('/');
  const handleServiceClick = () => navigate('/Services');
  const handleLoginClick = () => navigate('/Login');
  const handleSigninClick = () => navigate('/Signin');

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

          <Card className='login'>

            <h1>Login</h1>

            <div className="loginlabel">
              <label className="username" htmlFor="username">Username</label>            
              <br />
              <InputText style={{fontFamily: "Noyh R W01 Medium"}} id="username" aria-describedby="username-help" />
            </div>

            <div className="passwordlabel">
              <label className="password" htmlFor="password">Password</label>
              <br />
              <Password inputStyle={{width: "100%",   height: "3.4rem", fontSize: "1.1rem", fontFamily: "Noyh R W01 Medium"}} style={{width: "100%", height: "3.4rem", fontSize: "1.1rem"}} value={value} onChange={(e) => setValue(e.target.value)} feedback={false}
              toggleMask />
            </div>    

            <div className="buttons">
            <Button className='loginb'  label="Login" rounded />
              
             
            <Button icon='pi pi-google' className='loginG'  label="Login with                        Google" rounded />
           </div>
          
          <div className="signin">
            <h3>
              Dont have an account?  <a href='/Signin'>Signin</a>
            </h3>
           
          </div>

          </Card>

        </div>
        
        <div className="wave" />
      </div>
    
    </>
    )
}
export default Login
