import React, { useState, useEffect } from 'react'
import NavBarAdmin from '../../components/NavBarAdmin'
import { jobData } from '../../assets/jobData';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

function Dashboard() {

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2" style={{ minWidth: '50rem', padding: '0.2rem 1.1rem' }}>
      <span className="m-2" style={{ margin: 'auto 0rem', fontSize: '1.9rem' }}>Job Orders</span>
      <Button style={{ float: 'right' }} label='Add Order' />
    </div>
  );

  const [job, setJob] = useState([]);

    useEffect(() => {
        jobData.getJob().then(data => setJob(data));
    }, []);

  return (

    <>
    
      <NavBarAdmin />

      <div className='content1' style={{ marginTop: '2.9rem' }}>

        <div className="tableCard">

          <DataTable value={job} paginator rows={5} selectionMode="single" header={header} stripedRows tableStyle={{height: '20rem'}}>
            <Column field="ID" header="ID" alignHeader={'center'} style={{textAlign: 'center'}}></Column>
            <Column field="Service" header="Service" alignHeader={'center'} style={{textAlign: 'center'}}></Column>
            <Column field="Date_Received" header="Date Received" alignHeader={'center'} style={{textAlign: 'center'}}></Column>
            <Column field="Status" header="Status" alignHeader={'center'} style={{textAlign: 'center'}}></Column>
          </DataTable>

        </div>

      </div>

    </>

  )
}

export default Dashboard