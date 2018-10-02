import React, { Component } from 'react';
import Title from './Titulo/Title.js';
// eslint-disable-next-line
import Button from './Boton/button.js';

import './inputData.css';

export default class InputData extends Component {
    render() {
        return (
            <div className="input-data">
                <form>
                    <Title></Title>
                    Nombre:
                    <input type="text" name="nombre" />
                    Apellido:
                    <input type="text" name="apellido" />
                    Email:
                    <input type="email" name="email" />
                    <button></button>
                </form>
            </div>    
        )
    }
}