import { MovieContext } from "../Context";
import {useContext} from 'react'
function Watchlist() {
    const {watchList, removeFromWatchList} = useContext(MovieContext)
    return (
        <div className="p-8 bg-zinc-950 text-white">
            {/* Modern dark header */}
            <h1 className="text-4xl font-bold tracking-tight mb-8 text-white">
                Watchlist
            </h1>

            {/* Scrollable container with rounded corners and subtle border */}
            <div className="overflow-x-auto rounded-3xl border border-zinc-800 shadow-2xl bg-zinc-900">
                <table className="w-full table-auto">
                    {/* Dark header with uppercase labels */}
                    <thead className="bg-zinc-800">
                        <tr>
                            <th className="px-6 py-5 text-left text-xs font-medium text-zinc-400 uppercase tracking-widest w-24">
                                Poster
                            </th>
                            <th className="px-6 py-5 text-left text-xs font-medium text-zinc-400 uppercase tracking-widest">
                                Name
                            </th>
                            <th className="px-6 py-5 text-left text-xs font-medium text-zinc-400 uppercase tracking-widest">
                                Ratings
                            </th>
                            <th className="px-6 py-5 text-left text-xs font-medium text-zinc-400 uppercase tracking-widest">
                                Popularity
                            </th>
                            <th className="px-6 py-5 text-left text-xs font-medium text-zinc-400 uppercase tracking-widest">
                                Genre
                            </th>
                            <th className="px-6 py-5 text-left text-xs font-medium text-zinc-400 uppercase tracking-widest">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-700">
                        {watchList.map((movieObj)=>{
                            const posterPath = movieObj?.poster_path
                            const rating = movieObj?.vote_average
                            const popularity = movieObj?.popularity
                            const genreIds = movieObj?.genre_ids

                            return (
                                <tr key={movieObj?.id} className="hover:bg-zinc-800/70 transition-colors duration-200">
                                    <td className="px-6 py-6">
                                        <div
                                            className="h-45 w-30 bg-cover bg-center"
                                            style={posterPath ? { backgroundImage: `url(https://image.tmdb.org/t/p/w500${posterPath})` } : undefined}
                                        />
                                    </td>
                                    <td className="px-6 py-6 font-medium text-white">
                                        {movieObj?.title}
                                    </td>
                                    <td className="px-6 py-6">
                                        {typeof rating === 'number' ? rating.toFixed(1) : '—'}
                                    </td>
                                    <td className="px-6 py-6 text-zinc-400">
                                        {typeof popularity === 'number' ? popularity.toFixed(2) : '—'}
                                    </td>
                                    <td className="px-6 py-6 text-zinc-400">
                                        {Array.isArray(genreIds) && genreIds.length > 0 ? genreIds.slice(0,3).join(', ') : '—'}
                                    </td>
                                    <td className="px-6 py-6">
                                        <button
                                            type="button"
                                            onClick={() => removeFromWatchList(movieObj?.id)}
                                            className="px-5 py-2 bg-red-600 hover:bg-red-700 text-sm font-medium rounded-xl transition-colors"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
}

export default Watchlist;