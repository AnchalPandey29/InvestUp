import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const ManageNews = () => {

    const [userList, setUserList] = useState([]);

    const getDataFromBackend = async () => {
        // send request 
        const res= await fetch('http://localhost:5000/News/getall');

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
        const res = await fetch('http://localhost:5000/News/delete/'+id, {
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
                <h1 className='display-3 fw-bold text-dark text-center'>Manage News Data</h1>
            </div>
        </header>

        <div className='container mt-4'>

            <table className='table' style={{backgroundColor:"#9c3353", color:"white"}}>
                <thead>
                    <tr>
                        
                        <th>ID</th>
                        <th>DATE</th>
                        <th>HEADING</th>
                        <th>CONTENT</th>
                        <th>IMAGE</th>
                        <th>DELETE</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.map( (user) => (
                            <tr>
                                
                                <td>{user.id}</td>
                                <td>{user.date}</td>
                                <td>{user.heading}</td>
                                <td>{user.content}</td>
                                <td>{user.image}</td>
                                
                                <td>
                                    <button className='btn btn-dark' style={{backgroundColor:"#f0efef"}} onClick={() => deleteUser(user._id)}> <i style={{color:"black"}} class="fas fa-trash"></i></button>
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

export default ManageNews;