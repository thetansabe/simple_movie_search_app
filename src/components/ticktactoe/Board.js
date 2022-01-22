import React from 'react';
import { calculateWinner } from '../../helpers';
import Cell from './Cell';

export default function Board(props) {

    const cells = [null,null,null,'X','X','X',null,null,null];
    console.log(calculateWinner(cells))


    return (
        <div className='game-board'>
            {props.cells.map((item, index) => (
                <Cell 
                    key = {index} 
                    value = {item} 
                    onClick = {() => props.onClick(index)}
                />
            ))}
        </div>
    )
}
