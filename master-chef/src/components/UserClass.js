import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Noida"
            }   
        }
    }
    async componentDidMount() {
        // API CALL
    //    const data = await fetch("https://api.github.com/users/umeshpalsingh")
    //    const json = await data.json();
    //    console.log(json);
    //    this.setState({
    //     userInfo: json  
    //    });

        this.timer = setInterval(() => {
            console.log("NAMASTE REACT OP");
        },1000)
       console.log("Child Component Did Mount");
    }

    // UPDATING
    componentDidUpdate() {
        console.log("Component Did Update");
    }

    // UNMOUNTING
    componentWillUnmount() {
        clearInterval(this.timer)
        console.log("Component Will Unmount");
    }

    render() {
        console.log(this.props.name +  "render");
        const {name, location} = this.state.userInfo;
        return (
            <div className='user-card'>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>count increase</button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @umeshpal</h4>
            </div>
        )
    }
}

export default UserClass; 


/**** 
 * 
 * -----MOUNTING-----
 * 
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML dummy >
 * Component Did Mount
 *      <API Call>
 *      <this.setState> -> State variable is updated
 * 
 * -----UPDATE-----
 * 
 * Render (API Data)
 *      <HTML (new API data)
 * Component Did Update
 */