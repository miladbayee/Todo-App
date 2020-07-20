import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function List(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return (
            <div className='todo-list' key={item.key}>
                <p>
                    <input type="text"
                        id={item.key}
                        value={item.text}
                        onChange={(e) => props.handelEditItem(e.target.value, item.key)}
                    />
                    <span>
                        <FontAwesomeIcon
                            icon={['fa', 'trash']}
                            onClick={() => props.handelDeleteItem(item.key)} />
                    </span>
                </p>
            </div>
        )
    })
    return (
        <>
            {listItems}
        </>
    )
}
