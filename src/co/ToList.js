import React from 'react'

const ToList = ({List, deleteHandler}) => {
  return (
    <div>
      {List.map((val,index) => 
        <center>
          <div key={index}>
            <br/>
            <h6>{val} &nbsp; <button className='btn btn-secondary' onClick={ () => deleteHandler(index)} >Delete</button> </h6>
          </div>
        </center>
        )}
    </div>
  )
}

export default ToList;