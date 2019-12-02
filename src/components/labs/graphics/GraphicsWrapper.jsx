import React from 'react';

export default function Graphics() {
    const size = {width: 500, height: 400};
    const [carSize, setCarSize] = React.useState({width: 100, height: 70});
    const [canvasId, setCanvasId] = React.useState('graphics');
    const start = {
        x: size.width / 2 - carSize.width / 2,
        y: size.height / 2 - carSize.height / 2
    };
    const [speed, setSpeed] = React.useState(1);
    const [side, setSide] = React.useState('right');
    const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);

    const drawCar = (position = start) => {
        const context = generateContext();
        if (!context) {
            return;
        }
        const [width, height] = [+carSize.width, +carSize.height];
        context.beginPath();
        context.clearRect(0, 0, size.width, size.height);
        context.rect(position.x, position.y, width, height - 15);
        context.stroke();
        context.beginPath();
        context.arc(position.x + 20, position.y + height - 15, 15, Math.PI, 2 * Math.PI, true);
        context.stroke();
        context.beginPath();
        context.arc(position.x + width - 20, position.y + height - 15, 15, Math.PI, 2 * Math.PI, true);
        context.stroke();
    };

    const handleChangeSettingsValue = (value) => {
        setIsSettingsOpen(value);
    };

    const handleChange = (e) => {
        switch (e.target.id) {
            case 'width':
                setCarSize({...carSize, width: e.target.value});
                return;
            case 'height':
                setCarSize({...carSize, height: e.target.value});
                return;
            case 'speed':
                setSpeed(e.target.value);
                return;
            default:
                alert('Ошибка!');
        }
    };

    const handleChangeSide = (value) => {
        setSide(value);
    };

    const handleStartMainScript = () => {
        let position = start;
        let direction = side;
        const id = canvasId;
        moveCar(position, direction, id);
    };

    const handleStopMainScript = () => {
        setCanvasId(canvasId === 'graphics' ? 'graphic' : 'graphics');
        drawCar();
    };

    const moveCar = (position, direction, id) => {
        if (!generateContext(id)) {
            return;
        }
        if (direction === 'left' && position.x === 1) {
            direction = 'right';
        } else if (direction === 'right' && position.x === size.width - carSize.width - 1) {
            direction = 'left';
        }
        position.x = direction === 'right' ? position.x + 1 : position.x - 1;
        drawCar(position);
        setTimeout(() => moveCar(position, direction), 1000 / speed);
    };

    const generateContext = (id = canvasId) => {
        const canvas = document.getElementById(id);
        if (!canvas) {
            return;
        }
        return canvas.getContext('2d');
    };

    return (
        <div>
            {
                isSettingsOpen ?
                    <>
                        <h4>
                            Ширина:
                        </h4>
                        <input id='width' value={carSize.width} onChange={handleChange}/>
                        <h4>
                            Высота:
                        </h4>
                        <input id='height' value={carSize.height} onChange={handleChange}/>
                        <h4>
                            Скорость:
                        </h4>
                        <input id='speed' value={speed} onChange={handleChange}/>
                        <h4>
                            Сторона:
                        </h4>
                        <button
                            style={{backgroundColor: side === 'left' ? 'white' : 'gray'}}
                            onClick={() => handleChangeSide('left')}
                        >
                            Налево
                        </button>
                        <button
                            style={{backgroundColor: side === 'right' ? 'white' : 'gray'}}
                            onClick={() => handleChangeSide('right')}
                        >
                            Направо
                        </button>
                        <br/>
                        <br/>
                        <br/>
                        <button onClick={() => handleChangeSettingsValue(false)}>
                            Готово
                        </button>
                    </>
                    :
                    <>
                        <canvas id={canvasId} width={size.width} height={size.height} style={{backgroundColor: '#dddddd'}}/>
                        <br/>
                        <button onClick={() => drawCar()}>
                            Показать картинку
                        </button>
                        <button onClick={() => handleChangeSettingsValue(true)}>
                            Настройка
                        </button>
                        <button onClick={() => handleStartMainScript()}>
                            Начать движение
                        </button>
                        <button onClick={() => handleStopMainScript()}>
                            Остановиться
                        </button>
                    </>
            }
        </div>
    )
}
