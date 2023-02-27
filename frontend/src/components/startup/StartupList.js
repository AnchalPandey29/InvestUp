import React, { useEffect, useState } from 'react'
import app_config from '../../config';

const StartupList = () => {

    const [startupList, setStartupList] = useState([]);

    const url = app_config.apiurl;

    const fetchData = async () => {
        const res = await fetch(url+'/startup/getall');
        const data = await res.json();
        console.log(data);
        setStartupList(data.result);
    }

    useEffect(() => {
      fetchData();
    }, [])
  return (
    <div>
{
                startupList.map((startup)=>(
                    <div>{startup.name}</div>
                ))
}
    </div>
  )
}

export default StartupList