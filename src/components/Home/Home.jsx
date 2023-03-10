import React from 'react'
import'./home.css'
import video from '../../Assets/2.mp4'
import{GrLocation} from 'react-icons/gr'
import{HiFilter} from 'react-icons/hi'
import{FiFacebook} from 'react-icons/fi'
import{AiFillInstagram} from 'react-icons/ai'
import{SiTripadvisor} from 'react-icons/si'
import{BsListUl} from 'react-icons/bs'
import{TbApps} from 'react-icons/tb'

const Home = () => {
  return (
    <section className='home'>
      <div className='overlay'></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className='homeContent container'>
        <div className='textDiv'>
          <span className='smallText'>
            Our packages
          </span>
          <h1 className='homeTitle'>
            Search your Holiday
          </h1>
        </div>

        <div className='cardDiv grid'>

        <div className='destinationInput'>
            <label htmlFor="city">Search your destination:</label>
            <div className='input flex'>
              <input type="text" placeholder='Enter name here....' />
              <GrLocation className=''/>
            </div>
          </div>

        <div className='dateInput'>
            <label htmlFor="date">Enter your date:</label>
            <div className='input flex'>
              <input type="date"  />
              
            </div>
          </div>
          
          <div className='priceInput'>
            <div className='label_total flex'>
              <label htmlFor="price">Max price:</label>
              <h3 className='total'>$5000</h3>
            </div>
            <div className='input flex'>
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          <div className='searchOptions flex'>
            <HiFilter className='icon'/>
            <span>More Filter</span>
          </div>
        </div>

        <div className='homeFooterIcons flex'>
          <div className='rightIcons'>
            <FiFacebook className='icons'/>
            <AiFillInstagram className='icons'/>
            <SiTripadvisor className='icons'/>

          </div>

          <div className='leftIcons'>
          <BsListUl className='icons'/>
          <TbApps className='icons'/>
            
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home
