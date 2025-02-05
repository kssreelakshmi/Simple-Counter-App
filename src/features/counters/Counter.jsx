import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement,reset} from './counterSlice.jsx'

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

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

        </div>
    </div>
    
    </>
)
}

export default Counter