
import React from 'react'
import { useState } from 'react'

const Calculator = () => {
  const [input,setinput] = useState('')
  const [output,setoutput] = useState(0)

  const inputHandler = ih =>{
    setinput(ih.target.value)
  }

  const outputHandler = oh =>{
    // eslint-disable-next-line
    setoutput(eval(input))
  }



  const clrHandler = ch =>{
    setinput('');
    setoutput('0');
  }

  return (
    <div>
        <div className='wrapper-cal'>
            
      <center>
     
        <input type='text' placeholder='Enter value' value={input} name='value' onChange={inputHandler} autoFocus />
        <br/><br/>
        <button className='btn btn-info' onClick={outputHandler}>Result</button>
        
        <h4>Result is : {output}</h4>

        <div className='wrapper-cal-a'>
        <button className='btn btn-outline-primary' onClick={() => setinput(input+'1')}>1</button>
        <button className='btn btn-outline-info' onClick={() => setinput(input+'2')}>2</button>
        <button className='btn btn-outline-info' onClick={() => setinput(input+'3')}>3</button>
        <button className='btn btn-outline-info' onClick={() => setinput(input+'4')}>4</button>
        <button className='btn btn-outline-info' onClick={() => setinput(input+'5')}>5</button><br/>

        <button className='btn btn-outline-info' onClick={() => setinput(input+'6')}>6</button>
        <button className='btn btn-outline-info' onClick={() => setinput(input+'7')}>7</button>
        <button className='btn btn-outline-info' onClick={() => setinput(input+'8')}>8</button>
        <button className='btn btn-outline-info' onClick={() => setinput(input+'9')}>9</button>
        <button className='btn btn-outline-info' onClick={() => setinput(input+'0')}>0</button><br/>

        <button className='btn btn-outline-danger' onClick={() => setinput(input+'+')}>+</button>
        <button className='btn btn-outline-danger' onClick={() => setinput(input+'-')}>-</button>
        <button className='btn btn-outline-danger' onClick={() => setinput(input+'*')}>*</button>
        <button className='btn btn-outline-danger' onClick={() => setinput(input+'/')}>/</button>
        <button className='btn btn-outline-secondary' onClick={clrHandler}>CLR</button>
        </div>
      </center>
      
      </div>
    </div>
  )
}

export default Calculator;