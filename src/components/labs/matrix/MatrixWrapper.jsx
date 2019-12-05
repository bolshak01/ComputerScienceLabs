import React from 'react';

export default function Matrix() {
    const [size, setSize] = React.useState({width: 1, height: 1});
    const [table, setTable] = React.useState(null);
    const [resultList, setResultList] = React.useState(null);
    const handleChange = (e) => {
        switch (e.target.id) {
            case 'width':
                setSize({...size, width: e.target.value});
                return;
            case 'height':
                setSize({...size, height: e.target.value});
                return;
            default:
                alert('Ошибка!');
        }
    };

    const doMainScript = () => {
        const matrix = createMatrix();
        generateTable(matrix);
        const resultList = calculateResult(matrix);
        generateResultList(resultList);
    };

    const createMatrix = () => {
        const matrix = [];
        for (let i = 0; i < size.height; i++) {
            const horizontal = [];
            for (let k = 0; k < size.width; k++) {
                const randomValue = Math.floor(Math.random() * 100);
                horizontal.push(randomValue);
            }
            matrix.push(horizontal)
        }
        return matrix;
    };

    const calculateResult = (matrix) => {
        const list = [];
        for (let i = 0; i < size.width; i++) {
            let value = 0;
            for (let k = 0; k < size.height; k++) {
                if (isEven(matrix[k][i])) {
                    value++;
                }
            }
            list.push(value);
        }
        return list;
    };

    const isEven = (value) => {
        return value % 2 === 0;
    };

    const generateTable = (matrix) => {
         const table = matrix.map((line) => {
             return <tr>
                 {
                     line.map((value) => {
                         return <td>{value}</td>
                     })
                 }
             </tr>
         });
        setTable(table);
    };

    const generateResultList = (list) => {
        const resultList = list.map((value) => {
            return <td>{value}</td>
        });
        setResultList(resultList);
    };

    return (
        <div>
            <h4>
                Ширина:
            </h4>
            <input id='width' value={size.width} onChange={handleChange}/>
            <h4>
                Высота:
            </h4>
            <input id='height' value={size.height} onChange={handleChange}/>
            <br/>
            <button className='doButton' onClick={() => doMainScript()}>
                Выполнить
            </button>
            <table id='mainTable'>
                <tbody>
                {table}
                </tbody>
            </table>
            {
                table !== null && <h4>Результат:</h4>
            }
            <table>
                <tbody>
                {resultList}
                </tbody>
            </table>
        </div>
    )
}
