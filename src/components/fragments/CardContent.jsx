import { Link } from 'react-router-dom';
const CardContent = ({ id, movie }) => {
    return (
        <>
            <div className='w-52 h-52 pr-5 hover:scale-125 ease-in-out duration-500'>
                <Link to={`/movies/${id}`}>
                    <img
                        className='w-full h-full'
                        src={`https://image.tmdb.org/t/p/w500${movie}`}
                        alt='image'
                    />
                </Link>

                {/* <img
                    src='https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg'
                    alt='image'
                /> */}
            </div>
        </>
    );
};

export default CardContent;
