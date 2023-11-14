import React from 'react'
import NavBarAdmin from '../../components/NavBarAdmin'

import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';

import { Button } from 'primereact/button';

function Inquiry() {

    return (

        <>
            <NavBarAdmin />

            <div className='content1' style={{ marginTop: '2.9rem' }}>

                <div className="inquiry">

                    <div className='allChats'>

                        <span className="p-input-icon-left" style={{ width: '100%', position: 'absolute', margin: '1em 1.3em' }}>
                            <i className="pi pi-search" />
                            <InputText placeholder="Search" />
                        </span>

                        <table style={{ height: 'inherit', width: '100%' }}>
                            <td>
                                
                            </td>
                        </table>


                    </div>

                    <div className='chatBox'>

                        <div className='chatHistory' >

                        </div>

                        <div className='inputs'>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            <Button label='Send' />
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Inquiry