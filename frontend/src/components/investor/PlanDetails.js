import React, { useEffect, useState } from 'react'
import app_config from '../../config';

const PlanDetails = () => {

    const [planData, setPlanData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('investor')));

    const url = app_config.apiurl;

    useEffect(() => {
        getPlanDetails();
    }, [])


    const getPlanDetails = async () => {
        setLoading(true);
        const res = await fetch(url + '/Subscription/getbyuser/' + currentUser._id);
        console.log(res.status);
        if (res.status === 201) {
            const data = await res.json();
            setPlanData(data.result);
            setLoading(false);
        }
    }

    return (
        <div>
            {!loading ?
                <div>
                    {
                        planData ? (
                            <div>
                                <h1 className='text-center'>You have a plan Subscription</h1>
                                <h3>Plan Name : {planData.data.name}</h3>
                            </div>
                        ) :
                            (
                                <h1 className='text-center'>You don't have a plan Subscription</h1>

                            )
                    }

                </div> : (<p>Loading...</p>)}
        </div>
    )
}

export default PlanDetails