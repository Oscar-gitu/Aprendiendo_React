// const element = document.createElement('h1')
// element.innerText = 'Hello React';

// const container = document.getElementById('root');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

const user = {
    nombre1 : 'Oscar',
    nombre2 : 'Eduardo'
}

function getName(id){
    return `${id.nombre1} ${id.nombre2}`
}

const name = 'Oscar';
const element = (
    <div>
    <h1> Hello {getName(user)} </h1>
    <h1> Hola {getName(user)} </h1>
    </div>
);
const container = document.getElementById('root');

ReactDOM.render(element,container); // que elemento , dentro de o donde

