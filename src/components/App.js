import React from "react"
import "../stylesheets/main.scss";

export default class App extends React.Component {
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