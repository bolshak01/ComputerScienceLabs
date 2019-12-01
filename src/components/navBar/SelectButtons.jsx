import React from 'react';

export default function SelectButtons(props) {
    return (
        <>
            {
                props.labs.map((lab, index) => {
                    const color = props.selectedLabIndex === index ? 'white' : 'gray';
                    return (
                        <button
                            key={lab.name}
                            onClick={() => props.selectLab(index)}
                            style={{backgroundColor: color}}
                        >
                            {lab.name}
                        </button>
                    )
                })
            }
        </>
    );
}
