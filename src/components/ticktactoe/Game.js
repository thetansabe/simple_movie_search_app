import React from 'react'
import Board from './Board'
import './GameStyle.css'
import { useState } from 'react'
import { calculateWinner } from '../../helpers'

export default function Game() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (index) => {
        const boardCopy = [...board]
        //neu vi tri da nhan vao hoac co' winner -> khong cho nhan gi het
        if(winner || boardCopy[index]) return
        //kiem tra X la dau tiep theo hay ko
        boardCopy[index] = xIsNext ? 'X' : 'O'
        setBoard(boardCopy)
        setIsNext(!xIsNext)
    }

    const handleResetGame = () => {
        setBoard(Array(9).fill(null))
        setIsNext(true)
    }

    return (
        <div>
            <div className='winner-alert'>
                {winner ? `Winner is ${xIsNext ? 'O' : 'X'}` : ''}
            </div>
            
            <Board cells = {board} onClick = {handleClick}></Board>
            
            <button onClick={handleResetGame} className='reset-btn'>Reset</button>
        </div>
    )
}

