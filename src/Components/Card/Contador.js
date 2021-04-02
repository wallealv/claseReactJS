// function contador() {
//     count : 0
//     this.setState({count : this.setState})
// }
import React, { Component }from 'react';


class Contador extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    render() {
      return (
        <div>
          <p>Compra {this.state.count}</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            +
          </button>
          <button onClick={() => this.setState({ count: this.state.count - 1 })}>
            -
          </button>
        </div>
      );
    }
  }

export default Contador