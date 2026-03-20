import SuggestionBanner from "./SuggestionBanner";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import axios from 'axios';
import {useEffect, useState} from 'react';
function Movies(){
    const [movies, setMovies] = useState([])
    const [pgNo, setPageNo] = useState(1)

    function incPage(){
        setPageNo(prev => prev + 1);
    }

    function decPage(){
        setPageNo(prev => Math.max(1, prev - 1))
    }

    useEffect(()=>{
        async function getMovies(){
            try {
                const res = await axios.get(
                    `https://api.themoviedb.org/3/movie/popular?api_key=c2c068bee2c057937acb30be5e0ced82&language=en-US&page=${pgNo}`
                )
                setMovies(res.data.results ?? [])
            } catch (err) {
                console.error('Failed to fetch movies', err)
                setMovies([])
            }
        }

        getMovies();

        
    }, [pgNo])

    return (
        <div>
            <SuggestionBanner/>

            <div className="flex gap-10 m-10 justify-evenly flex-wrap">
                {movies.map((movie)=>{
                    return (
                        <MovieCard key={movie.id} movieObj={movie}/>
                    )
                })}
            </div>
            <Pagination decPage={decPage} incPage={incPage} pgNo={pgNo}/>
        </div>
    )
}

export default Movies;