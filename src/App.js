import React from 'react';
import './App.css';
import NavBar from "./components/navBar/NavBarWrapper";
import LabDescription from "./components/navBar/LabDescription";
import {labs} from "./labs";
import LabSelector from "./components/labs/LabSelector";

function App() {
    const [selectedLabIndex, setSelectedLabIndex] = React.useState(0);
    const selectLab = (index) => {
        setSelectedLabIndex(index);
    };

    return (
        <div className="App">
            <NavBar
                selectLab={selectLab}
                selectedLabIndex={selectedLabIndex}
            />
            <LabDescription
                description={labs[selectedLabIndex].description}
            />
            <br/>
            <LabSelector
                index={selectedLabIndex}
            />
        </div>
    );
}

export default App;
