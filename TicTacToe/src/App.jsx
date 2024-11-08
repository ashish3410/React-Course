import { useState } from 'react'
import Button from './components/Button'
import CalculateWinner from './components/CalculateWinner'
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [turn,setTurn]=useState("X")
  const handleSquare=(i)=>{
    if(CalculateWinner(squares)){
      return
    }
    const newSquare=squares.slice()
    // console.log(newSquare)
    if(turn=="X"){
      newSquare[i]="X"
      setTurn("O")
    }else{
      newSquare[i]="O"
      setTurn("X")
    }
    setSquares(newSquare)
  }
  const winner=CalculateWinner(squares)
  // console.log(winner)
  let status;
  if(winner){
    status="Winner is:"+winner
  }else{
    status="Next player is:"+turn
  }
  return (
    <div className='bg-black/80 h-screen'>
      {/* <h1 className='bg-orange-600 text-3xl text-center py-3'>Ashish</h1> */}
      <div className={`text-3xl text-center mb-6 ${winner? 'text-orange-600 font-bold':'text-black'}`}>{status}</div>
      <div className='text-center '>
        <Button value={squares[0]} handleValue={()=>handleSquare(0)}/>
        <Button value={squares[1]} handleValue={()=>handleSquare(1)}/>
        <Button value={squares[2]} handleValue={()=>handleSquare(2)}/>
      </div>
      <div className='text-center'>
        <Button value={squares[3]} handleValue={()=>handleSquare(3)}/>
        <Button value={squares[4]} handleValue={()=>handleSquare(4)}/>
        <Button value={squares[5]} handleValue={()=>handleSquare(5)}/>
      </div>
      <div className='text-center'>
        <Button value={squares[6]} handleValue={()=>handleSquare(6)}/>
        <Button value={squares[7]} handleValue={()=>handleSquare(7)}/>
        <Button value={squares[8]} handleValue={()=>handleSquare(8)}/>
      </div>
    </div>
  )
}

export default App
