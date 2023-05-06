import { useParams } from "react-router-dom"

const Profil =({movies})=>{
    const {id}=useParams()
    const found = movies.find (el => el.id == id)
    return(
        <div className="mara">
        <h1>{found.title}</h1>
        <h4>{found.discription}</h4>
        <iframe width="560" height="315" src={found.annonce} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}
export default Profil