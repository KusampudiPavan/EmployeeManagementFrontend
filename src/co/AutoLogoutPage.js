import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

const AutoLogoutPage = () => {
    const nav = useNavigate();
    const navi = () =>{
        nav('/')
    }

    return (
        <div className="wrapper">
            <div className="wrapper-inner-b">
                <div>
                    <center>
                        <h1>Session Logout!!</h1>
                        <Button onClick={navi}>Login Again!!</Button>
                    </center>
                </div>
            </div>
        </div>

    )
}

export default AutoLogoutPage