import React from 'react'

import './styles.scss'


function Path({categories}) {
  return (
    <div className='path-container'>
        {categories.map((category, i)=> {
            return (
                <label className='path' key={i}>{category.path}</label>
            )
        })}
    </div>
  )
}

export default Path
