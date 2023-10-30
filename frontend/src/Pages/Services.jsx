import '/src/Pages/Services.css'
import { Menubar } from 'primereact/menubar';
import { Card } from 'primereact/card';
import {useNavigate} from 'react-router-dom';


function Services() {
  const navigate = useNavigate();

  const handleHomeClick = () => navigate('/');
  const handleServicesClick = () => ('/Services');
  const handleLoginClick = () => navigate('/Login');

  const items = [
    {
      label: <div className='navtext' onClick={handleHomeClick}>HOME</div>,
      icon: 'pi pi-fw pi-home',
    },
    {
      label: <div className='navtext' onClick={handleServicesClick}>SERVICES</div>,
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
      <div className="C1">
        <Menubar className="navbar" model={items} start={start} /> 
              <div className="Services"> 
                <h1 className='stitle'>Services</h1>
                <h1 className="stitle">Basic Services</h1>
                <h1 className="stitle">Rush Laundry</h1>
                <h1 className="stitle">Dry Clean</h1>
                <h1 className="stitle">Special Laundry</h1>
            </div>
      </div>
    </>
    )
}
export default Services