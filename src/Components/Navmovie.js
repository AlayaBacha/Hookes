import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Addmovie from './Addmovie';

const Navmovie=({movies,setMovies})=>{
  // console.log('nav comp', movies)
    return(
        <div className='mm'>
      <Navbar bg="primary" variant="dark" >
        <Container>
          <Navbar.Brand href="#home">Movie++ </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/listmovie">Movie</Nav.Link>
            {/* <Nav.Link href="/addmovie">Addmovie</Nav.Link> */}
            <Addmovie movies={movies} setMovies={setMovies}/>
            {/* <Filtermovie search={search} setSearch={setSearch} rate={rate} setRate={setRate}/> */}
          </Nav>
        </Container>
      </Navbar>
      </div>
    )
}
export default Navmovie