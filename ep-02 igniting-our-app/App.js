import React from "react";
import {createRoot} from "react-dom/client";

const headingContent = "Hello World from React";

const heading = React.createElement("h1", {id: "heading", className: "heading"}, headingContent);

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, 
        [React.createElement("h1", {}, "Hello I am H1"), React.createElement("h2", {}, "Hello I am H2 Haha")]
    ),
    React.createElement("div", {id: "child2"}, 
        [React.createElement("h3", {}, "Hello I am H3"), React.createElement("h4", {}, "Hello I am H4")]
    )
]);


const root = createRoot(document.getElementById("root"));

root.render(heading);

