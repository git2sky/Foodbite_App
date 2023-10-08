import React from "react";
import myImage from "../utils/Sky_white_160.png"
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    //console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    //console.log(this.props.name + "Child Component Did Mount");
    // Api call

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    //console.log(json);
  }

  componentDidUpdate() {
    //console.log("Component Did Update");
  }

  componentWillUnmount() {
    //console.log("Component Will Unmount");
  }

  render() {
    console.log(this.props.name + "Child Render");

    const { name, location, myImage } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={myImage} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: krsanjeev7733@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;

/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      ccomponentDid Update
 *
 *
 *
 *
 */
