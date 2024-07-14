import React from 'react'

import './styles.scss'

import shipping from '../../../specs/ic_shipping@2x.png'

import { Link } from 'react-router-dom'




function Card({ id, title, price, picture, free_shipping }) {


  return (
    <>
      <Link
        className='card-link'
        to={{ pathname: `/items/${id}` }}
        key={id}
      >
        <div className='card-container'>

          <div className='picture-container'>
            <img src={picture} alt='thumbnail' />
          </div>

          <div className='information-container'>
            <div className='information'>
              <label className='price'>$ {price.amount}</label>
              {free_shipping ?
                <div className='shipping-container'>
                  <img src={shipping} className='shipping' alt='shippingLogo' />
                </div>
                :
                <></>
              }
            </div>

            <label className='title'>{title}</label>
          </div>



        </div>
      </Link>
    </>

  )
}

export default Card