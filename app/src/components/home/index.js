import React, { useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom';
import axios from 'axios'

import './styles.scss'

import Cards from '../item/all/index'
import Path from '../path/index'



function Home() {
    const [searchParams] = useSearchParams();
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
            .catch((error) => {
                return error
            })

    }

    useEffect(() => {
        if (query !== '') {
            getItems(query)
        }


    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])


    return (
        <>
        <div id='home' className='home-container'>
            {state.categories &&
                <Path categories={state.categories} />
            }
            {state.items &&
                <Cards items={state.items} />
            }
        </div>
        </>
    )
}

export default Home
