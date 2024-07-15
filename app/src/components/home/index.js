import React from 'react'

import { useSearchParams } from 'react-router-dom';

import './styles.scss'

import Cards from '../item/all/index'
import Path from '../path/index'
import Loading from '../loading';
import Error from '../error';

import { useFetch } from '../../hooks/useFetch';
import { getItems } from '../../services/item'



function Home() {
    const [searchParams] = useSearchParams();

    const query = searchParams.get('search') || "";
    const [data, isLoading = false, error = false] = useFetch(getItems, query);

    if (isLoading) return <Loading />;
    if (error) return <Error message={error.message} status={error.status} />;

    const items = data.items
    const categories = data.categories

    if (!items.length) return <Error message="Productos no encontrados" status={404} />;

    return (
        <>

            <div id='home' className='home-container'>
                <Path categories={categories} />
                <Cards items={items} />
            </div>

        </>
    )
}

export default Home
