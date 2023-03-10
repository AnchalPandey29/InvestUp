import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const StartupProfile = () => {

    const [userList, setUserList] = useState([]);

    const getDataFromBackend = async () => {
        // send request 
        const res= await fetch('http://localhost:5000/startup/getall');

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
        const res = await fetch('http://localhost:5000/startup/delete/'+id, {
            method : 'DELETE'
        })

        if(res.status===200){
            getDataFromBackend();
            toast.success('User Deleted Successfully!!');
        }
    }

  return (
    <div>
        <header className='py-5'>
            <div className="container">
                <h1 className='display-3 fw-bold  text-center' style={{color:"#9c3353"}}> Startup Profile</h1>
            </div>
        </header>

        <div className='container mt-4'>

        <table class="table table-striped table-hover">
                <thead >
                    <tr style={{backgroundColor:"#9c3353", color:"white"}}>
                        
                    <th>OwnerName</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Title</th>
                        <th>Contact</th>
                        <th>Image</th>
                        <th>OwnerAvatar</th>
                        <th>Product Information</th>
                        <th>Documents</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody style={{backgroundColor:"white"}}>
                    {
                        userList.map( (user) => (
                            <tr >
                                <td>{user.ownername}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.title}</td>
                                <td>{user.contact}</td>
                                <td>{user.coverimage}</td>
                                <td>{user.owneravatar}</td>
                                <td>{user.product}</td>
                                <td>{user.documents}</td>
                                <td>{user.created_at}</td>
                                
                                
                                <td>
                                    <button className='btn btn-dark' style={{backgroundColor:"#9c3353"}} onClick={() => deleteUser(user._id)}> <i style={{color:"white"}} class="fas fa-trash"></i></button>
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

export default StartupProfile;