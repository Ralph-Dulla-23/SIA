import React from 'react'
import { Button } from 'primereact/button';
import Fab from '@mui/material/Fab';

function MessageFab() {
  return (
    <>
        <Fab color="primary" style={{flex: '1',position: 'fixed', bottom: '10', right: '10'}}>
        </Fab>
    </>
  )
}

export default MessageFab