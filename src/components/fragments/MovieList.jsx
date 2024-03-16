import CardContent from './CardContent';

export default function MovieList({ title, movies }) {
    return (
        <>
            <div className='text-white text-2xl pt-5 font-bold'>
                <h2 className='mt-10'>{title}</h2>
            </div>
            <div className='mt-5 p-5 flex overflow-x-scroll no-scrollbar cursor-pointer'>
                <div className='flex items-center'>
                    {movies.length > 0 &&
                        movies.map((movie) => (
                            <CardContent
                                movie={movie.poster_path}
                                key={movie.id}
                                id={movie.id}
                            />
                        ))}
                </div>
            </div>
        </>
    );
}
