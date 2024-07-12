import React, { useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom';
import axios from 'axios'

import Cards from '../item/all/index'



function Home() {
    const [searchParams, _setSearchParams] = useSearchParams();
    const [state, setState] = useState({
        items: [],
        categories: []
    })

    const query = searchParams.get('search' || "")

    const BACKEND_HOST = process.env.REACT_APP_API_URL;



    const getItems = (query) => {
        axios.get(`${BACKEND_HOST}/api/items?q=${query}`).then((response) => {
            setState({
                ...state,
                items: response.data.items,
                categories: response.data.categories
            })
        })
        .catch((error)=> {
            console.log(error)
        })

    }

    useEffect(() => {
        if (query !== '') {
            getItems(query)
        }

    }, [query])


    return (
        <div id='home'>
            {state.items.length && 
                <Cards items={state.items}/>
            }
        </div>
    )
}

export default Home
