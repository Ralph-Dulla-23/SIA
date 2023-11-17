
import NavBar from '../components/NavBar';

import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';


function Login() {

  const [value, setValue] = useState('');
  const [nameValue, setName] = useState('');
  const [passwordValue, setPassword] = useState('');

  return (

    <>

      <NavBar />

      <div className="content" style={{ marginTop: '2.9rem'}}>

          <Card className='credentials'>

            <div id="testing">
            <h1 id='test'></h1></div>

            <div className="addPanel">

              <InputText id="username" placeholder='Email Address'aria-describedby="username-help" />
            
            </div>

            <div className="passPanel">

              <Password inputStyle={{ width: "100%" }}
                id="password" placeholder='Password'
                value={value} onChange={(e) => setValue(e.target.value)} feedback={false}
                toggleMask />
           
            </div>

            <div className="loginButtons">

              <Button className='loginb' label="Login" id='loginB'/>
              <Button icon='pi pi-google' className='loginG' label="Login with Google"/>

            </div>

            <div className="signin">

              <h3>
                Dont have an account?  <a href='/Signin'>Signin</a>
              </h3>

              
              

            </div>

          </Card>
        <script type="module" src="index.js"></script>
      </div>

    </>
  )
}
export default Login
