import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <div>
                <h1>Contact</h1>
                <input id="name" name="name" />
                <input id="email" name="email" />
                <button>Submit</button>
            </div>
        )
    }
}

export default Contact;