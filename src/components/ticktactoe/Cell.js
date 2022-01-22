import React from 'react';


export default function Cell(props) {

    const {value, onClick} = props
    const color = value === 'X' ? 'isX' : 'isO'

    return (
        <div className={`game-cell ${color}`} onClick={props.onClick}>
            {props.value}
        </div>
    )
}
