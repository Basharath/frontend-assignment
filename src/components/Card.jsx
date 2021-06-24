export default function Card({ movie, onCardClick}) {
  const { title, vote_average: rating, image_path: image} = movie;
  
  return (
    <div className="card" onClick={() => onCardClick(movie)}>
      <div className="rating">{rating}</div>
      <img src={image} alt={title} />
      <div className="title">{title}</div>
    </div>
  )
}
