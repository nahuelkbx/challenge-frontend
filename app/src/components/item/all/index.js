import React from 'react'


import './styles.scss'

import Card from '../card'



function Cards({ items }) {
  return (
    <>
      {items &&
        <div className='cards-container'>
          {items.map((item) => {
            return (
              <>
                <Card
                  id={item.id}
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  picture={item.picture}
                  condition={item.condition}
                  free_shipping={item.free_shipping}
                />
                <div className='border'></div>
              </>
            )
          })}
        </div>
      }
    </>
  )
}

export default Cards