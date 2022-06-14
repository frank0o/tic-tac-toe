import {useState, useReducer, useEffect,useRef} from 'react';
import {Interface} from './components/interface/interface.js'
import {Board} from './components/board/board.js'
import {Sidebar} from './components/sidebar/sidebar.js'
import {sendGame,getGames} from './requests.js'
import gameReducer from './reducer.js'
import {defaultBoardState,defaultState} from './default_state.js'
import axios from 'axios'

export function Game(props){
  const [state, dispatch] = useReducer(gameReducer,defaultState)
  //try to connect to database first thing
  const connected = useRef(false)


  const handleClick = (params)=>{
    if (params.reset) {
      dispatch({type:'reset'})
      return
    }
    let i = params.i
    if (state.playing){
      dispatch({type:'move',coord:i})
    }else{
      dispatch({type:'reset'})
    }
  }
  const boardStatus = {boardState:state.boardState, playing:state.playing, turn:state.turn,click:handleClick,resetClick:handleClick}
  const controlClicks = {back:()=>dispatch({type:'backwards'}),forward:()=>dispatch({type:'forward'}),reset:()=>dispatch({type:'reset'})}
  const gameStatus = {turn:state.turn, score:state.score,clicks:controlClicks}

  const sidebarClick = (i)=>{
    dispatch({type:'loadGame',game:state.games[i]})
  }

  return (
    <>
    <div className="gameWrapper">
      <div>
        <Board props={boardStatus}/>
        <Interface gameStatus={gameStatus}/>
      </div>

    </div>

    </>
	)
}
