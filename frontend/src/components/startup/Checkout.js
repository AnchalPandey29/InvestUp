import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const Checkout = () => {

  const [currentStartup, setCurrentStartup] = useState(JSON.parse(sessionStorage.getItem('startup')));
  const [currentInvestor, setCurrentInvestor] = useState(JSON.parse(sessionStorage.getItem('investor')));
  const [currentUser, setCurrentUser] = useState(currentStartup?currentStartup:currentInvestor);
  const url = app_config.apiurl;
  const navigate = useNavigate();
  // CHECKOUT_SESSION_ID

 
  const addSubscription = async (subscriptionData) => {
    // Store subscriptionData in LocalStorage
    let plan = JSON.parse(localStorage.getItem('planDetails'));
    console.log(plan);
  
    const today = new Date();
    const res = await fetch(`${url}/Subscription/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: currentUser._id,
        startDate: today,
        endDate: new Date(today.setMonth(today.getMonth() + 1)),
        duration: "1 Month",
        data: {
          plan,
          customer_details: subscriptionData.customer_details,
        }
      }),
    });

    // localStorage.removeItem('planDetails');
  
    if (res.status === 201) {
      
      Swal.fire({
        icon: "success",
        title: "Subscribed",
        text: "Purchase Successful",
      });
      // navigate("/startup/dashboard");
  
      const data = await res.json();
    }
  };
  
 

  const { sessionid } = useParams();
  const subscriptionData = JSON.parse(localStorage.getItem('subscriptionData'));

console.log(sessionid);
console.log(subscriptionData);


  const getPaymentDetails = async () => {
    const response = await fetch(`${url}/util/getpaymentdetails/${sessionid}`);
    console.log(response.status);
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      if (data.payment_status === "paid") {
        addSubscription(data);
      }
    }
  };

  useEffect(() => {
    getPaymentDetails();
  }, []);

  return <div className="mx-auto" style={{height:"80vh"}}>  
  
    <div className="mt-5" >
    <img style={{height:"200px",marginLeft:"50px"}} src="https://www.lappymaker.com/images/greentick-unscreen.gif" alt="" />  
    </div>
    <div >
    <h2 className="text-center" style={{color:"#9c3353"}}>Thanks for your payment</h2>
    <p className="text-center">Your payment is done successfully</p>

    </div>
    <div className="row">
  
  <Link className="btn mx-auto mt-5" style={{background:"#9c3353",color:"white",width:"fit-content"}} to="/main/home">Back to Home</Link>
</div>
  </div>;
};

export default Checkout;
