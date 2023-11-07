import React from 'react'
import NavBar from '../../components/NavBar'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

function Staff() {

    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2" style={{ minWidth: '50rem', padding: '0.4rem 1.1rem' }}>
          <span className="m-2" style={{ margin: 'auto 0rem', fontSize: '1.9rem' }}>Staff</span>
        </div>
      );

    return (

        <>

            <div className='C1'>

                <NavBar />

                <div className="card" style={{ padding: '1.4rem 2.1rem', minWidth: '50rem' }}>
                    <DataTable header={header} stripedRows tableStyle={{height: '35rem'}}>
                        <Column field="name" header="ID" alignHeader={'center'}></Column>
                        <Column field="price" header="Name" alignHeader={'center'}></Column>
                        <Column field="category" header="Job"alignHeader={'center'}></Column>
                        <Column header="Permissions" alignHeader={'center'}></Column>
                    </DataTable>
                </div>

            </div>

        </>
    )
}

export default Staff