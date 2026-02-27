import SuggestionBanner from "./SuggestionBanner";
import MovieCard from "./MovieCard"
function Movies(){
    return (
        <div>
            <SuggestionBanner/>

            <div className="flex gap-3 m-10 justify-evenly flex-wrap">
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>    
                <MovieCard/>
                <MovieCard/>
            </div>
        </div>
    )
}

export default Movies;