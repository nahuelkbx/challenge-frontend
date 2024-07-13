import React from 'react'

import {Link} from 'react-router-dom'

import './styles.scss'

import Card from '../card'



function Cards({items}) {
  return (
    <div className='cards-container'>
      {items && items.map((item)=> {
        return (
          <Link className='card-link' to={`/items/${item.id}`}>
          <Card
          id={item.id}
          key={item.id}
          title={item.title}
          price={item.price}
          picture={item.picture}
          condition={item.condition}
          free_shipping={item.free_shipping}
          />
          </Link>
        )
      })}
    </div>
  )
}

export default Cards