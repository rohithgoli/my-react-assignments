import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const HeaderComponent = () => {
    return (
        <div className="header-container">
            <h2>🙏🏼 Dev</h2>
            <input type="search" className="search-input" />
            <h2>👤</h2>
        </div>
    )
}

root.render(<HeaderComponent />);