import {defaultBoardState} from './default_state.js'
import {sendGame} from './requests.js'

export default function gameReducer(state,action){
	switch (action.type){
		case 'move':{
			console.log('move')
      let c = action.coord
      let boardState = state.boardState;
			var moves
			var count
			if (state.record.index+1!=state.record.count){

				count = state.record.index+2
				moves= [...state.record.moves].slice(0,state.record.index+1).concat(c)
			}else{
				count = state.record.count+1
				moves = [...state.record.moves].concat(c)
			}

      boardState[c]=Boolean(state.turn)
			let success = checkSuccess(boardState)

			if (success>0){
				return {...state,
					lastGame:{moves:moves,startTurn:state.record.startTurn},
					playing:false,
					score:state.score.map((i,j)=>{
						return Number(i+(j==(success-1)))
					}),
					games:[...state.games].concat({turn:state.record.startTurn,moves:moves}),
					record:{...state.record,
						moves:moves,
						index:state.record.index+1,
						count:count
					}
				}
			}else{
	      return {...state,
	          turn:(state.turn+1)%2,
						record:{...state.record,
							moves:moves,
							index:state.record.index+1,
							count:count
						}
		      }
			}
			break
    }

		case 'backwards':{
			if (state.record.index>=0){
				let boardState = state.boardState
				boardState[state.record.moves[state.record.index]]=null
				return {
					...state,
					turn:Number(!state.turn),
					record:{
						...state.record,
						index:state.record.index-1
					}
				}
			}else{
				console.log('cannot reverse further!')
				return {...state}
			}
			break
		}

		case 'forward':{
			if (state.record.index<state.record.count-1){

				let boardState = state.boardState
				boardState[state.record.moves[state.record.index+1]]=state.turn
				return {...state,
					turn:Number(!state.turn),
					record:{
						...state.record,
						index:state.record.index+1
					}
				}

			}else {
				console.log('cannot progress further')
			}
			break
		}


		case 'reset':{
			const startTurn = Boolean(Math.floor(Math.random()+0.5))
      return {
					...state,
					playing:true,
					boardState:[...defaultBoardState.boardState],
					score:state.score,
					turn:startTurn,
					record:{
						...defaultBoardState.record,
						startTurn:startTurn
					}
        }
				break
		}

		case "sendGame":{
			return {
				...state,
				lastGame:null
			}
		}
		default: {
			throw Error("Unknown action")
		}
	}
	return state
}

const checkSuccess=(boardState)=>{
	//false = no player has succeded while 1/2 are for victory by players 1/2 respectively
	for (var i = 0;i<solutions.length;i++){
		let solution = solutions[i]
		let a = boardState[solution[0]]
		if (a!=null&&a== boardState[solution[1]] && a==boardState[solution[2]]){
			return (a+1)
		}
	}
	return false
}

const solutions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
