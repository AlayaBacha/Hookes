import Addmovie from "./Addmovie"
import Cardmovie from "./Cardmovie"
import Filtermovie from "./Filtermovie"

const Listmovie =({movies,search,rate,setMovies,setSearch,setRate})=>{
    var x =  movies.filter(el => el.title.toUpperCase().includes(search.toUpperCase())&& el.rating >= rate).map(el=><Cardmovie el={el} movies={movies} setMovies={setMovies}/>)
    console.log(movies)
    return(
        <div>
            
            <Filtermovie search={search} setSearch={setSearch} rate={rate} setRate={setRate}/>
            {/* <Addmovie movies={movies} setMovies={setMovies}/> */}
        <div className="alaya">
              
            {
               x.length >0 ?x : <h1>NOT FOUND</h1>
            }

        </div>
        </div>
    )
}
export default Listmovie