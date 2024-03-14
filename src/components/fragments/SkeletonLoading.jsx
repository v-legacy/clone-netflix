export default function SkeletonLoading() {
    return (
        <div className='w-4/5 h-2/3 bg-slate-900 mt-24 flex justify-between rounded-lg overflow-hidden shadow-sm shadow-red-500'>
            <div className='w-2/5 p-4 bg-gray-700 animate-pulse flex justify-center items-center'>
                <img
                    className='w-1/4'
                    src='https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg'
                    alt=''
                />
            </div>
            <div className='w-full'>
                <div className='w-2/5 h-[35px] mt-5 ml-5 bg-slate-600 rounded-xl animate-pulse'></div>
                <div className='w-3/4 h-[25px] mt-20 ml-5 bg-slate-600 rounded-xl animate-pulse'></div>
                <div className='w-4/5 h-[25px] mt-5 ml-5 bg-slate-600 rounded-xl animate-pulse'></div>
                <div className='w-5/6 h-[25px] mt-5 ml-5 bg-slate-600 rounded-xl animate-pulse'></div>
                <div className='w-3/4 h-[25px] mt-5 ml-5 bg-slate-600 rounded-xl animate-pulse'></div>
                <div className='w-4/5 h-[25px] mt-5 ml-5 bg-slate-600 rounded-xl animate-pulse'></div>
                <div className='w-3/5 h-[25px] mt-5 ml-5 bg-slate-600 rounded-xl animate-pulse'></div>
                <div className='w-2/4 h-[25px] mt-5 ml-5 bg-slate-600 rounded-xl animate-pulse'></div>
            </div>

            {/* <div className='w-full h-[40px] mt-5 ml-5 text-white flex flex-row justify-start '>
                    <div className='w-4/5 bg-slate-600 rounded-xl animate-pulse'></div>
                </div> */}
        </div>
    );
}
