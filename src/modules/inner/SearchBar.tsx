
import { Search } from 'react-bootstrap-icons';

export default function SearchBar() {
    return (<div className="searchbar">
        <div className="roundedtest">
            <div className="section1">
                <p className='where'>Where</p>
                <p className="search-destinations">Search destinations</p>
            </div>
            <div className="section2">
                <p className='checkin'>Checkin</p>
                <p className="add-dates">Add dates</p>
            </div>
            <div className="section3">
                <p className='checkout'>Checkout</p>
                <p className="add-dates">Add dates</p>
            </div>
            <div className="section4">
                <div className="section4-wrapper">
                    <div className="who-details">
                        <p className='who'>Who</p>
                        <p className="add-guests">Add Guests</p>
                    </div>
                    <div className="search-button">
                        <button className="search-button-rounded"><Search /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}