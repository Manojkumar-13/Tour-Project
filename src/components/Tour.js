import { toHaveAttribute } from '@testing-library/jest-dom/dist/matchers'
import React, {useState} from 'react'


const Tour = ({id,image,info,name,price}) => {
  return (
    <article className='singleTour'>
      <img src={image} alt={name} />
      <footer className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>₹{price}</h4>
        <p>{info}</p>
        <button className='btn-delete' type='button'> Not Interested</button>
      </footer>
    </article>
  )
}

export default Tour