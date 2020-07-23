import React from 'react'
import InputForm from './InputForm'
import List from './List'
import DeleteBtn from './DeleteBtn'

export default function Main(props) {
    return (
        <>
            <InputForm
                addTodo={props.addTodo}
                currentItem={props.currentItem}
                handelInput={props.handelInput}
            />
            <DeleteBtn 
            deleteAllList={props.deleteAllList} 
            isItems={props.isItems}
            />
            <List
                items={props.items}
                handelDeleteItem={props.handelDeleteItem}
                handelEditItem={props.handelEditItem}
            />
        </>


    )
}
