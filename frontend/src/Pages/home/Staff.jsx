import React, { useState, useEffect } from 'react'
import NavBarAdmin from '../../components/NavBarAdmin'
import { staffData } from '../../assets/staffData.js';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

function Staff() {

    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2" style={{ minWidth: '50rem', padding: '0.2rem 1.1rem' }}>
            <span className="m-2" style={{ fontSize: '1.9rem' }}>Staff</span>
        </div>
    );

    const [staff, setStaff] = useState([]);

    useEffect(() => {
        staffData.getStaff().then(data => setStaff(data));
    }, []);


    return (

        <>
            <NavBarAdmin />

            <div className='content1' style={{ marginTop: '2.9rem' }}>

                <div className="tableCard">

                    <DataTable value={staff} paginator rows={5} selectionMode="single" header={header} stripedRows tableStyle={{height: '20rem'}}>
                        <Column field="ID" header="ID" alignHeader={'center'} style={{textAlign: 'center'}}></Column>
                        <Column field="Name" header="Name" alignHeader={'center'} style={{textAlign: 'center'}}></Column>
                        <Column field="Job" header="Job" alignHeader={'center'} style={{textAlign: 'center'}}></Column>
                        <Column header="Permissions" alignHeader={'center'} style={{textAlign: 'center'}}sq></Column>
                    </DataTable>

                </div>

            </div>

        </>
    )
}

export default Staff