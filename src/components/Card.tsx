

export const Card = ({title, img}:{title:string, img:string}) => {
  return (
    <li>
    
      <img src={"https://image.tmdb.org/t/p/w500/"+img}  />
        <h3>{title}</h3>
    </li>
  )
}
