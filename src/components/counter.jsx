import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   count: this.props.counter.value,
  //   tags: ["tag1"],
  // };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  // handleIncrement = (product) => {
  //   // this.state.count++;//这么做没用
  //   console.log(product);
  //   this.setState({ count: this.state.count + 1 });
  // };
  componentDidUpdate(prevProps, prevState) {
    console.log("preProps", prevProps);
    console.log("prState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //当值发生改变时
    }
  }
  componentWillUnmount() {
    console.log("unmount");
    //将会删除时会触发
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    //console.log("props", this.props);

    return (
      <div>
        {this.props.children}
        <h4>{this.props.counter.id}</h4>
        {/* 相当于slot  */}
        {/* 前面成立,最后一项就会被渲染 */}
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
        <span className="badge badge-primary m-2">
          {this.props.counter.value}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
