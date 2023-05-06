
import { useState } from 'react';
import './App.css';
import Navmovie from './Components/Navmovie';
import Listmovie from './Components/Listmovie';
import Addmovie from './Components/Addmovie';
import Filtermovie from './Components/Filtermovie';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Profil from './Components/Profil';

function App() {
  const [movies,setMovies] = useState([
    {title : 'Dachra', discription :"Ce film retrace l’aventure de trois jeunes, Yasmine, étudiante en journalisme, et ses deux amis Walid et Bilel qui cherchent à élucider le mystère d’un vieux crime, commis il y a plus de 25 ans. Au milieu de nulle part, une femme avait été trouvée mutilée et presque morte. Une fois leur investigation terminée, ils vont se trouver dans une forêt et y découvrir un petit village isolé appelé «Dachra». Coincé dans ce territoire inconnu, le trio va essayer de fuir l’horreur.",posterURL:'https://pictures.artify.tn/media/r9p6ux7liv6q4pxabgwi.jpg',rating : 5 , id:Math.random() , annonce: "https://www.youtube.com/embed/oUfAx52qf54" },
    {title : 'La Fuite', discription :"Un extrémiste religieux s'échappe des forces de sécurité et se réfugie chez une prostituée qui l'aide à faire face à la situation malgré leurs mentalités contradictoires",posterURL:'https://pictures.artify.tn/media/agipoa4fnrsgazhnnkcg.png', annonce : "https://www.youtube.com/embed/VojhNrMu-Ck" ,rating : 3 , id: Math.random() },
    {title : 'Noura rêve', discription :"Lorsque son mari violent bénéficie d'une libération anticipée, une femme se bat pour sauver la nouvelle vie qu'elle avait imaginée avec son amant et ses trois enfants",posterURL:'https://pictures.artify.tn/media/jtwey3n1flw8efinl0zo.jpg',rating : 2 , id: Math.random(), annonce : "https://www.youtube.com/embed/dCxb1sFrJ28"},
    {title : 'Hades', discription :"La disparition soudaine d'un journaliste d’investigation et personnage publique très connu intrigue tout le monde. Malek son meilleur ami et la dernière personne l’avoir vu. Il est pris d’un chagrin et d’une panique qu’attire l’attention. Il est au même temps chargé de dévoiler la vérité et de le retrouver…",posterURL:'https://pictures.artify.tn/media/vv9meyxnhibx93lxypbj.png?width=200',rating : 1 , id: Math.random(), annonce:"https://www.youtube.com/embed/OGtdxiFqaqU"},
    {title : 'Regarde-moi', discription :"Lotfi, la quarantaine, immigré tunisien en France, mène une vie pépère à Marseille. Son quotidien est partagé entre sa boutique d’électroménager et sa copine française Sophie. Son passé le rattrape lorsque son frère l’appelle de Tunisie pour l’informer que sa femme Sarra vient d’être hospitalisée des suites d’un AVC. Lotfi se voit obligé de revenir au pays pour réclamer la garde de son fils autiste Youssef, 9 ans, à sa tante maternelle Khedija. La cohabitation avec cet enfant qu’il n’a pas vu depuis 6 ans et la découverte de ses troubles vont pousser Lotfi à renouer avec son instinct paternel et à créer un lien avec son fils. ",posterURL:'https://pictures.artify.tn/media/fjagsqnc57kslterxbc1.jpg?width=200',rating : 4 , id: Math.random(), annonce:"https://www.youtube.com/embed/OY-Yy0GWFLE"},   
  ])
  // setSearch,setRate,search,rate

  const [search,setSearch] = useState('')
  const [rate,setRate] = useState(0)
  return (
    <>
    <Navmovie  movies={movies} setMovies={setMovies} />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/listmovie' element={<Listmovie movies={movies} setMovies={setMovies} search={search} rate={rate} setSearch={setSearch} setRate={setRate}/>}/>
      {/* <Route path='/addmovie' element={}/> */}
      <Route path='/Profil/:id' element={<Profil movies={movies}/>}/>
    </Routes>
  
    
    
    
    </>
  );
}

export default App;
