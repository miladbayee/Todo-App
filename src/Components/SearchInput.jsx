import React from 'react'

export default function SearchInput(props) {
    return (
        <div className='search-input'>
            <input
                type="text"
                placeholder='Search todo...'
                value={props.searchValue}
                onChange={(e)=>props.searchTodo(e.target.value)}
            />
        </div>
    )
}
