import React from "react"
import "../stylesheets/main.scss";

// app component
export default class App extends React.Component {
  // render
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div >
        {this.props.children}
      </div>
    );
  }
}