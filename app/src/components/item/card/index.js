import React from 'react'

import './styles.scss'

import shipping from '../../../specs/ic_shipping.png'


function Card({ id, title, price, picture, condition, free_shipping }) {


  return (
    <>
      <div className='card-container'>

        <div className='picture-container'>
          <img src={picture} alt='thumbnail' />
        </div>

        <div className='information-container'>
          <div>
            <label className='price'>$ {price.amount}</label>
            {free_shipping ? 
            <div className='shipping-container'><img src={shipping} className='shipping'/></div> 
            : 
            <></>
            }
          </div>

          <label className='title'>{title}</label>
        </div>



      </div>
      <div className='border'></div>
    </>
  )
}

export default Card