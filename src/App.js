import React, { Component } from "react";
import Main from "./Components/Main";
import Header from "./Components/Header";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
  }

  handelInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Math.floor(Math.random() * new Date()),
      },
    });
  };

  addTodo = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newitems = [...this.state.items, newItem];
      this.setState({
        items: newitems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };

  handelDeleteItem = (key) => {
    const filterItem = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filterItem,
    });
  };

  handelEditItem = (text, key) => {
    const items = this.state.items;
    items.forEach((item) => {
      if (item.key === key) {
      return  item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <Header />
          <Main
            currentItem={this.state.currentItem}
            handelInput={this.handelInput}
            addTodo={this.addTodo}
            items={this.state.items}
            handelDeleteItem={this.handelDeleteItem}
            handelEditItem={this.handelEditItem}
          />
        </div>
      </>
    );
  }
}
