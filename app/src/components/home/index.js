import React, { useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom';

import './styles.scss'

import Cards from '../item/all/index'
import Path from '../path/index'
import Loading from '../loading';
import { getItems } from '../../services/item'



function Home() {
    const [searchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false)
    const [state, setState] = useState({
        items: [],
        categories: []
    })

    const query = searchParams.get('search' || "")

    useEffect(() => {
        if (query !== '') {
            setIsLoading(true)
            getItems(query).then((response) => {
                setState({
                    ...state,
                    items: response.items,
                    categories: response.categories
                })
                setIsLoading(false)
            }).catch((err) => {
                console.error(err)
                setIsLoading(false)
            })


        }
    }, [query])


    return (
        <>
            {isLoading ?
                <Loading />
                :
                <div id='home' className='home-container'>
                    {state.categories &&
                        <Path categories={state.categories} />
                    }
                    {state.items &&
                        <Cards items={state.items} />
                    }
                </div>
            }

        </>
    )
}

export default Home
