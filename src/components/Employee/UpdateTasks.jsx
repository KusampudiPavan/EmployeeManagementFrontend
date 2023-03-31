import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './SidebarEmployee'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UpdateTasks = () => {
    let navigate = useNavigate();
    const [taskid, settaskid] = useState(0);
    const [status, setstatus] = useState('');

    useEffect(() => {
        settaskid(localStorage.getItem('taskid'))
        setstatus(localStorage.getItem('status'));

    }, []);



    const updateform = () => {
        axios.put(`http://localhost:8091/tasks/update/${taskid}`, {
            status: status
        }, {
            headers: {
                'Authorization': "Bearer " + window.localStorage.getItem("jwt")
            }
        })
            .then(() => {
                console.log("Updated")
            })
        navigate("/checktasks")
    }
    return (
        <div>
            <Sidebar />
            <div className="wrapper-inner-signup">
                <div className='row'>
                    <center>
                        <div className="wrapper-inner-a-signup">
                            <h3><center>Update progress</center></h3>
                            <br />
                            <div className='col'>
                                <div>
                                    <form onSubmit={updateform} >


                                        <div className="mb-3">
                                            <label><strong>Status:</strong></label>
                                            <Form.Select onChange={(e) => setstatus(e.target.value)} name='status' value={status} aria-label="Default select example" style={{width:'250px'}}>
                                                <option>Select Gender</option>
                                                <option >0</option>
                                                <option >25</option>
                                                <option >50</option>
                                                <option >75</option>
                                                <option >100</option>
                                            </Form.Select>
                                        </div>


                                        <div align="center">
                                            <Button variant="secondary" type="submit" className="btn btn-info">
                                                Update progress
                                            </Button>{' '}
                                            <Link to='/checktasks'>
                                                <button className='btn btn-danger' style={{ marginleft: "40px" }}>Cancel</button>
                                            </Link>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </center>
                </div>
            </div>

        </div >

    );
}

export default UpdateTasks