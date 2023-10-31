import './Login.css'
import { Menubar } from 'primereact/menubar';
import { Card } from 'primereact/card';
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
    
    const start = <h1>VSP LAUNDRY SHOP</h1>;
    
    const logo = <>
      <h1>VSPLAUNDRY SHOP</h1>
    </>
    
    return (
      <>
      <div className="Content1">
        <Menubar className="navbar" model={items} start={start} /> 
              <div className="card"> 
            
                </div>



            <div className="wave" >
              
              
            </div>
      </div>
    </>
    )
}
export default Login