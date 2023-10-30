import './Signin.css'

function Signin() {
    const items = [
        {
          label:<div className='navtext' >HOME</div>,
          icon: 'pi pi-fw pi-home',
        },
        {
            label: <div className='navtext' >ABOUT</div>,
            icon: 'pi pi-fw pi-info-circle',
            
        },
        {
            label:<div className='navtext' >INQUIRY</div>,
            icon: 'pi pi-fw pi-question-circle',
        },
        {
            label:<div className='navtext' >LOGIN</div>,
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
    </>
    )
}
export default Signin