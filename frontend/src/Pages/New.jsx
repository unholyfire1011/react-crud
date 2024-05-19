import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const New = () => {


    const Navigate = useNavigate();
    const [name, setName] = useState("");
    const [number, setNumer] = useState("");



    const handleSubmit = () => {
        axios.post('http://localhost:8800/insert', { name, number }).then(res => {
            console.log(res);
            Navigate('/');
        })
    }


    return (
        <div className='New'>
            <div>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="number" className="form-label">Number</label>
                    <input type="text" className="form-control" id="number" value={number} onChange={(e) => setNumer(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit} >Submit</button>
            </div>
        </div>
    )
}

export default New
