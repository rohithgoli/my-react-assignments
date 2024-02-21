const NoResultsFoundView = () => {
    return(
        <div className="no-results-found-container">
        <a className="navigation-anchor nav-item">Let's explore more</a>
        <img src={require("../../utils/food-hungry.gif")} alt="hungry-gif" />
    </div>
    )
}

export default NoResultsFoundView;