import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { ToggleButton } from 'primereact/togglebutton';

function NavBar() {
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();
    const handleHomeClick = () => navigate('/');
    const handleServiceClick = () => navigate('/Services');
    const handleLoginClick = () => navigate('/Login');

    const items = [
        {
            label: (
                <ToggleButton
                    checked={checked}
                    onChange={(e) => setChecked(e.value)}
                    className="w-8rem"
                    onLabel='English'
                    offLabel='Tagalog'
                />
            ),
        },
        {
            label: <div className='navtext' onClick={handleHomeClick}>HOME</div>,
            icon: 'pi pi-fw pi-home',
        },
        {
            label: <div className='navtext' onClick={handleLoginClick}>LOGIN</div>,
            icon: 'pi pi-fw pi-sign-in',
        }
        
    ];

    const start = <img src={logo} alt="logo" style={{ height: '2.5em', width: 'auto' }} />;

    return (
        <>
            <Menubar className="navbar" model={items} start={start} />
        </>
    )
}

export default NavBar;
