import {useState} from 'react';

import RestaurantList from "./RestaurantList";
import SearchComponent from "./SearchComponent";
import { restaurantList } from '../../utils/data';

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);
    const [searchInput, setSearchInput] = useState("");
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(listOfRestaurants); 

    const handleSearchInputChange = (event) => {
        const searchInputValue = event.target.value;
        setSearchInput(searchInputValue);
    }

    const getFilteredListOfRestaurants = () => {
        return listOfRestaurants.filter(restaurant => {
            const {info} = restaurant;
            const {name, cuisines} = info;
            return (name.includes(searchInput) || cuisines.includes(searchInput));
        });
    } 

    const handleSearch = () => {
        if (searchInput === "") {
            setFilteredListOfRestaurants(listOfRestaurants);
        } else {
            const filteredListOfRestaurants = getFilteredListOfRestaurants();
            setFilteredListOfRestaurants(filteredListOfRestaurants);
        }
    }


    return (
        <div id="body-container">
            <SearchComponent 
                searchInput={searchInput}
                handleSearchInputChange={handleSearchInputChange}
                handleSearch={handleSearch}
            />
            <RestaurantList restaurantList={filteredListOfRestaurants} />
        </div>
    )
}

export default Body;