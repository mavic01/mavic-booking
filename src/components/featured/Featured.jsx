
import './featured.css'

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img className='featuredImg' src="https://www.sarajohn.org/wp-content/uploads/2017/01/sharaton.jpg" alt="hotel" />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>234 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src="http://media.cntraveler.com/photos/5618087db52105b4334b80d6/master/pass/hotel-vermont-pattio.jpg" alt="hotel" />
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h2>434 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src="https://www.tourismupdate.co.za/sites/default/files/images/article/202103/houghtonhotel.jpg" alt="hotel" />
            <div className="featuredTitles">
                <h1>Abuja</h1>
                <h2>334 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured