import './App.css'
import { Menubar } from 'primereact/menubar';
import { Card } from 'primereact/card';
import {useNavigate} from 'react-router-dom';
        
import { Button } from 'primereact/button';
        


function App() {
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
      label: <div className='navtext' onClick={handleServiceClick}>INQUIRY</div>,
      icon: 'pi pi-fw pi-question-circle',
    },
    {
      label: <div className='navtext' onClick={handleLoginClick}>LOGIN</div>,
      icon: 'pi pi-fw pi-sign-in',
    }
  ];
const start = <h1>VSP LAUNDRY SHOP</h1>;



return (
  <>
  <div className="Content1">
    <Menubar className="navbar" model={items} start={start} /> 
          <div className="card">
          <Card className="title" >
            <h1>Wash Your Stress Away!</h1>
          <p className="m-0">
          Wash your stress away, one load at a time, 
              because every laundry day is a fresh start.
          </p>
        </Card>
        <div className="wave" >
          
          </div>
        </div>
  </div>

  <div className="content2">

    <div className="info">
    <Card className='infocard'>
      <h1>About</h1>
    <p className="m-1">
    VSP Laundry Shop was founded in [Year] by a group of laundry enthusiasts who shared a 
              common vision: to provide a comprehensive and customer-centric laundry experience. 
              Their passion for laundry stemmed from the belief that doing laundry should be easy, efficient, 
              and accessible to everyone. 
              With that aspiration, VSP Laundry Shop was born.
    </p>
    </Card>
      </div>
      <div className="rightcard">
        <div className="rightcard2"></div>
        </div>
  </div>
 
      
  <div className="content3">
    <div className="wave2"/> 
    <div className="faq">
      <h1>Faqs</h1>
      <Card className="field" title="What are the services you offer?">
    <p className="m-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
    </p>
      </Card>
      <br />
      <Card className="field" title="What kind of items do you cater for washing?">
          <p className="m-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
              numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
          </p>
      </Card>
      <br />
      <Card className="field" title="What are your opening hours?">
          <p className="m-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
              numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
          </p>
      </Card>
      <br />
      <Card className="field" title="How many days will I receive my items back?">
          <p className="m-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
              numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
          </p>
      </Card>
    </div> 
   
  </div> <div className="lastwave">
      </div>

      <div className="footnote">
        <h1>Vsp Laundry Shop</h1>
          <h2>Quezon Street, Panabo City, Davao Region, 8105</h2>
          <h2>Contact Number na wala ko kabalo</h2>
      </div>
    </>
  )
}

export default App
