import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import {MdOutlineCancel} from 'react-icons/md'


const Passwordverificationpage = () => {
    let nav = useNavigate();
    const [data,setdata] = useState({
      password: '',
      confirmpassword:''
    })

    const {password,confirmpassword} = data
    const passhandler=ph=>{
      setdata({ ...data, [ph.target.name]: ph.target.value })
    }


    const disabledFunction = password.length>0 && confirmpassword.length>0;

    function cancel(e){
      nav('/')
    }

    function SubmitHandler(sh) {
      sh.preventDefault();
      console.log(data)
      nav('/')
    }

  return (
    <div className='wrapper-inner-pass'>
        <center>
          <div>
            <h1>Password Verification</h1>
            <form  onSubmit={SubmitHandler}>
            <div className="mb-3">
                <label>Password</label><br/>
                <input type="password" placeholder='Enter password' value={password} name='password' onChange={passhandler}/> 
              </div>
              <div className="mb-3">
                <label>Confirm Password</label><br/>
                <input type="password" placeholder='Re-enter password' value={confirmpassword} name='confirmpassword' onChange={passhandler} /> <br />
              </div>
              {password===confirmpassword ? null : <h6 style={{color:"red"}}>Password didn't match</h6>}
            <div className="btn-lg-sp">
              <button  className='btn btn-light' onClick={cancel}>Cancel <MdOutlineCancel/></button>
                <button type="submit" className="btn btn-info" disabled={!disabledFunction}>
                   Submit
                </button>
              </div>
            </form>
            </div>
        </center>
    </div>
  )
}

export default Passwordverificationpage;