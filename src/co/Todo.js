import React, { useState } from 'react'
import ToList from './ToList'


const Todo = () => {
  const [val,setval] = useState("")
  const [list,setlist] = useState([])

  const valHandler =  vh =>{
    setval(vh.target.value)
  }
  const submitHandler = sh =>{
    sh.preventDefault();
    const newlist = [...list,val]
    setlist(newlist)
    //console.log(list)
  }

  const deleteHandler = (indexvalue) =>{
    const newlist = list.filter((vals,index) => index !== indexvalue)
    setlist(newlist)
  }
 
  return (
    <div className='card'>
      <div className='card-body'>
        <center>
          <h4 className='card-title'>Todo List</h4>
          <form onSubmit={submitHandler}>
            <input type='text' placeholder='Enter List' onChange={valHandler} autoFocus /> &nbsp;
            <button type='submit' className='btn btn-secondary'>Add</button>
          </form>
          <ToList List = {list} deleteHandler = {deleteHandler} />
        </center>
      </div>
      
    </div>
  )
}
export default Todo;

