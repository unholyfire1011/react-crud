import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Edit = () => {

    const Navigate = useNavigate();
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const id = location.pathname.split("/")[2];

    useEffect(() => {
        axios.post("http://localhost:8800/fetch", { id }).then(res => {
            setName(res.data[0].Name);
            setNumber(res.data[0].Number);
        })
    }, [id])

    const handleSubmit = () => {
        axios.post("http://localhost:8800/update", { id, name, number }).then(res => {
            console.log(res);
            Navigate('/');
        })
    }



    return (
        <div className='Edit'>
            <div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="number" className="form-label">Number</label>
                    <input type="text" className="form-control" id="number" value={number} onChange={(e) => setNumber(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Edit
