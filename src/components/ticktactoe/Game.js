import React, { useReducer } from 'react'
import Board from './Board'
import './GameStyle.css'
import { useState } from 'react'
import { calculateWinner } from '../../helpers'

//init state
const initialState = {
    board: Array(9).fill(null),
    xIsNext: true,
}

//action


//reducer
const gameReducer = (state, action) => {
    switch(action.type){
        case 'CLICK':
            const { board, xIsNext } = state //state hien tai
            const { index, winner } = action.payload

            //chan. viec game ket thuc ma van bam tiep dc 
            //hoac o da danh ma danh chong len
            //vi day la reducer, ko dc return null -> phai return state nao do
            if ( winner || board[index] ) return state

            //deep copy an obj -> state moi'
            const nextState = JSON.parse(JSON.stringify(state))

            //xu li logic
            nextState.board[index] = xIsNext ? 'X' : 'O'
            nextState.xIsNext = !nextState.xIsNext

            return nextState

        case 'RELOAD':
            return initialState
        default:
            throw new Error('Invalid action')
    }
}
export default function Game() {

    const [state, dispatch] = useReducer(gameReducer, initialState)

    const winner = calculateWinner(state.board)

    const handleClick = (index) => {
        
        dispatch({
            type: 'CLICK',
            payload: {
                index: index,
                winner: winner
            }
        })
        
    }

    const handleResetGame = () => {
        dispatch({
            type: 'RELOAD',
            payload: {
                // index: index,
                // winner: winner
            }
        })
    }

    return (
        <div>
            <div className='winner-alert'>
                {winner ? `Winner is ${state.xIsNext ? 'O' : 'X'}` : ''}
            </div>
            
            <Board cells = {state.board} onClick = {handleClick}></Board>
            
            <button onClick={handleResetGame} className='reset-btn'>Reset</button>
        </div>
    )
}

