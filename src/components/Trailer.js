import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

const Trailer = ({list}) => {
    const params= useParams()
    const movie = list.find(el => el.id==params.id)

  return (
    <div className='trailer'>
    {movie.title}
    <br/>
    {movie.TrailerUrl}
     {movie.description}
     <iframe width="640" height="360" src={movie.TrailerURL} title="TROLL | Official Trailer | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    
  )
}

export default Trailer
