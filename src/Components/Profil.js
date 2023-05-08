import { Link, useNavigate, useParams } from "react-router-dom"

const Profil =({movies})=>{
    const {id}=useParams()
    const found = movies.find (el => el.id == id)
    const navigate=useNavigate()
    return(
        <div className="mara">
        <h1>{found.title}</h1>
        <h3>Description :</h3>
        <h4>{found.discription}</h4>
        <iframe width="560" height="315" src={found.annonce} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        {/* <button className="nn"><Link to={"/"}>HOME</Link></button> */}
        <div className="ll"> 
        <button className="nn" onClick={()=>navigate('/')}>HOME</button>
        <button className="kk" onClick={()=>navigate('/listmovie')}>Movies</button>
        
        </div>
        </div>
    )
}
export default Profil