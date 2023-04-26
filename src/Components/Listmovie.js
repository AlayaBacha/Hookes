import Cardmovie from "./Cardmovie"

const Listmovie =({movies,search,rate,setMovies})=>{
    var x =  movies.filter(el => el.title.toUpperCase().includes(search.toUpperCase())&& el.rating >= rate).map(el=><Cardmovie el={el} movies={movies} setMovies={setMovies}/>)
    return(
        <div className="alaya">
            {
               x.length >0 ?x : <h1>NOT FOUND</h1>
            }

        </div>
    )
}
export default Listmovie