import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

function Dashboard() {

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2" style={{ minWidth: '50rem', padding: '0.4rem 0rem' }}>
      <span className="m-2" style={{ margin: 'auto 0rem', fontSize: '1.9rem' }}>Job Orders</span>
      <Button style={{ float: 'right' }} label='Add Order' />
    </div>
  );

  return (

    <>


      <div className='C1'>

        <NavBar />

        <div className="card" style={{ padding: '1.4rem 2.1rem', minWidth: '50rem' }}>

          <DataTable header={header} tableStyle={{ height: '35rem' }}>
            <Column field="jobOrder" header="ID" alignHeader={'center'}></Column>
            <Column field="customer" header="Service" alignHeader={'center'}></Column>
            <Column field="service" header="Date Received" alignHeader={'center'}></Column>
            <Column header="Status" alignHeader={'center'}></Column>
          </DataTable>

        </div>

      </div>

    </>

  )
}

export default Dashboard