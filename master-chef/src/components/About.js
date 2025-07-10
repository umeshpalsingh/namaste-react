import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import SyncedInputs from "./challenge01";
import UserContext from "../utils/UserContext";

class About extends React.Component {
    constructor(props) {
        super(props)
        // console.log("parent constructor");
    }
    componentDidMount() {
        // console.log("Parent Component Did Mount");
    }
  render() {
    // console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is About Page</h2>
        <User name="Akshay" />
        <div>
          Logged In User
          <UserContext.Consumer>
            {(data) => <h1>{data.loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <SyncedInputs /> 
      </div>
    );
  }
}

export default About;
