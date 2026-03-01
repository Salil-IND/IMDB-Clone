import React from "react";

function MovieCard(prop){
    return (
        <div className="h-90 w-60 bg-cover" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${prop.posterUrl})`}}>
            <p className="p-2xl text-white">{prop.movieTitle}</p>
        </div>  
    )
}

export default MovieCard;