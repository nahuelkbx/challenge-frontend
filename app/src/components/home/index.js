import React, { useEffect, useState, useCallback } from 'react'

import { useSearchParams } from 'react-router-dom';

import './styles.scss'

import Cards from '../item/all/index'
import Path from '../path/index'
import Loading from '../loading';
import { getItems } from '../../services/item'



function Home() {
    const [searchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);

    const query = searchParams.get('search') || "";

    const fetchItems = useCallback(() => {
        if (query !== '' && items.length === 0) {
            setIsLoading(true);
            getItems(query)
                .then((response) => {
                    setItems(response.items);
                    setCategories(response.categories);
                })
                .catch((err) => {
                    console.error(err);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [query, items.length]);

    useEffect(() => {
        fetchItems();
    }, [fetchItems]);


    return (
        <>
            {isLoading ?
                    <Loading />
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
