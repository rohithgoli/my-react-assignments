import RestaurantCard from './RestaurantCard'
import NoResultsFoundView from './NoResultsFoundView'

const RestaurantList = ({restaurantList}) => {
    console.log(restaurantList);
    const renderRestaurantList = () => {
        restaurantList.map((restaurant) => {
            const {info} = restaurant;
            return <RestaurantCard key={info?.id} restaurantInfo={info} />
        })
    }

    const renderNoResultsFoundView = () => {
        return <NoResultsFoundView />
    }

    return (
        <div className="restaurant-list-container">
            {restaurantList.length > 0 && 
                restaurantList.map((restaurant) => {
                    const {info} = restaurant;
                    return <RestaurantCard key={info?.id} restaurantInfo={info} />
                })
            }
            {restaurantList.length === 0 && <NoResultsFoundView/>}
        </div>
    )
}

export default RestaurantList;