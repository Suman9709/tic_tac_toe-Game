import React, { useState } from 'react'
import Square from './Square'
const Board = () => {
    const [state, setState] = useState(Array(9).fill(null))
    const [isXTurn, setIsXTurn] = useState(true)
    const [buttonBg, setButtonBg] = useState('bg-blue-500');

    const CheckWinner = () => {
        const WinnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let logic of WinnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return false;
    }

    const isWinner = CheckWinner()
    const HnadleClick = (index) => {
        if (state[index] !== null) {
            return;
        }

        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "O";
        setState(copyState);
        setIsXTurn(!isXTurn);
    }
    const HandleRest = () => {
        setState(Array(9).fill(null));
        setButtonBg('bg-green-500');
        setTimeout(() => {
            setButtonBg('bg-blue-500');
        }, 300);
    }
    return (

        <div className='flex w-screen h-screen items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black'>
            {/* this represent row */}

            <div className=' flex w-screen h-screen items-center justify-center gap-4 flex-col m-2'>
                <h4 className='text-xl font-sans font-semibold text-white'>Player {isXTurn ? "X" : "O"} please move</h4>
                <div className='flex flex-row items-center justify-center gap-4'>
                    <div className='flex flex-col gap-4 text-3xl z-10 shadow-2xl'>
                        <Square onClick={() => HnadleClick(0)} value={state[0]} />
                        <Square onClick={() => HnadleClick(1)} value={state[1]} />
                        <Square onClick={() => HnadleClick(2)} value={state[2]} />
                    </div>
                    {/* this represent row */}
                    <div className='flex flex-col gap-4 text-3xl  z-10 shadow-2xl'>
                        <Square onClick={() => HnadleClick(3)} value={state[3]} />
                        <Square onClick={() => HnadleClick(4)} value={state[4]} />
                        <Square onClick={() => HnadleClick(5)} value={state[5]} />
                    </div>
                    {/* this represent row */}
                    <div className='flex flex-col gap-4 text-3xl z-10 shadow-2xl'>
                        <Square onClick={() => HnadleClick(6)} value={state[6]} />
                        <Square onClick={() => HnadleClick(7)} value={state[7]} />
                        <Square onClick={() => HnadleClick(8)} value={state[8]} />
                    </div>
                </div>
                <div>
                    <div className='text-xl font-sans font-semibold'>
                       {isWinner ? (
                         <div className='flex  w-full justify-center items-center flex-col'>
                           <div className='text-white font-sans font-2xl mt-4'> {isWinner} won the game {" "}</div>
                            <button className={` ${buttonBg} border-2 border-white p-1 mt-4 text-lg font-semibold font-sans `} onClick={HandleRest}> Play Again</button>
                        </div>
                       ):(
                        <div>
                            <button className={` ${buttonBg} border-2 border-blue-400 p-2 mt-4 text-lg font-semibold font-sans `} onClick={HandleRest}>Reset </button>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Board
