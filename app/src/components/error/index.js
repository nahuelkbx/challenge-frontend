import React from 'react'

import './styles.scss'

function Error({message, status}) {
  return (
    <div className='error-container'>
        <h1>{message}</h1>
        {status ? <label>Código de error: {status}</label> : ""}
    </div>
  )
}

export default Error
