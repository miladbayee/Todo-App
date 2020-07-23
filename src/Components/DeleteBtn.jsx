import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function DeleteBtn(props) {
    return (
        <div className="delete-lists-btn">
            <button onClick={props.deleteAllList}>
                <FontAwesomeIcon icon={['fa', 'trash']} />
            </button>
        </div>

    )
}
