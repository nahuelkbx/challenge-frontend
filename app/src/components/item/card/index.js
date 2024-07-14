import React from 'react'

import './styles.scss'

import shipping from '../../../specs/ic_shipping.png'

import { Link } from 'react-router-dom'




function Card({ id, title, price, picture, free_shipping }) {


  return (
    <>
      <Link
        className='card-link'
        to={{ pathname: `/items/${id}`, categories: ['Hola'] }}
        key={id}
      >
        <div className='card-container'>

          <div className='picture-container'>
            <img src={picture} alt='thumbnail' />
          </div>

          <div className='information-container'>
            <div>
              <label className='price'>$ {price.amount}</label>
              {free_shipping ?
                <div className='shipping-container'><img src={shipping} className='shipping' alt='shippingLogo' /></div>
                :
                <></>
              }
            </div>

            <label className='title'>{title}</label>
          </div>



        </div>
        <div className='border'></div>
        </Link>
      </>

      )
}

      export default Card