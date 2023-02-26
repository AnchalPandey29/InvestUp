import React, { useEffect } from 'react'
import { useState } from 'react';
import app_config from '../../config'

const NewsBrowser = () => {

    const [newsList, setNewsList] = useState([]);

    const url = app_config.apiurl;

    const fetchData = async () => {
        const res = await fetch(url + '/News/getall');
        const data = await res.json();
        console.log(data);
        setNewsList(data.result);

    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div>
            {
                newsList.map((news) => (
                    <div>{news.heading}</div>
                ))
            }

        </div>
    )
}

export default NewsBrowser