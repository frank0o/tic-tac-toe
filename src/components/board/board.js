import {playerColors} from '../playercolors.js'

const boardIcons = ['','X','O']


export function Board({props}){
  const playing = props.playing
  const boardState = props.boardState
  const turn = props.turn
  const boardText = boardState.map(
    //check if null, then check if true or false
    i=>i===null?boardIcons[0] : i==false ? boardIcons[1] : boardIcons[2]
  )
  const handleClick=(i,reset=false)=>{
    if (boardState[i]==null){
      props.click({i:i})
    }
  }



  let buttons = []
  for (var l=0;l<3;l++){

    buttons.push(
    <div className="boardRow" key={l}>
    {
      boardState.slice(l*3,(l+1)*3).map((_,k)=>{
      let index = l*3+k
      return (
        <button
           className="gameButton"
           key={index}
           onClick={()=>handleClick(index)}
         >{boardText[index]}</button>
       )
     })
   }
    </div>)
  }
  // boardState.map((a,i)=>{
  //   return (
  //         <button
  //          className="gameButton"
  //          key={i}
  //          onClick={()=>handleClick(i)}
  //         >{boardText[i]}</button>
  // )})
  const resetClick = ()=>{
    if (!playing){
      props.resetClick({action:'reset'})
    }
  }
  const endScreen = (
    <div className="endScreen" style={{background:playerColors[turn]}} onClick={resetClick}>
      <h2>Game Over!</h2>
      <h4>Player {turn+1} won</h4>
    </div>
  )

  return (
    <div className="boardWrapper">
      {!playing && endScreen}
      {buttons}
    </div>
  )
}
