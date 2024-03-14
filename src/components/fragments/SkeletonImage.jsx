export default function SkeletonImage() {
    return (
        <>
            <div className='flex items-center bg-black w-1/6 max-h-96 h-96 mx-2 my-2 shadow-md shadow-red-500 rounded-md overflow-hidden animate-pulse'>
                <img
                    className='m-auto object-cover-fit bg-center max-h-99% w-1/2 '
                    src='https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg'
                    alt=''
                />
                {/* <h2 className='text-white text-2xl'>LOADING</h2> */}
            </div>
        </>
    );
}
