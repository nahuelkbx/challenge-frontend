import React from 'react'

import { useParams } from 'react-router-dom';

import './styles.scss'

import Loading from '../../loading/index'
import Error from '../../error/index';
import Path from '../../path/index'

import formatPrice from '../../../utils/index'
import { useFetch } from '../../../hooks/useFetch';
import { getDetail } from '../../../services/item';



function Detail() {
    const { id } = useParams();
    const [item = {}, isLoading = false, error = false] = useFetch(getDetail, id);

    if (isLoading) return <Loading />;
    if (error) return <Error message={error.message} status={error.status} />;


    const { title, condition, description, picture, price } = item.detail
    const  categories  = item.categories

    if (!title) return <Error message="Producto no encontrado" status={404} />;


    const toggleCondition = (condition) => {
        let dictionary = {
            new: "Nuevo",
            used: "Usado"
        }

        return dictionary[condition]
    }

    return (
        <div className="main">
            <Path categories={categories}/>
            <div className="container">
                <div className="information">
                    <div className="thumbnail-container">
                        <img alt={title} src={picture} />
                    </div>
                    <div className="description">
                        <h2 className="title">Descripción del producto</h2>
                        <p className="paragraph">{description}</p>
                    </div>
                </div>
                <div className="detail">
                    <span className="condition">{toggleCondition(condition)}</span>
                    <h1 className="title">{title}</h1>
                    <span className="price">{`${formatPrice(price.amount, price.currency, 'es-AR')}`}</span>
                    <button className="buy">Comprar</button>
                </div>
            </div>
        </div>
    )
}


export default Detail
