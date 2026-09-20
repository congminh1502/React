const Pizza = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("p", {}, props.description),
    ]);
};

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Padre Gino's"),
            React.createElement(Pizza, {
                name: "The Pepperoni Piza",
                description: "some dope pizza"
            }),
            React.createElement(Pizza, {
                name: "America Pizza",
                description: "French fries and hot dogs, wtf America"
            }),
        ]
    )
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));