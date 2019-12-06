import React from 'react';
import Message from "./Message";

export default function Messenger() {
    const [messageStack, setMessageStack] = React.useState([]);
    const [messageInfo, setMessageInfo] = React.useState([]);
    const [currentName, setCurrentName] = React.useState('Пользователь');
    const [currentMessage, setCurrentMessage] = React.useState('');

    const addMessage = () => {
        addMessageInfo();
        const index = messageInfo.length - 1;
        const message = <Message userName={messageInfo[index].userName} message={messageInfo[index].message}/>;
        setMessageStack([...messageStack, message]);
    };

    const addMessageInfo = () => {
        const info = messageInfo;
        info.push({ message: hashMessage(), userName: currentName });
        setMessageInfo(info);
    };

    const hashMessage = () => {
        const message = currentMessage;
        let newMessage = '';
        for (let i = 0; i < message.length; i++) {
            newMessage += createNewSymbol(message, i);
        }
        return newMessage;
    };

    const createNewSymbol = (message, i) => {
        const code = message.charCodeAt(i);
        return String.fromCharCode(generateNewCode(code));
    };

    const handleChange = (e) => {
        switch (e.target.id) {
            case 'userName':
                setCurrentName(e.target.value);
                return;
            case 'message':
                setCurrentMessage(e.target.value);
                return;
            default:
                alert('Ошибка!');
        }
    };

    const generateNewCode = (code) => {
        if (code === 120) {
            return 97;
        }
        if (code === 121) {
            return 98;
        }
        if (code === 122) {
            return 99;
        }
        if (code === 88) {
            return 65;
        }
        if (code === 89) {
            return 66;
        }
        if (code === 90) {
            return 67;
        }
        if (code === 1101) {
            return 1072;
        }
        if (code === 1102) {
            return 1073;
        }
        if (code === 1103) {
            return 1074;
        }
        if (code === 1069) {
            return 1040;
        }
        if (code === 1070) {
            return 1041;
        }
        if (code === 1071) {
            return 1042;
        }
        return code + 3;
    };

    return (
        <div>
            <h4>Как вы себя инициализируете?</h4>
            <input id='userName' value={currentName} onChange={(e) => handleChange(e)}/>
            <h4>Какое послание вы жедаете послать миру?</h4>
            <input id='message' value={currentMessage} onChange={(e) => handleChange(e)}/>
            <br/>
            <button onClick={() => addMessage()}>
                Отправить
            </button>
            <div>
                {messageStack}
            </div>
        </div>
    )
}
