import React from 'react'
import NavBarAdmin from '../../components/NavBarAdmin'

import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

function Inquiry() {




    return (

        <>
            <NavBarAdmin />

            <div className='content' style={{ marginTop: '2.9rem' }}>


                <div className="card" style={{ margin: '1.4rem 2.1rem', height: '40rem', minWidth: '50rem', display: 'flex', backgroundColor: '#FFFFFF' }}>

                    <div className='allChats' style={{ height: 'inherit', width: '25%', backgroundColor: '#ffffff', border: '1px solid #ececec' }}>

                    </div>

                    <div className='chatBox' style={{ height: 'inherit', width: '75%', backgroundColor: '#ececec', display: 'block' }}>

                        <div className='chatHistory' >
                        </div>

                        <div style={{ top: 'inherit', marginTop: '593px', height: '20px', width: '1230px' }}>
                            <textarea style={{ width: 'inherit', height: '3rem', position: 'absolute' }} name="" id="" cols="30" rows="10"></textarea>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Inquiry