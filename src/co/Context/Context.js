// Context-API
import React, { createContext ,useState } from 'react'
import Count from './Count'
import Display from './Display'

export const store = createContext()
export const Context = () => {
  const [names,setnames] = useState('')
  const AddHandler = ad =>{
    setnames(ad.target.value)
  } 

  const SubmitHandler = sh => {
    sh.preventDefault()
    setdata([...data,{Brandname:names}])
  }


  const [data,setdata] = useState([
    {
      Brandname : "OnePlus7T"
    },
    {
      Brandname : "Samsung"
    },
    {
      Brandname : "MI"
    },
    {
      Brandname : "IPhone"
    },
    
  ])

  return (
    <store.Provider value={[data,setdata]}>
      <center>
        <Count />
        <Display />
        {/* <button onClick={() => setdata(data+1)} >Increment</button> */}
        <form onSubmit={SubmitHandler}>
          <input type='text' placeholder='Enter Your Brandname' onChange={AddHandler} autoFocus/>
          <input type='submit' value='Add'/>
        </form>
      </center>
    </store.Provider>
  )
}

export default Context;

