import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const ManageStartup = () => {

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
                <h1 className='display-3 fw-bold  text-center' style={{color:"#9c3353"}}>Manage Startup Data</h1>
            </div>
        </header>

        <div className='container mt-4'>

        <table class="table table-striped table-hover">
                <thead >
                    <tr style={{backgroundColor:"#9c3353", color:"white"}}>
                         <th></th>
                         <th>StartupImage</th>
                        <th>StartupName</th>
                        <th>Created_At</th>
                        <th>Type</th>
                        <th>Stage</th>
                        <th>Brief</th>
                        <th>Documents</th>
                        <th>Ownername</th>
                        <th>IdentityProof</th>
                        <th>IdentityNo</th>
                        <th>OwnerContact</th>
                        <th>OwnerEmail</th>
                        <th>TeamMembers</th>
                        <th>Document</th>
                        <th>ProductImage</th>
                        <th>ProductName</th>
                        <th>ProductDescription</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>ContactNumber</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Website</th>
                        <th>App</th>
                        <th>Industry</th>
                        <th>Sector</th>
                        <th>Interests</th>
                        
                        
                    
                      
                        
                    </tr>
                </thead>
                <tbody style={{backgroundColor:"white"}}>
                    {
                        userList.map( (user) => (
                            <tr >
                        <td>user.startupimage</td>
                        <td>user.startupname</td>
                        <td>user.created_at</td>
                        <td>user.type</td>
                        <td>user.stage</td>
                        <td>user.brief</td>
                        <td>user.sdocuments</td>
                        <td>user.ownername</td>
                        <td>user.identityproof</td>
                        <td>user.identityNo</td>
                        <td>user.ownercontact</td>
                        <td>user.owneremail</td>
                        <td>user.teammembers</td>
                        <td>user.documents</td>
                        <td>user.productimage</td>
                        <td>user.productname</td>
                        <td>user.productdescription</td>
                        <td>user.email</td>
                        <td>user.password</td>
                        <td>user.tel</td>
                        <td>user.state</td>
                        <td>user.city</td>
                        <td>user.website</td>
                        <td>user.app</td>
                        <td>user.industry</td>
                        <td>user.sector</td>
                        <td>user.interests</td>
                        
                                
                                
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