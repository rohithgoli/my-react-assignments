const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const parentElement = React.createElement("div", {id: "parent1"}, [
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1", {}, "Teacher: Akshay Saini"),
        React.createElement("h1", {}, "Learner: Rohith Goli")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "Akshay Saini"),
        React.createElement("h1", {}, "Rohith Goli")
    ])
]);

root.render(parentElement);