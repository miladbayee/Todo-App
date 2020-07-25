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
      searchValue:''
    };
  }

  componentDidMount() {
    window.addEventListener("load", this.loadData);
  }

  loadData = () => {
    const getLS = localStorage.getItem("todo");
    if (getLS) {
      this.setState({
        items: JSON.parse(getLS),
      });
    }
  };

  handelInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Math.floor(Math.random() * new Date()),
      },
      items:JSON.parse(localStorage.getItem('todo')),
      searchValue:''
    });
    
  };

  addTodo = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      localStorage.setItem("todo", JSON.stringify(newItems));
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };

  handelDeleteItem = (text,key) => {
    const getLS=JSON.parse(localStorage.getItem('todo'))
    getLS.forEach((item,index)=>{
      if(item.key===key){
       getLS.splice(index,1)
      }
      localStorage.setItem('todo',JSON.stringify(getLS))
    })
    this.searchTodo(this.state.searchValue)
  };

  handelEditItem = (text, key) => {
    const items = this.state.items;
    console.log(items)
    items.forEach((item) => {
      if (item.key === key) {
        return (item.text = text);
      }
    });
    localStorage.setItem("todo", JSON.stringify(items));
    this.setState({
      items: items,
    });
  };

  deleteAllList = () => {
    const items = this.state.items;
    if (items.length > 0) {
      const deleteItems = [];
      this.setState({
        items: deleteItems,
      });
      localStorage.setItem("todo", JSON.stringify(deleteItems));
    }
  };

  searchTodo = (text) => {
    const newItems = JSON.parse(localStorage.getItem("todo"));
    if (text === "") {
      this.setState({
        items: newItems,
        searchValue:''
      });
    } else {
      const filterTodo = newItems.filter((todo) =>
       todo.text.toLowerCase().includes(text.toLowerCase())
      );
      this.setState({
        items: filterTodo,
        searchValue:text
      });
    }
  };

  itemListCheck = () => {
    const items = localStorage.getItem("todo");
    if (JSON.parse(items).length > 0) {
      return false;
    }
    return true;
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
            deleteAllList={this.deleteAllList}
            isItems={this.itemListCheck()}
            searchTodo={this.searchTodo}
            searchValue={this.state.searchValue}
          />
        </div>
      </>
    );
  }
}
