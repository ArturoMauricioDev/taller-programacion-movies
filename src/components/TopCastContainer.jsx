import React from 'react'
import { ActorCard } from './ActorCard'
import './TopCastContainer.css'

export const TopCastContainer = ({pelis}) => {
  const actors = pelis.Actors ? pelis.Actors.split(", ") : [];
  return (
    <section className="top-cast-container">
        <h6>TopCastContainer</h6>

        <div className="cards-container">
        {
              actors.map((actor, index)=>{
                return <ActorCard actor={actor} key={index}/>
              })
              
            }
            
        </div>
    </section>
  )
}
