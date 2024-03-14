import netflix from '../../assets/netflix_2015_logo.svg';
export default function Header() {
    return (
        <>
            <div className='bg-black relative'>
                <div className='absolute top-0 left-0 w-full z-50'>
                    <nav className='h- bg-gradient-to-b from-black to-transparent backdrop-blur-md '>
                        <div className='mx-auto w-full px-4 sm:px-6 lg:px-8'>
                            <div className='flex h-16 items-center justify-between'>
                                <div className='pt-5 w-2/6 md:w-2/12 flex justify-end items-center'>
                                    <div>
                                        <img
                                            className='w-36'
                                            src={netflix}
                                            alt=''
                                        />
                                    </div>
                                </div>
                                <div className='pt-5 md:w-5/12 flex justify-center '>
                                    <select
                                        className='block appearance-none m-2 px-10 py-2 rounded-md bg-slate-800 text-white '
                                        name=''
                                        id=''>
                                        <option value=''>English</option>
                                        <option value=''>
                                            Bahasa Indonesia
                                        </option>
                                    </select>

                                    <button className=' bg-red-500 text-white m-2 px-4 rounded-md text-sm hover:bg-red-700'>
                                        Masuk
                                    </button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
