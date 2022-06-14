import {useState} from 'react'
import play from '../../images/play_button.png'
import menu from '../../images/menu.png'
export function Sidebar({games,handleClick}){
  const [open,setOpen] = useState(false)
  const handleOpen = ()=>{
    setOpen(!open)
  }

  const gamesList = games.map((i,j)=>{
    return (<li key={j} onClick={()=>handleClick(j)}>Game {j+1}</li>)
  })

  return (
    <>
      <img src={menu} class="sidebarButton" onClick={()=>handleOpen(true)}/>
      <div className={open ? "sidebarWrapper" : 'sidebarWrapper sidebarClosed'}>
        <div class="sidebarInside">
          <h3>Saved Games</h3>
          <ul className="sidebarGamesWrapper">
            {gamesList}
          </ul>
        </div>
      </div>
    </>
  )
}
