import React,{useState} from 'react'
import Location from '../SvgIcons/Location';
import Search from '../SvgIcons/Search';

function SearchBar() {
    const [searchValue,setSearchValue] = useState("");

    return (
        <div className="search-container  margin-top">
            <Location className="location" />
             <input className="search-input" type="text" value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} placeholder="Enter Hotel or Destination name" />
             <div className="search-circle-container">
                <Search className="search" />
             </div>
        </div>
    )
}

export default SearchBar
