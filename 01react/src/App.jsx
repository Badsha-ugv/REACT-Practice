import { useState, useEffect} from "react"



function App() {

  const [password, setPassword] = useState("")
  const [length,setLength] = useState(6)
  const [number, setNumber] = useState(false)
  const [symbol, setSymbol] = useState(false) 
  



  const passwordGenerator = ()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let number = '0123456789'
    let sign = '~!@#$%^&*()'

    if (number) { str += number }
    if (symbol) { str += sign }

    for(let i=1; i<= length; i++){
      let randomNum = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(randomNum)
    }

    setPassword(pass)

  }

  useEffect(()=>{
    passwordGenerator()
  },[number,symbol,length])


  const copyPassword = ()=>{
    window.navigator.clipboard.writeText(password)
  }
  return (
    <>
    
    <div style={{width:'50%', margin:'0 auto',textAlign:'center'}}>
      <input 
      type="text"
      value={password}
      readOnly
      
      /> &nbsp;
      <button onClick={copyPassword}> copy</button>
    &nbsp;
    <br />
    {/* // range input  */}
      <input 
      type="range" 
      max={20}
      min={4}
      value={length}
      
      onChange={(e)=>{setLength(e.target.value)}}
      /> <label htmlFor="">Range: {length} </label>
      <br />
      <input 
      type="checkbox" 
      defaultChecked = {number}
        onChange={()=>{
          setNumber((prev)=> !prev)
        }}
      /> <label htmlFor="">Number</label>
      <br />
      <input 
      type="checkbox"
      defaultChecked = {symbol}
      onChange={()=>{
        setSymbol((prev)=> !prev)
      }}

      /> <label htmlFor="">Symbol</label>
    </div>
    </>
  )
}

export default App
