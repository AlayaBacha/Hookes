import Rating from '@mui/material/Rating';


const Filtermovie=({setSearch,setRate,search,rate})=>{
    
        const handelReset=()=>{
            setSearch('')
            setRate(0)
        }
    return(
        <div className='bacha'>
          <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text"/>
            <Rating value={rate} onChange={(e)=>setRate(e.target.value)} name="simple-controlled"/>
            <button onClick={handelReset}>Reset</button>
        </div>
    )
}
export default Filtermovie