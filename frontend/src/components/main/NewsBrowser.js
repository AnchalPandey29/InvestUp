import React, { useEffect } from 'react'
import { useState } from 'react';
import app_config from '../../config'

const NewsBrowser = () => {

    const [newsList, setNewsList] = useState([]);

    const url = app_config.apiurl;

    const fetchData = async () => {
        const res = await fetch(url+'/News/getall');
        const data = await res.json();
        console.log(data);
        
    }

    useEffect(() => {
      fetchData();
    }, [])

   
  return (
    <div> userList.map( (user) => (
        <tr >
            
            <td>{user.id}</td>
            <td>{user.date}</td>
            <td>{user.heading}</td>
            <td>{user.content}</td>
            <td>{user.image}</td>
            
            <td>
                <button className='btn btn-dark' style={{backgroundColor:"#9c3353"}} onClick={() => deleteUser(user._id)}> <i style={{color:"white"}} class="fas fa-trash"></i></button>
            </td>
        </tr>
    ))

    </div>
  )
}

export default NewsBrowser