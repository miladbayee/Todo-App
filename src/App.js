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

  handelDeleteItem = (key) => {
    const filterItem = this.state.items.filter((item) => item.key !== key);
    localStorage.setItem('todo',JSON.stringify(filterItem));
    this.setState({
      items: filterItem,
    });
  };

  handelEditItem = (text, key) => {
    const items = this.state.items;
    items.forEach((item) => {
      if (item.key === key) {
        return (item.text = text);
      }
    });
    localStorage.setItem('todo',JSON.stringify(items))
    this.setState({
      items: items,
    });
  };

  deleteAllList=()=>{
    const items=this.state.items
    if(items.length>0){
     const deleteItems=[]
      this.setState({
        items:deleteItems
      })
      localStorage.setItem('todo',JSON.stringify(deleteItems))
    }
  }

  itemListCheck=()=>{
    let checkList=null;
    const items=this.state.items
    if(items.length>0){
      checkList=false;
    }
    else{
      checkList=true
    }
    return checkList
  }

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
          />
        </div>
      </>
    );
  }
}
