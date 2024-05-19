import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'

const Home = () => {


    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchAllData = async () => {
            await axios.get('http://localhost:8800/fetchAll').then(res => {
                setData(res.data);
            })
        }

        fetchAllData();
    }, [])


    const navigate = useNavigate();


    function handleDelete(id) {
        axios.post("http://localhost:8800/delete", { id }).then(res => {
            console.log(res);
            window.location.reload();

        })
    }

    const handlenew = () => {
        navigate('/new');
    }





    return (
        <div className='HomePage'>
            <div className="HomePage_nav">
                <div className="HomePage_nav_new">
                    <button type="button" className="btn btn-primary" onClick={handlenew}>New</button>
                </div>
            </div>
            <div className="HomePage_table">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Number</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) => (
                                <tr>
                                    <td>{item.Id}</td>
                                    <td>{item.Name}</td>
                                    <td>{item.Number}</td>
                                    <td className='Actions'>
                                        <button type="button" className="btn btn-danger" onClick={() => handleDelete(item.Id)}>Delete</button>
                                        <button type="button" className="btn btn-warning" onClick={() => navigate(`/edit/${item.Id}`)} >Edit</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
