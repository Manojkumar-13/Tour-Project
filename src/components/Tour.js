import React,{useState} from 'react'


const Tour = ({id,image,info,name,price,deleteTour}) => {
  const [readMore,setReadMore]=useState(false)
  return (
    <article className='singleTour'>
      <img src={image} alt={name} />
      <footer className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>₹{price}</h4>
        <p>{readMore? info : `${info.substring(0,200)}...`}
        <button className='btn-read' onClick={()=> setReadMore(!readMore)}>{readMore? `show less`:`read more`}</button>
        </p>
        <button className='btn' type='button' onClick={()=>deleteTour(id)}> Not Interested</button>
      </footer>
    </article>
  )
}

export default Tour