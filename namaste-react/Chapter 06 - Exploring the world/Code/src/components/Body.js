import {useState, useEffect} from 'react';

import RestaurantList from "./RestaurantList";
import SearchComponent from "./SearchComponent";
import { API_STATUS_CONSTANTS } from '../../utils/constants';
import { FOOD_FETCH_URL } from '../../config';
import NoResultsFoundView from './NoResultsFoundView';
import RestaurantListShimmer from './RestaurantListShimmer';

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]); 
    const [apiStatus, setApiStatus] = useState("");
    const [apiResponseData, setApiResponseData] = useState({});
    console.log(useState());
    const fetchRestaurantsList = async () => {
        setApiStatus(API_STATUS_CONSTANTS.IN_PROGRESS);
        try {
            const response = await fetch(
                    FOOD_FETCH_URL
                );
            const responseData = await response.json();
            console.log(responseData);
            const parentCards = responseData?.data?.cards;
            console.log(parentCards);
            const topBrandsParentCard = parentCards.filter(card => card?.card?.card?.id === "restaurant_grid_listing");
            const restaurantList = topBrandsParentCard[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            console.log(restaurantList);

            setApiResponseData(responseData);
            setListOfRestaurants(restaurantList);
            setFilteredListOfRestaurants(restaurantList);
            setApiStatus(API_STATUS_CONSTANTS.SUCCESS);
        } catch(error) {
            setApiStatus(API_STATUS_CONSTANTS.FAILED);
        }
    }

    const fetchMoreRestaurantsData = async () => {
        setApiStatus(API_STATUS_CONSTANTS.IN_PROGRESS);
        try {
            const response = await fetch(
                FOOD_FETCH_URL,
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "lat": "17.25310",
                        "lng": "80.14210",
                        "nextOffset": apiResponseData?.data?.pageOffset?.nextOffset,
                        "_csrf": `${apiResponseData.csrfToken}`,
                        "widgetOffset": {
                            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo": apiResponseData?.data?.pageOffset?.widgetOffset?.collectionV5RestaurantListWidget_SimRestoRelevance_food_seo,
                        }
                    })
                }
            )
            const responseData = await response.json();
            console.log(responseData);
            const parentCards = responseData?.data?.cards;
            console.log(parentCards);
            const topBrandsParentCard = parentCards.filter(card => card?.card?.card?.id === "restaurant_grid_listing");
            const restaurantList = topBrandsParentCard[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            console.log(restaurantList);

            setApiResponseData(responseData);
            setListOfRestaurants((listOfRestaurants) => [...listOfRestaurants, ...restaurantList]);
            setFilteredListOfRestaurants((filteredListOfRestaurants) => [...filteredListOfRestaurants, ...restaurantList]);
            setApiStatus(API_STATUS_CONSTANTS.SUCCESS);
        } catch(error) {
            console.log(error);
            setApiStatus(API_STATUS_CONSTANTS.FAILED);
        }
    }

    useEffect(() => {
        fetchRestaurantsList();
    }, [])

    const handleSearchInputChange = (event) => {
        const searchInputValue = event.target.value;
        setSearchInput(searchInputValue);
    }

    const getFilteredListOfRestaurants = () => {
        return listOfRestaurants.filter(restaurant => {
            const {info} = restaurant;
            const {name, cuisines} = info;
            return (name.toLowerCase().includes(searchInput.toLowerCase()) || cuisines.includes(searchInput));
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
            {apiStatus === API_STATUS_CONSTANTS.IN_PROGRESS && <RestaurantListShimmer />}
            {apiStatus === API_STATUS_CONSTANTS.SUCCESS && <RestaurantList restaurantList={filteredListOfRestaurants} fetchMoreRestaurantsData={fetchMoreRestaurantsData} />}
            {apiStatus === API_STATUS_CONSTANTS.FAILED && <NoResultsFoundView/>}
        </div>
    )
}

export default Body;