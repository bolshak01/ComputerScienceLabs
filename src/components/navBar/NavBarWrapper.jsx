import React from 'react';
import {labs} from '../../labs';
import SelectButtons from "./SelectButtons";

export default function NavBar(props) {
    return (
        <div id='nav-bar'>
            <SelectButtons
                labs={labs}
                selectLab={props.selectLab}
                selectedLabIndex={props.selectedLabIndex}
            />
        </div>
    )
}
