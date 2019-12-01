import React from 'react';

export default function Warcraft() {
    const [units, setUnits] = React.useState(0);
    const [gold, setGold] = React.useState(0);
    const [power, setPower] = React.useState(0);
    const [maxTime, setMaxTime] = React.useState(0);
    const [startedState, setStarted] = React.useState(false);
    let goldCount;

    const handleChange = (e) => {
        if (startedState) {
            return;
        }
        switch (e.target.id) {
            case 'units':
                setUnits(e.target.value);
                return;
            case 'gold':
                setGold(e.target.value);
                return;
            case 'power':
                setPower(e.target.value);
                return;
            case 'maxTime':
                setMaxTime(e.target.value * 1000);
                return;
            default:
                alert('Ошибка!');
        }
    };

    const handleStart = () => {
        if (startedState) {
            alert('Процесс уже запущен.');
            return;
        }
        setStarted(true);
        mainScript();
    };

    const mainScript = () => {
        goldCount = gold;
        for (let i = 0; i < units; i++) {
            unitWay(i);
        }
    };

    const unitWay = (index) => {
        const time = Math.random() * maxTime;
        if (goldCount < 0) {
            setGold(0);
            setStarted(false);
            return;
        }
        setTimeout(() => {
            goldCount -= power;
            setGold(goldCount);
            unitWay(index, goldCount);
        }, time);
    };

    return (
        <div>
            <h4>
                Количество юнитов:
            </h4>
            <input id='units' value={units} onChange={handleChange}/>
            <h4>
                Количество золота в шахте:
            </h4>
            <input id='gold' value={gold} onChange={handleChange}/>
            <h4>
                Количество золота, которое за раз добывает 1 юнит:
            </h4>
            <input id='power' value={power} onChange={handleChange}/>
            <h4>
                Максимальное время задержкки:
            </h4>
            <input id='maxTime' value={maxTime / 1000} onChange={handleChange}/>
            <br/>
            <button onClick={handleStart}>
                Старт
            </button>
        </div>
    )
}
