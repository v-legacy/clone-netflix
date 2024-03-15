import { useEffect, useState } from 'react';
import Header from '../components/fragments/Header';
import axios from 'axios';
import MovieList from '../components/fragments/MovieList';

export default function Index() {
    const [nowPlaying, setNowPlaying] = useState([]);
    const [popular, setPopular] = useState([]);
    const [toprated, setTopRated] = useState([]);
    const [upcoming, setUpcoming] = useState([]);

    const Authorization =
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTIwNDdmMWU5MDVhZTMwZTlhZmYyMGVkOTU3NmYzNiIsInN1YiI6IjY1ZWQ1ZDM5MWFjMjkyMDE4NjZhMmI4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7TK1Y1CoSPAfMqzAQRaykp1K0cTjaMJkj4iBhcRPazE';
    const api_key = '6f5fae224e77f838e4a1ee94d88f53cf';
    const getNowPlaying = async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`,
            {
                headers: {
                    accept: 'application/json',
                    Authorization,
                },
            }
        );
        return response.data.results;
    };

    const getPopular = async () => {
        const response = await axios.get(
            'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
            {
                headers: {
                    accept: 'application/json',
                    Authorization,
                },
            }
        );
        return response.data.results;
    };
    const getTopRated = async () => {
        const response = await axios.get(
            'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
            {
                headers: {
                    accept: 'application/json',
                    Authorization,
                },
            }
        );
        return response.data.results;
    };

    const getUpcoming = async () => {
        const response = await axios.get(
            'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
            {
                headers: {
                    accept: 'application/json',
                    Authorization,
                },
            }
        );
        return response.data.results;
    };

    useEffect(() => {
        getNowPlaying().then((data) => {
            setNowPlaying(data);
        });
        getPopular().then((data) => {
            setPopular(data);
        });
        getTopRated().then((data) => setTopRated(data));
        getUpcoming().then((data) => setUpcoming(data));
    }, []);

    return (
        <>
            <Header />
            <div className='relative w-full overflow-hidden'>
                <div className='thumbnail-info h-2/6 absolute top-52 left-0 ml-16 text-white text-start z-50'>
                    <img
                        className='w-[15%] h-full rounded-md'
                        src='https://upload.wikimedia.org/wikipedia/id/thumb/4/4d/Poster_film_dune_part_two.jpg/220px-Poster_film_dune_part_two.jpg'
                        alt='Dune Image'
                    />
                    <p className='text-6xl font-bold my-2'>DUNE PART 2</p>
                    <div className='w-1/2 flex justify-start gap-4 text-slate-200 mb-5 backdrop-blur-md'>
                        <div className='bg-gray-600 p-2 rounded-lg'>
                            <p className='text-base backdrop-blur'>Action</p>
                        </div>
                        <div className='bg-gray-600 p-2 rounded-lg'>
                            <p className='text-base backdrop-blur'>18+</p>
                        </div>
                        <div className='bg-gray-600 p-2 rounded-lg'>
                            <p className='text-base backdrop-blur'>Movie</p>
                        </div>
                        <div className='bg-gray-600 p-2 rounded-lg'>
                            <p className='text-base backdrop-blur'>Sci-Fi</p>
                        </div>
                    </div>
                    <div className='h-1/5'>
                        <p className='text-sm text-left w-1/5 backdrop-blur-md'>
                            Follow the mythic journey of Paul Atreides as he
                            unites with Chani and the Fremen while on a path of
                            revenge against the conspirators who destroyed his
                            family. Facing a choice between the love of his life
                            and the fate of the known universe, Paul endeavors
                            to prevent a terrible future only he can foresee.
                            Rating: 8.4 Release Date: 2024-02-27
                        </p>
                    </div>
                </div>
                <iframe
                    className='w-screen aspect-video pointer-events-none'
                    src='https://www.youtube.com/embed/U2Qp5pL3ovA?si=3-11PViLE_hg6MRI&autoplay=1&mute=1&controls=0&&showinfo=0&rel=0&modestbranding=1&playsinline=1&loop=1;'
                    title='YouTube video player'
                    frameBorder='0'
                    allowfullscreen></iframe>

                <div className='curve-container'></div>
            </div>

            <div className='bg-gradient-navy w-full h-full px-20 relative'>
                <MovieList title={'Recommend'} movies={nowPlaying}></MovieList>
                <MovieList title={'Popular'} movies={popular}></MovieList>
                <MovieList title={'Top Rated'} movies={toprated}></MovieList>
                <MovieList title={'Up Coming'} movies={upcoming}></MovieList>
            </div>
        </>
    );
}
{
    /* <iframe
    src='https://www.youtube.com/embed/WhY7uyc56ms?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=WhY7uyc56ms'
    title='YouTube video player'
    frameborder='0'
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    allowfullscreen></iframe>; */
}
