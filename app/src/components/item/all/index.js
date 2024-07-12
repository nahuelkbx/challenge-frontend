import React from 'react'

import Card from '../card'

function Cards({items}) {
  return (
    <div>
      {items && items.map((item)=> {
        return (
          <Card
          id={item.id}
          key={item.id}
          title={item.title}
          price={item.price}
          picture={item.picture}
          condition={item.condition}
          free_shipping={item.free_shipping}
          />
        )
      })}
    </div>
  )
}

export default Cards