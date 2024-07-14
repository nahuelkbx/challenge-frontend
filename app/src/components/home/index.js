import React, { useEffect, useState, useCallback } from 'react'

import { useSearchParams } from 'react-router-dom';

import './styles.scss'

import Cards from '../item/all/index'
import Path from '../path/index'
import Loading from '../loading';
import Error from '../error';
import { getItems } from '../../services/item'



function Home() {
    const [searchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState({
        fail: false,
        message: "",
        status: 0
    })

    const query = searchParams.get('search') || "";

    const fetchItems = useCallback(() => {
        if (query !== '' && items.length === 0) {
            setIsLoading(true);
            getItems(query)
                .then((response) => {
                    if (response.items) {
                        setItems(response.items);
                        setCategories(response.categories);
                        return
                    }
                    return setError({
                        ...error,
                        fail: true,
                        message: `No se encontraron resultados para ${query}, intenta nuevamente ajustando tu busqueda`,
                        status: 404
                    })

                })
                .catch(() => {
                    return setError({
                        ...error,
                        fail: true,
                        message: "Ops, parece que hubo un problema, intenta nuevamente",
                        status: 500
                        
                    })
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [query, items?.length]);

    useEffect(() => {
        fetchItems();
    }, [fetchItems]);



    return (
        <>
            {isLoading &&
                <Loading />
            }

            {error.fail ?
                <Error message={error.message} status={error.status} />
                :
                <div id='home' className='home-container'>
                    {categories &&
                        <Path categories={categories} />
                    }
                    {items &&
                        <Cards items={items} />
                    }
                </div>
            }
        </>
    )
}

export default Home
