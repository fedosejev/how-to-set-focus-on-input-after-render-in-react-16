import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.emailInput = React.createRef();
  }

  componentDidMount() {
    this.emailInput.current.focus();
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-6 offset-sm-3">
            <form>
              <div className="form-group">
                <label for="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  ref={this.emailInput}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
