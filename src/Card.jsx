import './Card.css'
import Like from './Like.jsx'
function Card({image, pseudo, email, description, genre}){
    function handleMouseOver(event){
      event.target.classList.add("border")
    }

    function handleMouseLeave(event){
      event.target.classList.remove("border")
    }

    return (
      <article className={'card '+genre} onMouseOver={event => handleMouseOver(event)} onMouseLeave={event => handleMouseLeave(event)}>
        <div onMouseOver={event => event.stopPropagation()}>
          <img src={image} alt="avatar" />
          <h2 >{pseudo} </h2>
          <h3 >{email}</h3>
          <p >{description}</p>
        </div>
        
        <Like />
      </article>
    )
  }

  export default Card