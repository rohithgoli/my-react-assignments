import React from "react";
import ReactDOM from "react-dom/client";
import { restaurantList } from "./data";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const Logo = () => {
    return (
        <img 
            src="https://res.cloudinary.com/djr1xngvc/image/upload/v1708319972/food-ordering-app/food-munch-logo_v4knil.png"
            alt="logo"
            className="header-logo"
        />
    )
}

const NavBar = () => {
    return (
        <nav className="navbar-container">
            <ul className="navbar-list">
                <li className="nav-item">Home</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Help</li>
                <li className="nav-item">Cart</li>
            </ul>
        </nav>
    )
}

const Header = () => {
    return (
        <div className="header-container">
            <Logo />
            <NavBar />
        </div>
    )
}

const RestaurantCard = ({restaurantInfo}) => {
    const {id, name, cloudinaryImageId, areaName, cuisines, avgRating, aggregatedDiscountInfo, sla} = restaurantInfo;
    
    return (
        <div className="restaurant-card-container">
            <div className="restaurant-image-container">
                <img 
                    src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
                    alt="restaurant-image"
                    className="restaurant-card-image"
                />
                <div className="discount-info-container">
                    <p className="discount-info">{aggregatedDiscountInfo?.header} {aggregatedDiscountInfo?.subHeader}</p>
                </div>
            </div>
            <div className="restaurant-info-container">
                <div className="restaurant-name">{name}</div>
                <div className="restaurant-psuedo-info-container">
                    <img 
                        src="https://res.cloudinary.com/djr1xngvc/image/upload/v1708383148/food-ordering-app/star_oosjod.png" 
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

const RestaurantList = () => {
    return (
        <div className="restaurant-list-container">
        {
            restaurantList.map((restaurant) => {
                const {info} = restaurant;
                return <RestaurantCard key={info?.id} restaurantInfo={info} />
            })
        }
        </div>
    )
}

const Body = () => {
    return (
        <div id="body-container">
            <RestaurantList />
        </div>
    )
}

const App = () => {
    return (
        <div className="app-container">
            <Header />
            <Body />
        </div>
    )
}

root.render(<App/>);