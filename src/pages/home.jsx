import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// import pointerIcon from '../assets/pointer-down.svg';
import axios from 'axios';
import Header from '../components/fragments/Header';

// import '../assets/font.css';

export default function Home() {
    const baseUrl = 'https://api.themoviedb.org/3';
    const [movies, setMovies] = useState([]);
    // const [query, setQuery] = useState('');
    const api_key = '3b9b9a7b5b5d9e6b4f1d8e9b9c5f3d2e';

    const getMovies = async () => {
        const response = await axios.get(`${baseUrl}/discover/movie`, {
            params: {
                api_key,
            },
            headers: {
                'Content-Type': 'application/json',
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTIwNDdmMWU5MDVhZTMwZTlhZmYyMGVkOTU3NmYzNiIsInN1YiI6IjY1ZWQ1ZDM5MWFjMjkyMDE4NjZhMmI4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7TK1Y1CoSPAfMqzAQRaykp1K0cTjaMJkj4iBhcRPazE',
            },
        });

        return response.data.results.splice(0, 15);
    };

    const searchMovie = async (query) => {
        const response = await axios.get(`${baseUrl}/search/movie`, {
            params: {
                api_key,
                query: query,
            },
            headers: {
                'Content-Type': 'application/json',
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTIwNDdmMWU5MDVhZTMwZTlhZmYyMGVkOTU3NmYzNiIsInN1YiI6IjY1ZWQ1ZDM5MWFjMjkyMDE4NjZhMmI4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7TK1Y1CoSPAfMqzAQRaykp1K0cTjaMJkj4iBhcRPazE',
            },
        });

        return response.data.results.splice(0, 15);
    };

    useEffect(() => {
        getMovies().then((res) => {
            setMovies(res);
        });
    }, []);

    const handleMovie = async (query) => {
        if (query.length > 3) {
            const res = await searchMovie(query);
            setMovies(res);
        }
        if (query.length == 0) {
            getMovies().then((res) => {
                setMovies(res);
            });
        }
    };
    return (
        <>
            <Header />

            <div className='w-full h-screen bg-back-img'>
                <div className='relative'>
                    <div className='w-full h-screen bg-black/40 absolute z-10'>
                        <div className='absolute top-1/4 p-4 z-20 md:top-1/2 md:left-36 '>
                            <p className='text-white text-6xl font-bold'>
                                Unlimited movies, TV <br />
                                shows, and more
                            </p>
                            <p className='text-white text-lg mt-2'>
                                Starts at IDR 54,000. Cancel anytime.
                            </p>
                            <p className='text-white text-lg mt-5'>
                                Ready to watch? Enter your email to create or
                                restart your membership.
                            </p>
                            <div className='flex items-center justify-evenly mt-5 w-full h-20'>
                                <input
                                    className='w-4/5 h-4/5 bg-slate-800 text-slate-200 ring-1 ring-offset-slate-300 rounded-md px-2 border-2 border-slate-500'
                                    type='text'
                                />
                                <button className='w-2/4 h-4/5 bg-red-500 text-white text-2xl mx-2 rounded-md px-2 hover:bg-red-700 '>
                                    <p> Get Started</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-full  md:h-full bg-black p-8 '>
                <div className='w-full md:w-full h-16 flex justify-center text-xl text-sky-300 font-bold mx-auto'>
                    <input
                        className='w-full md:w-4/6 md:h-4/5 bg-slate-800 text-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-none rounded-md px-2 border-2 border-slate-500'
                        type='text'
                        placeholder='Search...'
                        onChange={(e) => handleMovie(e.target.value)}
                    />
                </div>
                <div className='md:mx-auto w-full md:w-full md:h-full lg:h-3/5 flex flex-col justify-center md:flex-row md:flex-wrap md:justify-center md:p-4 '>
                    {movies.length > 0 &&
                        movies.map((movie) => (
                            <div
                                key={movie.id}
                                className='w-full h-2/5 md:w-1/3 lg:w-1/6  bg-slate-900 rounded-xl shadow-md overflow-hidden md:mx-2 my-4 shadow-red-500 hover:border-sky-200 hover:border-2'>
                                <div className='w-full max-h-[600px] h-[600px] md:h-2/4 md:w-full'>
                                    <Link to={`/movies/${movie.id}`}>
                                        <img
                                            className='w-full h-full md:max-h-[250px] lg:max-h-[200px] object-fit-cover hover:transform hover:scale-125 hover:transition hover:duration-500'
                                            src={
                                                movie.poster_path === null
                                                    ? ''
                                                    : 'https://image.tmdb.org/t/p/w500/' +
                                                      movie.poster_path
                                            }
                                            alt=''
                                        />
                                    </Link>
                                </div>
                                <div className='text-white lg:text-base max-h-[60px] h-[100px]'>
                                    <div className='p-2 mt-2'>
                                        {movies.length > 0 &&
                                            movie.title +
                                                ` (${
                                                    movie.release_date.split(
                                                        '-'
                                                    )[0]
                                                })`}
                                    </div>
                                </div>
                                <div className='body-card max-h-[100px] h-[100px]'>
                                    <p className=' text-slate-200 px-2 text-sm'>
                                        {movies.length > 0 &&
                                            movie.overview.substring(0, 90) +
                                                '...'}
                                    </p>
                                </div>
                                <div className='flex justify-end items-end mx-2 text-sky-200 p-2 mt-5 h-5'>
                                    <span className='text-lg text-slate-200'>
                                        {movies.length > 0 &&
                                            movie.vote_average.toFixed(1)}
                                    </span>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}
