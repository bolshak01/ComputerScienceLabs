import React from 'react';

export default function Message(props) {
    return (
        <div className='message'>
            <h4>{props.userName}</h4>
            {props.message}
        </div>
    );
};
