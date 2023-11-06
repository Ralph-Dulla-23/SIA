import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

function Dashboard() {

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2" style={{ minWidth: '50rem', padding: '0.4rem 2.1rem' }}>
      <span className="text-xl text-900 font-bold" style={{ fontSize: '1.6rem' }}>Job Orders</span>
      <Button style={{ float: 'right' }} label='Add Order' />
    </div>
  );

  return (

    <>

      <div className='C1'>

        <NavBar />
        <div className="card" style={{ padding: '1.4rem 2.1rem', backgroundColor: 'white', margin: '3.2rem 1rem' }}>
          <DataTable header={header}>
            <Column field="name" header="Job Order Number"></Column>
            <Column field="price" header="Customer"></Column>
            <Column field="category" header="Service"></Column>
            <Column header="Status"></Column>
          </DataTable>
        </div>

      </div>

    </>
    
  )
}

export default Dashboard