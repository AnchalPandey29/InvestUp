import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const ManageCampaign = () => {

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
        <header className='py-5'>
            <div className="container">
                <h1 className='display-3 fw-bold text-center'  style={{color:"#9c3353"}}>Manage Campaign Data</h1>
            </div>
        </header>

        <div className='container mt-4'>

        <table class="table table-striped table-hover">
                <thead>
                    <tr style={{backgroundColor:"#9c3353", color:"white"}}>
                        
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>CONTENT</th>
                        <th>START DATE</th>
                        <th>LAST DATE</th>
                        <th>IMAGE</th>
                        <th>DELETE</th>
                        
                    </tr>
                </thead>
                <tbody style={{backgroundColor:"white"}}>
                    {
                        userList.map( (user) => (
                            <tr>
                                
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                                <td>{user.content}</td>
                                <td>{user.startdate}</td>
                                <td>{user.lastdate}</td>
                                <td>{user.image}</td>
                                
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

export default ManageCampaign;