import Controls from './controls.js'
import {playerColors} from '../playercolors.js'

export function Interface({gameStatus}){
  const gameState = gameStatus.gameState
  const player = (gameStatus.turn+1)
  const score = `${gameStatus.score[0]} : ${gameStatus.score[1]}`

  return (
    <div className="interfaceWrapper">
      <Controls props={{clicks:gameStatus.clicks}}/>
      <p>{score}</p>
    </div>
  )
}
