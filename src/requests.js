import axios from 'axios'
const get_url = 'http://localhost:5000/receive'
const post_url = 'http://localhost:5000/send'
export const sendGame = async (game)=>{
	let result = await axios.post(post_url,game)
	console.log(result)
	return result
}

export const getGames = async ()=>{
  let games = await axios.get(get_url)

	return games
}
