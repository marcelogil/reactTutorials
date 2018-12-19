import React from 'react';
import ReactDOM from 'react-dom';

const App = function () {

    const message = "Hello World!";

    return (
        <div style={{ color: 'grey', fontFamily: 'sans-serif' }}>{message}</div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);