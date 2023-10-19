import { TextField, Stack, Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App()

{
  const [interest,setInterest] = useState(0)
  const [principle,setprinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [isprinciplevalid,setIsprinciplevalid] =useState(true)
  const [isratevalid,setIsratevalid] =useState(true)
  const [isyearvalid,setIsyearvalid] =useState(true)
  const validInput=(e)=>
  {
   // destructure
  const {name,value} = e.target
  //regular expression 
  if(!!value.match(/^[0-9]*.?[0-9]+$/))
  {
    if(name==="principle")
    {
    setprinciple(value)
    setIsprinciplevalid(true)
    }
    else if(name==="rate")
    {
    setRate(value)
    setIsratevalid(true)
    }
    else if(name==="year")
    {
    setYear(value)
    setIsyearvalid(true)
    }
  }
  else{
   if(name==="principle")
    {
    setprinciple(value)
    setIsprinciplevalid(false)
    }
    else if(name==="rate"){
      setRate(value)
    setIsratevalid(false)

    }
    else if(name==="year")
    {
    setYear(value)
    setIsyearvalid(false)
    }
  }


}
const handlecalculate =(e)=>{
  e.preventDefault()
  if(!principle || !rate || !year){
    alert("please fill the form completely")
  }
  else{
    setInterest(principle*rate*year/100)
  }
}
const handleReset=()=>{
  setInterest(0)
  setprinciple(0)
  setRate(0)
  setYear(0)
  setIsprinciplevalid(true)
  setIsratevalid(true)
  setIsyearvalid(true)
}
  
  return (
    <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
      <div style={{ width: '500px' }} className='bg-light p-5 rounded'>
        <h1>Simple Interest App</h1>
        <p>Calculate your simple interest Easily</p>
        <div style={{ height: '150px' }} className='interest-card d-flex justify-content-center align-items-center w-100 bg-warning text-light mt-5 flex-column rounded shadow'>
          <h1>₹ {' '} {interest}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form onSubmit={handlecalculate} className='mt-5'>  
          <div className='mb-3 '>
            <TextField className='w-100' id="outlined-basic1" label="₹ Principle Amount" variant="outlined" value={principle || ""} name="principle" onChange={(e)=>validInput(e)} />
          </div>
 {
            !isprinciplevalid && (
          <div className='mb-3 text-danger'>
            *Invalid User Input

          </div>)
 }
          <div className='mb-3 '>
            <TextField className='w-100' id="outlined-basic2" label="Rate of Interest" variant="outlined" value={rate || ""} name="rate" onChange={(e)=>validInput(e)} />
          </div>
          {
            !isratevalid && (
          <div className='mb-3 text-danger'>
            *Invalid User Input

          </div>)
 }
          <div className='mb-3 '>
            <TextField className='w-100' id="outlined-basic3" label="Time Period" variant="outlined" value={year || ""} name="year" onChange={(e)=>validInput(e)} />

          </div>
 {
            !isyearvalid && (
          <div className='mb-3 text-danger'>
            *Invalid User Input

          </div>)
 }
          
          
          <Stack direction="row" spacing={2}>
            <Button style={{ height: '70px', width: '50%' }} type='submit' variant="contained" disabled={isprinciplevalid && isratevalid && isyearvalid?false:true}>Calculate</Button>
            <Button onClick={handleReset} style={{ height: '70px', width: '50%' }} variant="outlined">Reset</Button> {/* Set a reasonable height */}
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default App;
