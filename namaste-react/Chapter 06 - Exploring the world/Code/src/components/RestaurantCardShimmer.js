const RestaurantCardShimmer = () => {
    return (
        <div className="restaurant-card-container">
            <div className="restaurant-image-container skeleton">
                <div className="discount-info-container">
                    <p className="discount-info"></p>
                </div>
            </div>
            <div className="restaurant-info-container">
                <div className="restaurant-name skeleton skeleton-text"></div>
                <div className="restaurant-psuedo-info-container skeleton skeleton-text">
                    <h4></h4>
                </div>
                <div className="restaurant-cuisines-info skeleton skeleton-text"></div>
                <p className="restaurant-area-info skeleton skeleton-text"></p>
            </div>
        </div>
    )
}

export default RestaurantCardShimmer;