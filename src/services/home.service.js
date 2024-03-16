import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
export const getNowPlaying = async (api_key, token, callback) => {
    await axios
        .get(
            `${baseUrl}/movie/now_playing?api_key=${api_key}&language=en-US&page=1`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        .then((response) => {
            callback(response.data.results);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getPopular = async (Authorization, callback) => {
    await axios
        .get(`${baseUrl}/movie/popular?language=en-US&page=1`, {
            headers: {
                Authorization: `Bearer ${Authorization}`,
            },
        })
        .then((response) => {
            callback(response.data.results);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getTopRated = async (Authorization, callback) => {
    await axios
        .get(`${baseUrl}/movie/top_rated?language=en-US&page=1`, {
            headers: {
                Authorization: `Bearer ${Authorization}`,
            },
        })
        .then((response) => {
            callback(response.data.results);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getUpcoming = async (Authorization, callback) => {
    await axios
        .get(`${baseUrl}/movie/upcoming?language=en-US&page=1`, {
            headers: {
                Authorization: `Bearer ${Authorization}`,
            },
        })
        .then((response) => {
            callback(response.data.results);
        })
        .catch((error) => {
            console.log(error);
        });
};
