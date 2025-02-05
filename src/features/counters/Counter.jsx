import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement,reset,incrementByAmount} from './counterSlice.jsx'
import { useState } from 'react'

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState(0)
    const incrementValue = Number(incrementAmount) || 0 ;

    const resetAll = () => {
        dispatch(reset())
        setIncrementAmount(0)
    }

  return (
    <>
    <div className='bg-gray-200 h-screen flex flex-col justify-center items-center'>
        <h1 className='font-mono text-center m-6 font-bold text-xl'>Simple Counter using Redux Toolkit</h1>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
        <p className='my-6 font-sans text-xl border-2 size-10 text-center'>{count}</p>
        <div >
            <button className='bg-black text-white size-10 rounded-lg mx-12' onClick={()=> dispatch(increment())}>++</button>
            <button className='bg-black text-white size-12 rounded-lg mx-12'onClick={()=>dispatch(reset())}>reset</button>
            <button className='bg-black text-white size-10 rounded-lg mx-12' onClick={()=> dispatch(decrement())}>--</button>
        </div>
        <input className='mx-12 my-12 border-2 text-center ' type="text" value={incrementAmount} onChange={(e)=>setIncrementAmount(e.target.value)}/>
        <div className='flex justify-center items-center'>
            <button className='bg-black text-white w-[115px] h-[50px] rounded-lg mx-12' onClick={(e)=>dispatch(incrementByAmount(incrementValue))}>Add Number</button>
            <button className='bg-black text-white w-[115px] h-[50px] rounded-lg mx-12' onClick={(e)=>resetAll()}>Reset All Number</button>
        </div>
        </div>
    </div>
    
    </>
)
}

export default Counter