import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Auth = ({children}) => {
  
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    const [startup, setStartup] = useState(JSON.parse(sessionStorage.getItem('startup')));
    const [investor, setInvestor] = useState(JSON.parse(sessionStorage.getItem('investor')));


    if(currentUser!==null || startup!==null || investor!=null){
        return children;
    }
    else{
        Swal.fire({
            icon: 'error',
            title : 'Error',
            text: 'Please Login First!!',
        })
        return <Navigate to="/main/login" />
    }
}

export default Auth;