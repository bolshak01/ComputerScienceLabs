import React from 'react';
import Warcraft from "./warcraft/WarcraftWrapper";
import Graphics from "./graphics/GraphicsWrapper";
import Matrix from "./matrix/MatrixWrapper";
import Messenger from "./messenger/MessengerWrapper";

export default function LabSelector(props) {
    switch (props.index) {
        case 0:
            return <Warcraft/>;
        case 1:
            return <Graphics/>;
        case 2:
            return <Matrix/>;
        case 3:
            return <Messenger/>;
        default:
            return <h3>Ошибка!</h3>
    }
}
