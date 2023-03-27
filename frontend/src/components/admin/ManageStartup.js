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
                         
                         <th>Role</th>
                        <th>Password</th>

                        <th>Startup Image</th>
                        <th>Startup Name</th>
                        <th>Created_At</th>
                        <th>Type</th>
                        <th>Stage</th>
                        <th>Brief</th>
                        <th> Startup Documents</th>
                        <th>Owner Avatar</th>
                        <th>Owner Name</th>
                        <th>Identity Proof</th>
                        <th>Identity No</th>
                        <th>Owner Document</th>
                        <th>Owner Contact</th>
                        <th>Owner Email</th>
                        <th>Team Menber No</th>
                        <th>Team Members</th>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Product Description</th>
                        <th>Startup Email</th>
                        <th>Startup Contact</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Website</th>
                        <th>App</th>
                        <th>Industry</th>
                        <th>Sector</th>
                        <th>Interests</th>
                        <th> UdyogAadhar</th>
                        <th>  InvestorAvatar</th>
                        <th> IdentityProofNo</th>
                        <th> Date</th>
                        <th>Interests</th>
                        <th> CurrentIncubatees </th>
                        <th>  GraduatedIncubatees</th>
                        <th>  Funded </th>
                        
                        <th>  Application Link </th>
                        <th>  CenterLocation </th>
                        <th>CenterLoactionAddress</th>
                        <th>DIPPTNumber</th>



                        
                        



                    
                        


                        <th></th>
                        
                        
                    
                      
                        
                    </tr>
                </thead>
                <tbody style={{backgroundColor:"white"}}>
                    {
                        userList.map( (user) => (
                            <tr >
                        <td>{user.role}</td>
                        <td>{user.password}</td>
                        <td>{user.startupname}</td>
                         <td>{user.startupimage}</td>
                        <td>{user.created_at}</td>
                        <td>{user.type}</td>
                        <td>{user.stage}</td>
                        <td>{user.brief}</td>
                        <td>{user.sdocuments}</td>
                        <td>{user.owneravatar}</td>
                        <td>{user.ownername}</td>
                       
                        <td>{user.identityproof}</td>
                        <td>{user.identityNo}</td>
                        <td>{user.documents}</td>
                        <td>{user.ownercontact}</td>
                        <td>{user.owneremail}</td>
                        <td>{user.teammemberno}</td>
                        <td>{user.teammembers}</td> <td>{user.productimage}</td>
                        <td>{user.productname}</td>
                        <td>{user.productdescription}</td>
                        <td>{user.semail}</td>
                        <td>{user.tel}</td>
                       
                        <td>{user.city}</td>
                        <td>{user.website}</td>
                        <td>{user.app}</td>
                        <td>{user.industry}</td>
                        <td>{user.interests}</td> 
                        <td>{user.sector}</td>
                        <td>{user.aadhar}</td>
                        <td>{user.investoravatar}</td>
                        <td>{user.identityproofno}</td>
                        <td>{user.date}</td>
                        <td>{user.select1}</td>

                        <td>{user.currentincubatees}</td>
                        <td>{user.graduatedincubatees}</td>
                        <td>{user.funded}</td>
                        <td>{user. istate}</td>
                        <td>{user. aplink}</td>
                        <td>{user. centerlocation }</td>
                        <td>{user. centerloactionaddress }</td>
                        <td>{user.  DIPPTNumber}</td>

                        

                        


                        
                        <td></td>
                        
                                
                                
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