import React from 'react'
import './SeccionMovie.css'
const SeccionMovie = ({movies, title}) => {
  
  return (
    <div className="seccion">
      <span>{title}</span>
      <div className='seccion-container'>

        {/* {
          movies.map((movie) => {
            <img src={movie.url} alt="" />
          })
        } */}
        
      </div>
    </div>
  )
}

export default SeccionMovie
