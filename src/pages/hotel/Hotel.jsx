
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import './hotel.css'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { useState } from 'react'

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [openSlider, setOpenSlider] = useState(false)
  const handleOpenSlider = (index) => {
    setSlideNumber(index)
    setOpenSlider(true)
  }
  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l"){
      // newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1 --- breakable if the array increases
      newSlideNumber = slideNumber === 0 ? photos.length - 1 : slideNumber - 1
    }else {
      // newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1 --- breakable
      newSlideNumber = slideNumber === photos.length - 1 ? 0 : slideNumber + 1
    }
    setSlideNumber(newSlideNumber)
    // if (direction === 'r') { -------------- mine
    //   newSlideNumber = slideNumber + 1
    //   setSlideNumber(newSlideNumber)
    // }
  }
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/300007563.jpg?k=8dd178f41d5b4ed7221026fbaf43c404bcc2bfa3c645e0060cfaf9d354af0101&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/300013390.jpg?k=f3cf78afd48420e399ca07bd51024d1152c757b87b52ba012482f4e3e31b878e&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/299811847.jpg?k=f0a0957424da7ba18cd93063de0213003ff06d230d653fda81ad7e3f8fc4dc5e&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/299811326.jpg?k=a42f49d349283197bd22386ebdd4405cb291d94b3e9c0331a169fad297b6e714&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/300008290.jpg?k=c5afa577398319eb5bbd2df4c908ef2582dc336aff614765054a96585dd84ce8&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/299811259.jpg?k=2bee4aaa00d8d191c6318d076ca9e154d124eb5d5191109ddeae5f8860ff5d72&o=&hp=1"
    },
  ]
  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="hotelContainer">
        {openSlider && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} onClick={() => setOpenSlider(false)} className="close"/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove('l')}/> {/*onClick={() => handleMove()} is written this ways cos its gonna take a parameter*/}
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove('r')}/>
        </div>}

        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>

          <h1 className="hotelTitle">Grand Hotel</h1>

          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>12 Kadiri street Ogba, Lagos.</span>
          </div>
          
          <span className="hotelDistance">
            Excellent location - 115m from center
          </span>

          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>

          <div className="hotelImages">
            {photos.map((photo, index) => (
              <div className="hotelImageWrapper">
                <img onClick={() => handleOpenSlider(index)} src={photo.src} alt="hotelImg" className='hotelImg'/>
              </div>
            ))}
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Lagos</h1>
              <p className="hotelDesc">
                Offering an outdoor pool and a restaurant, Sheraton Lagos Hotel is located in Lagos. Free WiFi access is available. Each room here will provide you with a TV, air conditioning and a seating area. Complete with a refrigerator, the dining area also has an electric kettle and a coffee machine. Featuring a shower, private bathroom also comes with a hairdryer and free toiletries. At Sheraton Lagos Hotel you will find a tennis court and a fitness center. Other facilities offered at the property include meeting facilities, a shared lounge and shops (on site). The property offers free parking. Couples in particular like the location.
                Sheraton Lagos Hotel has been welcoming Booking.com guests since Jun 23, 2014. Hotel chain/brand: Sheraton
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>Located in the heart of Lagos. This property has an excellent rating of 8.1!</span>
              <h2><b>$900</b>(9 nights)</h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
          
          <MailList />
          <Footer />
          
        </div>
      </div>
    </div>
  )
}


export default Hotel