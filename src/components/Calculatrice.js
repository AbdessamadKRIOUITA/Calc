import React, { useState,useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'


function Calculatrice() {
  let r  = useSelector(state => state.result);
  const history = useSelector(state => state.history)
  console.log(history)
  const dispatch = useDispatch()
  const [result, setResult] = useState("")

  useEffect(() => {
    setResult(r)
  }, [r])


  function print(e){
    setResult(old => `${old}${e.target.value}`)
  }

  function ADD(){
    dispatch({type:"ADD" , actualResult: result})
  }
  function SUBSTRACT(){
    dispatch({type:"SUBSTRACT" , actualResult: result})
  }
  function MULTIPLY(){
    dispatch({type:"MULTIPLY" , actualResult: result})
  }
  function DIVIDE(){
    dispatch({type:"DIVIDE" , actualResult: result})
  }
  function RESET(){
    dispatch({type:"RESET"})
  }
  function EQUAL(){
    dispatch({type:"EQUAL",actualResult: result})
  }
  return (
    <div>
        <div className='calculatrice'>
            <input type="text" className='result' value={result} readOnly/>
            <button className='btn'  value="9" onClick={print}>9</button>
            <button className='btn'  value="8" onClick={print}>8</button>
            <button className='btn'  value="7" onClick={print}>7</button>
            <button className='btn'  value="6" onClick={print}>6</button>
            <button className='btn'  value="5" onClick={print}>5</button>
            <button className='btn'  value="4" onClick={print}>4</button>
            <button className='btn'  value="3" onClick={print}>3</button>
            <button className='btn'  value="2" onClick={print}>2</button>
            <button className='btn'  value="1" onClick={print}>1</button>
            <button className='btn'  value="0" onClick={print}>0</button>
            <button className='btn'  value="c" onClick={RESET}>C</button>
            <button className='btn'  value="=" onClick={EQUAL} >=</button>
            
            <div className='actions'>
              <button className='btn'  value="/" onClick={DIVIDE}>/</button>
              <button className='btn'  value="*"  onClick={MULTIPLY}>*</button>
              <button className='btn'  value="-" onClick={SUBSTRACT}>-</button>
              <button className='btn'  value="+" onClick={ADD}>+</button>
            </div>
        </div>
        <div className='history'>
              {history.map((h, index)=> <p key={index}>{h}</p>)}
        </div>
    </div>
  )
}

export default Calculatrice