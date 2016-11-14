import React from 'react';
import SubRoot from './sub-root'

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'sample name'
    };
  }

  render() {
    return (
      <div>
        <h1>Hello World!!</h1>

        <p>
          Please input your name here:
          <input className="myInput"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </p>
        <SubRoot/>
        <p>Hello, {this.state.name} </p>
      </div>
    );
  }

  handleChange(e) {
    var newName = e.target.value();

    this.setState({
      name: newName
    });
  }
}

export default Root;
