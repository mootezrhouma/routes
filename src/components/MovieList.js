import React from 'react'
import Cardmovie from './Cardmovie'

const Movielist = ({list}) => {
  return (
    <div className='cardmov'>
        {list.map(elm => <Cardmovie elm = {elm}/> )}
    </div>
  )
}

export default Movielist