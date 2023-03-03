import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const ManageStartup = () => {

    const [
        userList, setUserList] = useState([]);

    const getDataFromBackend = async () => {
        // send request 
        const res= await fetch('http://localhost:5000/investor/getall');

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
        const res = await fetch('http://localhost:5000/investor/delete/'+id, {
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
                <h1 className='display-3 fw-bold  text-center' style={{color:"#9c3353"}}>Manage Startup Data</h1>
            </div>
        </header>

        <div className='container mt-4'>

        <table class="table table-striped table-hover">
                <thead >
                    <tr style={{backgroundColor:"#9c3353", color:"white"}}>
                        
                        <th>Investor Name</th>
                        <th>Identity Proof No</th>
                        <th>Identity Proof</th>
                        <th>Date</th>
                        <th>Stage</th>
                        <th>Brief</th>
                        <th>Current Incubatees</th>
                        <th>Graduated Incubatees</th>
                        <th>Funded</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Application Link</th>
                        <th>Center Location</th>
                        <th>Center Location Address</th>
                        <th>Industry</th>
                        <th>Sector</th>
                        <th>DIPPTNumber</th>

                        
                    </tr>
                </thead>
                <tbody style={{backgroundColor:"white"}}>
                    {
                        userList.map( (user) => (
                            <tr >
                                
                                <td>{user.name}</td>
                                <td>{user.identityproofno}</td>
                                <td>{user.identityproof}</td>
                                <td>{user.date}</td>
                                <td>{user.stage}</td>
                                <td>{user.brief}</td>
                                <td>{user.currentincubatees}</td>
                                <td>{user.graduatedincubatees}</td>
                                <td>{user.funded}</td>
                                <td>{user.email}</td>
                                <td>{user.tel}</td>
                                <td>{user.istate}</td>
                                <td>{user.city}</td>
                                <td>{user.aplink}</td>
                                <td>{user.centerlocation}</td>
                                <td>{user.centerlocationaddress}</td>
                                <td>{user.industry}</td>
                                <td>{user.sector}</td>
                                <td>{user.DIPPTNumber}</td>
                                
                                
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

export default ManageStartup;