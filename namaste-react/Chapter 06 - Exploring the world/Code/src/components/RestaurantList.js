import RestaurantCard from './RestaurantCard'
import NoResultsFoundView from './NoResultsFoundView'

const RestaurantList = ({restaurantList}) => {
    
    return (
        <div className="restaurant-list-container">
            {restaurantList && restaurantList.length > 0 && 
                restaurantList.map((restaurant) => {
                    const {info} = restaurant;
                    return <RestaurantCard key={info?.id} restaurantInfo={info} />
                })
            }
            {restaurantList && restaurantList.length === 0 && <NoResultsFoundView/>}
        </div>
    )
}

export default RestaurantList;