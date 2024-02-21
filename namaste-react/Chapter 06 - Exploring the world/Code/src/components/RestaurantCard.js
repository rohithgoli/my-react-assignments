import { IMAGE_BASE_URL, RATING_IMAGE_URL } from "../../utils/constants";

const RestaurantCard = ({restaurantInfo}) => {
    const {name, cloudinaryImageId, areaName, cuisines, avgRating, aggregatedDiscountInfoV3, sla} = restaurantInfo;
    
    return (
        <div className="restaurant-card-container">
            <div className="restaurant-image-container">
                <img 
                    src={`${IMAGE_BASE_URL}${cloudinaryImageId}`}
                    alt="restaurant-image"
                    className="restaurant-card-image"
                />
                <div className="discount-info-container">
                    <p className="discount-info">{aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}</p>
                </div>
            </div>
            <div className="restaurant-info-container">
                <div className="restaurant-name">{name}</div>
                <div className="restaurant-psuedo-info-container">
                    <img 
                        src={RATING_IMAGE_URL}
                        alt="rating-star-image"
                        className="rating-star"
                    />
                    <h4>{avgRating}</h4>
                    <span className="dot-separator">.</span>
                    {sla?.slaString}
                </div>
                <div className="restaurant-cuisines-info">{cuisines.join(", ")}</div>
                <p className="restaurant-area-info">{areaName}</p>
            </div>
        </div>
    )
};

export default RestaurantCard;