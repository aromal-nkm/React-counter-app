import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Counter = () => {
    const [count, setCount] = useState(0)
    const Incrementcount=()=>{
     setCount(count+1)
     
    }
    const Decrementcount=()=>{
     setCount(count-1)
    }
  return (
    <>
       <TextField
  id="standard-basic"
  label="Counter:"
  variant="standard"
  value={count}
  style={{ marginBottom: '10px', width: '200px' }} 
/><br />

<Button
  onClick={Incrementcount}
  variant="contained"
  style={{ marginRight: '10px', backgroundColor: '#4CAF50', color: 'white' }} 
>
  Increment
</Button>
<Button
  onClick={Decrementcount}
  variant="contained"
  style={{ backgroundColor: '#F44336', color: 'white' }}
>
  Decrement
</Button></>
  )
}

export default Counter