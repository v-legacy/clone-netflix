import axios from 'axios';

const detailMoviesLoader = async ({ params: { id } }) => {
    // const { id } = useParams();
    const Authorization =
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTIwNDdmMWU5MDVhZTMwZTlhZmYyMGVkOTU3NmYzNiIsInN1YiI6IjY1ZWQ1ZDM5MWFjMjkyMDE4NjZhMmI4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7TK1Y1CoSPAfMqzAQRaykp1K0cTjaMJkj4iBhcRPazE';
    const api_key = '3b9b9a7b5b5d9e6b4f1d8e9b9c5f3d2e';
    let endpoint = [
        `https://api.themoviedb.org/3/movie/${id}?`,
        `https://api.themoviedb.org/3/movie/${id}/similar?`,
    ];

    const response = await axios
        .all(
            endpoint.map(
                async (url) =>
                    await axios.get(url, {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization,
                        },
                        params: {
                            api_key,
                        },
                    })
            )
        )
        .then(([{ data: detail }, { data: similar }]) => ({
            detail,
            similar,
        }));
    // console.log(response.data.results);

    return response;
};

export default detailMoviesLoader;
