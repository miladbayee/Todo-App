import React from 'react'
import SearchInput from './SearchInput'
import DeleteBtn from './DeleteBtn'
export default function SearchBox(props) {
    return (
        <div className={`search-box ${props.isItems && 'visibility'}`}>
            <SearchInput
                searchTodo={props.searchTodo}
            />

            <DeleteBtn
                deleteAllList={props.deleteAllList}
                isItems={props.isItems}
            />
        </div>

    )
}
