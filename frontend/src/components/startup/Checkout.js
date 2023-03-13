import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import app_config from '../../config';
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const Checkout = () => {

  const url = app_config.apiurl;
  // CHECKOUT_SESSION_ID
  const {sessionid} = useParams();
    console.log(sessionid);

    const getPaymentDetails = async () => {
      const response = await fetch(`${url}/util/getpaymentdetails/${sessionid}`);
      console.log(response.status);
      // if(res)
      const data = await response.json();
      console.log(data);
    }

    useEffect(() => {
      getPaymentDetails();
    }, [])
    

  return (
    <div>Checkout</div>
  )
}

export default Checkout;