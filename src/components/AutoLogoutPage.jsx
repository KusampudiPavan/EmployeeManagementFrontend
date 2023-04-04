import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

const AutoLogoutPage = () => {
    const nav = useNavigate();
    const navi = () =>{
        nav('/')
    }

    return (
        <center>
        <div className="wrapper-inner-signup">
            <div className="wrapper-inner-a-signup">
                <div>
                    <center>
                        <h1>Session Logout!!</h1>
                        <Button onClick={navi}>Login Again!!</Button>
                    </center>
                </div>
            </div>
        </div>
        </center>

    )
}

export default AutoLogoutPage