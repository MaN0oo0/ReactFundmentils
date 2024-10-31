import { Component } from "react";

export default class Home extends Component {
  state = { name: "Mohamed", count: 0, countIncres: 10 };
  increseCount = () => {
    let OldCount = this.state.count;
    OldCount += this.state.countIncres;
    this.setState({ count: OldCount });
  };
  decreseCount = () => {
    let currentCount = this.state.count;
    if (currentCount > 0) {
      currentCount -= this.state.countIncres;
      if (currentCount < 0) {
        currentCount = 0;
      }
      this.setState({ count: currentCount });
    }
  };
  changeCount = (e) => {
    if (e.target.value) {
      this.setState({ countIncres: parseInt(e.target.value) });
    }
  };
  render() {
    return (
      <>
        <div className="container">Home Component</div>

        <h2>Name: {this.state.name}</h2>
        <h3>Count: {this.state.count}</h3>

        <br />
        <hr />
        <select onChange={this.changeCount}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
          <option value="70">70</option>
          <option value="80">80</option>
          <option value="90">90</option>
          <option value="100">100</option>
        </select>
        <br />
        <button
          className="btn btn-primary p-2 me-2"
          onClick={this.increseCount}
        >
          IncreseCount <i className="fa fa-plus-circle ms-2"> </i>
        </button>
        <button className="btn btn-primary p-2" onClick={this.decreseCount}>
          DecreseCount<i className="fa fa-minus-circle ms-2"> </i>
        </button>
      </>
    );
  }
}
