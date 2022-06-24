
import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/299414528.jpg?k=9ce3eb08d37d435f5c2c2e1b2443f13fb17dbbc9aa9a3f24f783363ff7d4a90b&o=&hp=1" alt="" className="searchItemImg" />
        <div className="searchItemDesc">
            <h1 className='searchItemTitle'>Tower Street Apartments</h1>
            <span className="searchItemDistance">500m from center</span>
            <span className="searchItemTaxiOption">Free airport taxi</span>
            <span className="searchItemSubtitle">Studio Apartment with Air conditioning</span>
            <span className="searchItemFeatures">Entire studio • 1 bathroom • 21m² 1 full bed</span>
            <span className="searchItemCancelOption">Free Cancellation</span>
            <span className="searchItemCancelOptionSubtitle">You can cancel later, so lock in this great price now!</span>
        </div>

        <div className="searchItemDetails">
            <div className="searchItemRating">
                <span>Excellent</span>
                <button>8.5</button>
            </div>
            <div className="searchItemDetailTexts">
                <span className="searchItemPrice">$100</span>
                <span className="searchItemTaxOptions">Includes taxes and fees</span>
                <button className='searchItemCheckButton'>See Availability</button>
            </div>
        </div>
    </div>
  )
}

//1:30:10

export default SearchItem