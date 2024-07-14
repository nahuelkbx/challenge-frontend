import React from 'react'


import './styles.scss'

import Card from '../card'



function Cards({ items }) {
  return (
    <>
      {items &&
        <div className='cards-container'>
          {items.map((item, i) => {
            return (
              <div key={item.id} className={`card-wrapper ${i === items.length - 1 ? 'last-card' : ''}`}>
                <Card
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  picture={item.picture}
                  condition={item.condition}
                  free_shipping={item.free_shipping}
                />
                <div className='border'/>
              </div>
            )
          })}
        </div>
      }
    </>
  )
}

export default Cards