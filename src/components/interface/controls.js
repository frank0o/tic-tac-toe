import reset from '../../images/reset.png'
import arrow from '../../images/arrow.png';
export default function Controls({props}){
  const clicks = props.clicks
  return (
    <div>
      <img src={arrow} onClick={()=>clicks.back()} className="controlButton" style={{transform:'rotate(180deg)'}}/>
      <img src={reset} onClick={()=>clicks.reset()} className="controlButton"/>
      <img src={arrow} onClick={()=>clicks.forward()} className="controlButton"/>
    </div>
  )
}
