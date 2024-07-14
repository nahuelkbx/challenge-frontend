import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';

import './styles.scss'

import  Loading  from '../../loading/index'
import formatPrice from '../../../utils/index'
import { getDetail } from '../../../services/item'


function Detail() {
    const [isLoading, setIsLoading] = useState(false)
    const [state, setState] = useState({
        title: "",
        condition: "",
        description: "",
        picture: "",
        sold_quantity: 0,
        price: {
            currency: "",
            amount: 0,
            decimals: 0,
        },

    })


    let { id } = useParams()


    useEffect(() => {

        if (id !== '' && state.title === '') {
            setIsLoading(true)
            getDetail(id).then((response) => {
                setState({
                    ...state,
                    title: response.detail.title,
                    condition: response.detail.condition,
                    description: response.detail.description,
                    picture: response.detail.picture,
                    sold_quantity: response.detail.sold_quantity,
                    price: {
                        currency: response.detail.price.currency,
                        amount: response.detail.price.amount,
                        decimals: response.detail.price.decimals
                    }
                })
                setIsLoading(false)
            }).catch((error) => {
                console.error(error)
                setIsLoading(false)
            })
        }

    }, [id, state, isLoading])


    const toggleCondition = (condition) => {
        let dictionary = {
            new: "Nuevo",
            used: "Usado"
        }

        return dictionary[condition]
    }

    return (
        <>
            {isLoading ?
                <Loading />
                :
                <div className='main'>
                    {state &&
                        <div className='container'>

                            <div className='information'>
                                <div className='thumbnail-container'>
                                    <img alt='thumbnail' src={state.picture} />
                                </div>

                                <div className='description'>
                                    <label className='title'>Descripción del producto</label>
                                    <p className='paragraph'>{state.description}</p>
                                </div>

                            </div>

                            <div className='detail'>
                                <label className='condition'>{toggleCondition(state.condition)}</label>
                                <label className='title'>{state.title}</label>
                                <label className='price'>{formatPrice(state.price.amount, state.price.currency || 'ARS', 'es-AR')}</label>
                                <button className='buy'>Comprar</button>
                            </div>

                        </div>
                    }

                </div>
            }

        </>
    )
}


export default Detail