import './Like.css'
import {useState} from 'react'

export default function Like(){
    const [like, setLike] = useState(42)

    function handleClick(event){
        event.target.classList.toggle("like")
        if(event.target.classList.contains("like")){
            setLike(like + 1)
        }else{
            setLike(like - 1)
        }
    }

    return (
        <div className="divLike" onMouseOver={event=> event.stopPropagation()} onMouseLeave={event => event.stopPropagation()}>
            <div onClick={event => handleClick(event)}></div> {like} Likes !
        </div>
    )
}