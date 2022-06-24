import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Featured from "../../components/featured/Featured"
import PropertyList from "../../components/propertyList/PropertyList"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"

import "./home.css"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"


const Home = () => {
  //48:38
  return (
    <div>
        <Navbar />
        <Header />
        <div className="homeContainer"> 
        <Featured/>
        <h1 className="homeTitle">Browse By Property Type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home Guests Love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />

        </div>
    </div>
  )
}

export default Home