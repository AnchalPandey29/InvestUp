import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LoginAuth = ({children}) => {
  
    const [currentStartup, setCurrentStartup] = useState(JSON.parse(sessionStorage.getItem('startup')));
    const [currentInvestor, setCurrentInvestor] = useState(JSON.parse(sessionStorage.getItem('investor')));
    
    if(currentStartup ===null && currentInvestor===null ){
        return children;
    }
    else if(currentInvestor!==null){
        return <Navigate to="/investor/profile" />
    }else if(currentStartup!==null){
        return <Navigate to="/startup/register" />
    }
}

export default LoginAuth;