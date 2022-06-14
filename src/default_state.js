export const defaultState = {
  turn:0,
  score:[0,0],
  record:{count:0,index:-1,moves:[],startTurn:0},
  boardState:new Array(9).fill(null),
  playing:true,
  playback:false,
  games:[],
  sending:false,
  lastGame:null
}

export const defaultBoardState = {
  turn:0,
  record:{count:0,index:-1,moves:[],startTurn:0},
  boardState:new Array(9).fill(null),
  playing:true,
  playback:false
}
