import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
          name: "Basic",
          customer_details: subscriptionData.customer_details,
        }
      }),
    });

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
  console.log(sessionid);

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

  return <div>Checkout</div>;
};

export default Checkout;
