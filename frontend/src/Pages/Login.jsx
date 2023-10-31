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
              <InputText id="username" aria-describedby="username-help" />
            </div>

            <div className="passwordlabel">
              <label className="password" htmlFor="password">Password</label>
              <br />
              <Password inputStyle={{width: "100%",   height: "3.4rem", fontSize: "1.1rem"}} style={{width: "100%", height: "3.4rem", fontSize: "1.1rem"}} value={value} onChange={(e) => setValue(e.target.value)} feedback={false}
              toggleMask />
            </div>    

          </Card>

        </div>

        <div className="wave" />
      </div>

 
     {/* <div className='content2' >
            <Card className="behind-box-username"style={{ borderRadius: '20px' }}>
                <div className="id-number-box">
            <span className="p-float-label">
                <InputText id="username-1" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor="username">ID number</label>
            </span>
        </div>
        <div className="id-number-box">
            
        </div>
        <div className="password-box">
            <Password value={passwordValue} onChange={(e) => setPassword(e.target.passwordValue)} toggleMask />
        </div>
        <Button id='signup-button' label="Login" severity="secondary" rounded />
        

            </Card>
        </div> */}


    
    </>
    )
}
export default Login
