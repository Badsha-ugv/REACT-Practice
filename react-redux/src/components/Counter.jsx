import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {plus,minus} from '../redux/slice/CounterSlice'



export default function Counter() {
    
    const countVal = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch();

  return (
    <div>
      <div className="card text-center w-50 mx-auto shadow">
        <h1 className="cart-title">{countVal}</h1>
        <div className="card-body">
            <button onClick={()=>{dispatch(plus())}} className='btn btn-success'>Increment</button> &nbsp;
            <button onClick={()=>{dispatch(minus())}} className='btn btn-danger'>Decrement</button>
        </div>
      </div>
    </div>
  )
}
