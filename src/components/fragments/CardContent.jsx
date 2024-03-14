const CardContent = ({ movie }) => {
    return (
        <>
            <div className='w-52 h-52 pr-5 hover:scale-125 ease-in-out duration-500'>
                <img
                    className='w-full h-full'
                    src={`https://image.tmdb.org/t/p/w500${movie}`}
                    alt='image'
                />
                {/* <img
                    src='https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg'
                    alt='image'
                /> */}
            </div>
        </>
    );
};

export default CardContent;
