import './Card.css'
function Card({image, pseudo, email, description, genre}){
    return (
      <article className={'card '+genre}>
        <img src={image} alt="avatar"/>
        <h2>{pseudo}</h2>
        <h3>{email}</h3>
        <p>{description}</p>
      </article>
    )
  }

  export default Card