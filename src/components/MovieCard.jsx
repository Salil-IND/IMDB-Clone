import React, { useContext } from "react";
import { MovieContext } from "../Context.jsx";

function MovieCard({movieObj }) {
  const { addToWatchList, watchList } = useContext(MovieContext)
  const isAdded = watchList.some(m => m?.id === movieObj?.id)

  const handleAdd = () => {
    addToWatchList(movieObj);
  };

  return (
    <div className="group relative h-90 w-60">
      {/* Improved Action Button */}
      <button
        onClick={handleAdd}
        className={`absolute top-3 right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full text-2xl font-bold transition-all duration-300 
          ${isAdded 
            ? "bg-green-600 text-white" 
            : "bg-black/40 text-white backdrop-blur-md hover:bg-red-900 hover:scale-110 active:scale-95"
          }`}
      >
        {isAdded ? "✓" : "+"}
      </button>

      <div
        className="
          relative h-full w-full rounded-2xl bg-cover bg-center transition-all duration-700 ease-in-out 
          group-hover:scale-105 group-hover:shadow-[0_0_20px_10px_rgba(155,34,66,0.5)]
          after:absolute after:inset-0 after:rounded-2xl
          after:bg-gradient-to-t after:from-black/90 after:via-transparent after:to-transparent
          after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300
        "
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieObj?.poster_path})` }}
      >
        {/* Movie title - z-10 ensures it stays above the gradient 'after' element */}
        <p className="absolute bottom-0 left-0 w-full p-4 text-center font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
          {movieObj?.title}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;