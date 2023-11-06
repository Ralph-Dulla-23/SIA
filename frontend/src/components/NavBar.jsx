import React from 'react'
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';

function NavBar() {

    const navigate = useNavigate();
    const handleDashboardClick = () => navigate('/Dashboard');
    const handleInquiryClick = () => navigate('/Inquiry');
    const handleStaffClick = () => navigate('/Staff');

    const items = [
        {
            label: <div className='navtext' onClick={handleDashboardClick}>DASHBOARD</div>,
            icon: 'pi pi-fw pi-home',
        },
        {
            label: <div className='navtext' onClick={handleInquiryClick}>INQUIRY</div>,
            icon: 'pi pi-fw pi-info-circle',
        },
        {
            label: <div className='navtext' onClick={handleStaffClick}>STAFF</div>,
            icon: 'pi pi-fw pi-question-circle',
        },
        {
            label: <div className='navtext'>LOGOUT</div>,
            icon: 'pi pi-fw pi-sign-in',
        }
    ];
    const start = <h1>VSP LAUNDRY SHOP</h1>;

    return (
        <div>
            <Menubar className="navbar" model={items} start={start} />
        </div>
    )
}

export default NavBar