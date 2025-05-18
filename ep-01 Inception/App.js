const headingContent = "Hello World from React";

const heading = React.createElement("h1", {id: "heading", className: "heading"}, headingContent);

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, 
        [React.createElement("h1", {}, "Hello I am H1"), React.createElement("h2", {}, "Hello I am H2")]
    ),
    React.createElement("div", {id: "child2"}, 
        [React.createElement("h3", {}, "Hello I am H3"), React.createElement("h4", {}, "Hello I am H4")]
    )
]);

const greetings = React.createElement("h1", {className: "title", style: {backgroundColor: 'red'}}, "Learning React")

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(React, ReactDOM);

root.render(greetings);