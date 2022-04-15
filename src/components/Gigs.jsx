import React from 'react'
import Box from './Box'
import Drum from '../images/drum.jpg'
import Studio from '../images/studio.jpg'

const Gigs = () => {
  return (
    <div id="services">
      <div className="line"></div>
      
        <div className="s-heading">
          <h1>Gigs</h1>
          <p>Here you will find our upcoming ministrations and performances</p>
        </div>

        <div className="b-container">
            <Box image={Drum} alte="image1" button="Read more" />
            <Box image={Studio} alte="image2" button="Read more" />
        </div>

    </div>
  )
}

export default Gigs