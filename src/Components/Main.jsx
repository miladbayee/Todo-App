import React from 'react'
import InputForm from './InputForm'
import List from './List'
import SearchBox from './SearchBox'

export default function Main(props) {
    return (
        <>
            <InputForm
                addTodo={props.addTodo}
                currentItem={props.currentItem}
                handelInput={props.handelInput}
            />
            <SearchBox
                deleteAllList={props.deleteAllList}
                isItems={props.isItems}
                searchTodo={props.searchTodo}
            />
            <List
                items={props.items}
                handelDeleteItem={props.handelDeleteItem}
                handelEditItem={props.handelEditItem}
            />
        </>


    )
}
