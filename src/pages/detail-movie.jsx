import { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import ScrollOnTop from '../components/elements/ScrollOnTop';
import SkeletonLoading from '../components/fragments/SkeletonLoading';
import SkeletonImage from '../components/fragments/SkeletonImage';

export default function DetailMovie() {
    const { id } = useParams();
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // const [similar, setSimilar] = useState([]);
    const [loading, setLoading] = useState(true);
    const [similarLoading, setSimilarLoading] = useState(true);

    useEffect(() => {
        if (data) {
            // console.log(data.similar.results);

            setLoading(false);
            setSimilarLoading(false);
        }
    }, [id, data]);

    return (
        <>
            <div className='w-full h-screen bg-black flex  md:flex-row justify-center relative'>
                {loading ? (
                    <SkeletonLoading />
                ) : (
                    <div className=' w-full h-full md:w-4/5 md:h-2/3 md:bg-slate-900 mt-24 flex flex-col md:flex-row justify-between rounded-lg overflow-hidden shadow-sm shadow-red-500 '>
                        <div className='mx-auto w-full h-2/4 md:w-2/6 md:h-full p-4 text-white'>
                            <img
                                className='md:mx-auto w-full h-full md:w-4/5 md:h-4/5 rounded-lg '
                                src={
                                    data.detail.poster_path
                                        ? `https://image.tmdb.org/t/p/w500${data.detail.poster_path}`
                                        : ''
                                }
                                alt={data.detail.title}
                                loading='lazy'
                            />
                        </div>
                        <div className='w-full h-full md:w-2/3 p-4 text-white overflow-scroll md:overflow-hidden'>
                            <h1 className='text-lg md:mt-5 md:text-3xl font-bold'>
                                {data.detail.title}
                            </h1>
                            <p className='text-sm md:mt-10 md:text-lg'>
                                {data.detail.overview}
                            </p>

                            <div className='w-full'>
                                <p className='text-sm md:text-lg'>
                                    Rating:{' '}
                                    {data.detail.vote_average &&
                                        data.detail.vote_average.toFixed(1)}
                                </p>
                                <p className='text-sm md:text-lg'>
                                    Release Date: {data.detail.release_date}
                                </p>
                            </div>
                            <div className='w-full h-1/3 flex justify-center items-center'>
                                {data.detail.genres &&
                                    data.detail.genres.map((genre) => (
                                        <p
                                            key={genre.id}
                                            className='mx-2 p-2 text-base md:text-lg bg-red-400 rounded-md '>
                                            {genre.name}
                                        </p>
                                    ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='mt-10 bg-slate-900 w-full flex flex-col md:mt-0 md:flex-row justify-center flex-wrap p-10 overflow-hidden'>
                {similarLoading &&
                    Array.from({ length: 20 }).map(() => (
                        <SkeletonImage key={Math.random()} />
                    ))}
                {data.similar.results.length > 0 &&
                    data.similar.results.map((movie) => (
                        <div
                            key={movie.id}
                            className='w-full h-96 my-5 md:w-1/6 md:max-h-96 md:h-96 md:mx-2 md:my-2 shadow-md shadow-red-500 rounded-md overflow-hidden text-white'>
                            <Link
                                preventScrollReset={true}
                                to={`/movies/${movie.id}`}>
                                <img
                                    className='m-auto object-cover-fit bg-center max-h-99% h-99% w-full '
                                    src={
                                        movie.poster_path
                                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                            : ''
                                    }
                                    alt={movie.title}
                                    loading='lazy'
                                />
                            </Link>
                        </div>
                    ))}
            </div>
            <ScrollOnTop />
        </>
    );
}
