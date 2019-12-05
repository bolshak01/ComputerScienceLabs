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
        info.push({ message: currentMessage, userName: currentName });
        setMessageInfo(info);
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
