import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const createdReactElement = React.createElement("div", {className: "title"}, [
    React.createElement("h1", {}, "Namaste Universe"),
    React.createElement("h2", {}, "Namaste Galaxy"),
    React.createElement("h3", {}, "Namaste World")
]);

const jsxElement = ( 
    <div className="title">
        <h1>Namaste Universe</h1>
        <h2>Namaste Galaxy</h2>
        <h3>Namaste World</h3>
    </div>
);

const SubComponent = () => {
    return (
        jsxElement
    )
}

const TitleComponent = () => {
    return (
        <div className="title">
            <h1>Namaste Universe</h1>
            <h2>Namaste Galaxy</h2>
            <h3>Namaste World</h3>
            {<SubComponent/>}
        </div>
    )
};



root.render(<TitleComponent />);