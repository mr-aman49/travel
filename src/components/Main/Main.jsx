import React from 'react'
import'./main.css'
import img from '../../Assets/img.jpg'
import {HiLocationMarker} from 'react-icons/hi'

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle:'Bora Bora',
    location:'New Zealand',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Bora Bora island will make you feel love at first sight. With ocean views  of turquoise waters resembling an artist’s palette of bright blues and greens, romantics from around the world appreciate Bora Bora .',
  },
{/*
  {
    id:2,
    imgSrc: img2,
    destTitle:'Hawaiian island',
    location:'Maui',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Bora Bora island will make you feel love at first sight. With ocean views  of turquoise waters resembling an artist’s palette of bright blues and greens, romantics from around the world appreciate Bora Bora .',
  },
  {
    id:3,
    imgSrc: img3,
    destTitle:'magnetic City of Light',
    location:'Paris',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'The magnetic City of Light draws visitors from around the globe who come to see iconic attractions like the Eiffel Tower, the Louvre and the Arc de Triomphe. ',
  },
  {
    id:4,
    imgSrc: img4,
    destTitle:'Buckingham Palace',
    location:'London',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'London is a world unto itself. The eclectic neighborhoods, which are home to a blend of historical landmarks and modern-day attractions, can keep you occupied for days.',
  },
  {
    id:5,
    imgSrc: img5,
    destTitle:'Kashmir',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Bora Bora island will make you feel love at first sight. With ocean views  of turquoise waters resembling an artist’s palette of bright blues and greens, romantics from around the world appreciate Bora Bora .',
  },
  {
    id:6,
    imgSrc: img6,
    destTitle:'Eternal City',
    location:'Rome',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'When you visit the Eternal City, prepare to cross a few must-see attractions – including the Colosseum, the Trevi Fountain and the Pantheon – off of your bucket list.',
  },
  {
    id:7,
    imgSrc: img7,
    destTitle:' Arabian and Laccadive seas',
    location:'Maldives',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Bora Bora island will make you feel love at first sight. With ocean views  of turquoise waters resembling an artist’s palette of bright blues and greens, romantics from around the world appreciate Bora Bora .',
  },
  {
    id:8,
    imgSrc: img8,
    destTitle:'Indonesian paradise',
    location:'Bali',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Serene temples and beautiful beaches are the biggest draws to this lush Indonesian paradise. And we do mean lush – the region notoriously soggy wet season is best avoided by planning a visit between April and October',
  },
  {
    id:9,
    imgSrc: img9,
    destTitle:'Uttar Pradesh',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Bora Bora island will make you feel love at first sight. With ocean views  of turquoise waters resembling an artist’s palette of bright blues and greens, romantics from around the world appreciate Bora Bora .',
  },
*/}
]

const Main = () => {
  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 className='title'>
          Most visited destinations
        </h3>
      </div>

      <div className='secContent grid'>
        {
          Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
            return(
              <div key={id} 
              className='singleDestination'>

                  <div  className='imageDiv'>
                    <img src={imgSrc} 
                    alt={destTitle} />
                
                  </div>

                  <div className='cardInfo'>
                    <h4 className='destTitle'>{destTitle}</h4>
                    <span className='continent flex'>
                      <HiLocationMarker className='icon'/>
                      <span className='name'>{location}</span>
                    </span>

                    <div className='fees flex'>
                      <div className="grade">
                        <span><small>+1</small></span>
                      </div>
                    </div>
                  </div>

              </div>

              
            )

          })
        }

      </div>
      
    </section>
  )
}

export default Main
