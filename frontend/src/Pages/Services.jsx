import '/src/Pages/Services.css'
import { Menubar } from 'primereact/menubar';
import { Card } from 'primereact/card';
import {useNavigate} from 'react-router-dom';


function Services() {
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
    
    const logo = <>
      <h1>VSPLAUNDRY SHOP</h1>
    </>
    
    return (
      <>
      <div className="C1">
        <Menubar className="navbar" model={items} start={start} /> 
        <h1 className='stitle'>Services</h1>
              <div className="Services">       
              
              <Card className="card1" id='card'>
                <h1 className="stitle1" id='title'>Basic Services</h1>
                <h2 className="scard1">Wash'n Dry Fold</h2>
                <h2 className="scard1">Wash'n Dry and Press</h2>
                <h2 className="scard1">Washin Dry and Press with Hanger</h2>
                <h2 className="scard1">Handwash-Dry-Fold</h2>
                <h2 className="scard1">Handwash-Dry-Press</h2>
                <h2 className="scard1">Taekwondo Uniform White Color</h2>
                <h2 className="scard1">Blanckets/ToweIs/Pillowcase/</h2>
                <h2 className="scard1">Seatcover / Linens / Bedsheet</h2>
                <h2 className="scard1">Curtain Baga / Car Seat Cover</h2>
                <h2 className="scard1">Curtain Handwash</h2>
                <h2 className="scard1">Table Clothe Handwash</h2>
                <h2 className="scard1">Children, infant clothe regular wash</h2>
                <h2 className="scard1">Comforters min- of 3 kilos</h2>
              </Card>
          
               <Card className="card2" id='card'>
                 <h1 className="stitle1" id='title'>Rush Laundry</h1>
                 <h2 className="scard2">Wash'n Dry Fold</h2>
                 <h2 className="scard2">Wash'n Dry and Press</h2>
               </Card>
               
               <Card className="card3" id='card'>
                 <h1 className="stitle1" id='title'>Dry Clean</h1>
                <h2 className="scard3">Polo/ Barong Short Sleeves</h2>
                <h2 className="scard3">Polo/ Barong Long Sleeves</h2>
                <h2 className="scard3">Suit Jacket (w/lining)</h2>
                <h2 className="scard3">Stacks/Pants</h2>
                <h2 className="scard3">Trench Coat / Americana</h2>
                <h2 className="scard3">Dress</h2>
                <h2 className="scard3">Gown (Ordinary)</h2>
                <h2 className="scard3">Long Down (w/beadwork)</h2>
                <h2 className="scard3">Wedding Gown</h2>
                <h2 className="scard3">Wedding Gown (w/trail beaded)</h2>
               </Card>
               
              <Card className="card4" id='card'>
                <h1 className="stitle1" id='title'>Special Laundry</h1>
                <h2 className="scard4">Back Pack</h2>
                <h2 className="scard4">Sleeping Bag</h2>
                <h2 className="scard4">Shoes Pair</h2>
                <h2 className="scard4">Pillow (Small)</h2>
                <h2 className="scard4">Pillow (Medium)</h2>
                <h2 className="scard4">Pillow (Large)</h2>
                <h2 className="scard4">Stuffed Toy (Small)</h2>
                <h2 className="scard4">Stuffed Toy (Medium)</h2>
                <h2 className="scard4">Stuffed Toy (Large)</h2>
                <h2 className="scard4">Stuffed Toy (X-Large)</h2>
              </Card>

                
            </div>
            <div className="wave" />
      </div>
    </>
    )
}
export default Services