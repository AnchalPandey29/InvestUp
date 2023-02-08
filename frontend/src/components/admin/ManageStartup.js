import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const ManageStartup = () => {

    const [userList, setUserList] = useState([]);

    const getDataFromBackend = async () => {
        // send request 
        const res= await fetch('http://localhost:5000/campaign/getall');

        // accessing data from response
        const data = await res.json();

        console.log(data);
        setUserList(data.result);

    };

    useEffect(() => {
     
        getDataFromBackend();

    }, []);
    
    const deleteUser = async (id) => {
        console.log(id);
        const res = await fetch('http://localhost:5000/campaign/delete/'+id, {
            method : 'DELETE'
        })

        if(res.status===200){
            getDataFromBackend();
            toast.success('User Deleted Successfully!!');
        }
    }

  return (
    <div>
        <header className='bg-dark py-5'>
            <div className="container">
                <h1 className='display-3 fw-bold text-white text-center'>Manage User Data</h1>
            </div>
        </header>

        <div className='container mt-4'>

            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.map( (user) => (
                            <tr>
                                <td>{user._id}</td>
                                <td>{user.title}</td>
                                <td>{user.startdate}</td>
                                <td>{user.age}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => deleteUser(user._id)}> <i class="fas fa-trash"></i></button>
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

export default ManageStartup;