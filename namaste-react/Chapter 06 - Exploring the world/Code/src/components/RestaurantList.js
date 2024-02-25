import { useEffect, useRef } from 'react'
import RestaurantCard from './RestaurantCard'
import NoResultsFoundView from './NoResultsFoundView'

const RestaurantList = ({restaurantList, fetchMoreRestaurantsData}) => {
    
    const observerTarget = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    fetchMoreRestaurantsData();
                }
            },
            {threshold: 0.2}
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current)
        }

        return () => {
            if(observerTarget.current) {
                observer.unobserve(observerTarget.current);
            }
        };

    }, [observerTarget]);

    return (
        <div className="restaurant-list-container">
            {restaurantList && restaurantList.length > 0 && 
                restaurantList.map((restaurant, index) => {
                    const isLastElement = index === restaurantList.length-1;
                    const {info} = restaurant;
                    return <RestaurantCard 
                                key={info?.id} 
                                restaurantInfo={info}
                                ref={isLastElement ? observerTarget : null}
                            />
                })
            }
            {restaurantList && restaurantList.length === 0 && <NoResultsFoundView/>}
        </div>
    )
}

export default RestaurantList;