import React from "react";
import {createRoot} from "react-dom/client";

const root = createRoot(document.getElementById('root'));

// FUNCTIONAL COMPONENT
const  HeadingComponent = () => {
    return <h1>Hello world</h1>
}

// Component Composition 
const Title = () => (
    <div className="container">
        <HeadingComponent />
        <h2>New Title</h2>
    </div>
);

root.render(<Title />)

console.log(HeadingComponent);
 