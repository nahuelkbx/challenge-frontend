import React, { useEffect, useState } from 'react'

import './styles.scss'

import axios from 'axios'

import { useParams } from 'react-router-dom';

function Detail() {
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

    const BACKEND_HOST = process.env.REACT_APP_API_URL;

    let { id } = useParams()

    const getDetail = () => {
        axios.get(`${BACKEND_HOST}/api/items/${id}`)
            .then((response) => {
                setState({
                    ...state,
                    title: response.data.item.title,
                    condition: response.data.item.condition,
                    description: response.data.item.description,
                    picture: response.data.item.picture,
                    sold_quantity: response.data.item.sold_quantity,
                    price: {
                        currency: response.data.item.price.currency,
                        amount: response.data.item.price.amount,
                        decimals: response.data.item.price.decimals
                    }
                })
            })
            .catch((error) => {
                return error
            })
    }

    useEffect(() => {

        if (id !== '') {
            getDetail(id)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])


    const toggleCondition = (condition) => {
        let dictionary = {
            new: "Nuevo",
            used: "Usado"
        }

        return dictionary[condition]
    }
    
        return (
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
                            <label className='price'>$ {state.price.amount}</label>
                            <button className='buy'>Comprar</button>
                        </div>

                    </div>
                }

            </div>
        )
    }


export default Detail