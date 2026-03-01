import SuggestionBanner from "./SuggestionBanner";
import MovieCard from "./MovieCard"
import axios from 'axios';
import {useEffect, useState} from 'react';
function Movies(){
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        async function getMovies(){
            const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=c2c068bee2c057937acb30be5e0ced82&language=en-US&page=1')
            console.log(res.data.results)
            setMovies(res.data.results)
        }

        getMovies();

        
    }, [])

    return (
        <div>
            <SuggestionBanner/>

            <div className="flex gap-10 m-10 justify-evenly flex-wrap">
                {movies.map((movie)=>{
                    return (
                        <div>
                            <MovieCard movieTitle={movie.title} posterUrl={movie.poster_path}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Movies;