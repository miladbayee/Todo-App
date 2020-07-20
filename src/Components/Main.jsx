import React from 'react'
import InputForm from './InputForm'
import List from './List'

export default function Main(props) {
    return (
        <>
            <InputForm
                addTodo={props.addTodo}
                currentItem={props.currentItem}
                handelInput={props.handelInput}
            />
            <List
                items={props.items}
                handelDeleteItem={props.handelDeleteItem}
                handelEditItem={props.handelEditItem}
            />
        </>


    )
}
