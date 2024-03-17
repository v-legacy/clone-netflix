import Header from '../components/fragments/Header';

export const Login = () => {
    const handleModal = () => {
        const modal = document.getElementById('modal');
        modal.classList.toggle('hidden');
    };
    return (
        <>
            <div className='w-full h-full relative overflow-hidden'>
                {/* <Header /> */}
                <div className='w-full h-screen bg-back-img'>
                    <div className='relative'>
                        <div className='w-full h-screen bg-black/40 absolute z-10'>
                            <div className='flex items-start justify-center w-full h-screen mt-10'>
                                <div className='absolute z-30 bg-black/70 text-slate-200 px-4 w-1/4 h-2/3 rounded-md'>
                                    <div className='mt-5 h-full px-4'>
                                        <h1 className='text-3xl font-bold my-10'>
                                            Sign In
                                        </h1>
                                        <div className='mt-10 mx-auto flex justify-center'>
                                            <input
                                                className='mt-2 w-4/5 h-[50px] bg-transparent text-slate-200 ring-1 ring-offset-slate-300 rounded-md px-2 border-2'
                                                type='text'
                                                placeholder='Email or Phone Number'
                                            />
                                        </div>
                                        <div className='mt-2 mx-auto flex justify-center'>
                                            <input
                                                className='mt-2 w-4/5 h-[50px] bg-transparent text-slate-200 ring-1 ring-offset-slate-300 rounded-md px-2 border-2'
                                                type='text'
                                                placeholder='Password'
                                                id='password'
                                            />
                                        </div>
                                        <div className='mt-5 mx-auto flex justify-center'>
                                            <button
                                                className='w-4/5 h-[50px] bg-red-600 text-slate-200 rounded-md px-2'
                                                onClick={handleModal}>
                                                Sign In
                                            </button>
                                        </div>
                                        <div className='mt-5 mx-auto flex flex-row justify-center'>
                                            <a
                                                href=''
                                                className='w-50% h-[50px] text-slate-200 '
                                                onClick={handleModal}>
                                                Forget Password
                                            </a>
                                        </div>
                                        <div className='mt-5 w-full mx-auto flex flex-row justify-start'>
                                            <input type='checkbox' />
                                            <span>Ingat Saya</span>
                                        </div>
                                        <div className='mt-5 w-full mx-auto flex flex-row justify-start'>
                                            <p>
                                                {' '}
                                                Baru di Netflix? &nbsp;
                                                <span className='font-bold'>
                                                    Daftar sekarang
                                                </span>
                                                . Halaman ini dilindungi oleh
                                                reCAPTCHA Google untuk
                                                memastikan kamu bukan bot
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-1/6 bg-gradient-to-t from-black to-transparent absolute z-40 bottom-0'>
                    <div className='p-2 w-full text-white mx-auto flex justify-start ml-28'>
                        <ul className='w-2/6 flex flex-wrap flex-row gap-5 justify-start mr-15 mt-10'>
                            <li
                                data-layout='item'
                                className='default-ltr-cache-text8n ew2l6qe0'>
                                <a
                                    role='link'
                                    data-uia='footer-link'
                                    className='e1xphksk0 default-ltr-cache-ncd99a e1ff4m3w1'
                                    href='https://help.netflix.com/support/412'>
                                    Tanya Jawab
                                </a>
                            </li>
                            <li
                                data-layout='item'
                                className='default-ltr-cache-text8n ew2l6qe0'>
                                <a
                                    role='link'
                                    data-uia='footer-link'
                                    className='e1xphksk0 default-ltr-cache-ncd99a e1ff4m3w1'
                                    href='https://help.netflix.com'>
                                    Pusat Bantuan
                                </a>
                            </li>
                            <li
                                data-layout='item'
                                className='default-ltr-cache-text8n ew2l6qe0'>
                                <a
                                    role='link'
                                    data-uia='footer-link'
                                    className='e1xphksk0 default-ltr-cache-ncd99a e1ff4m3w1'
                                    href='https://help.netflix.com/legal/termsofuse'>
                                    Ketentuan Penggunaan
                                </a>
                            </li>
                            <li
                                data-layout='item'
                                className='default-ltr-cache-text8n ew2l6qe0'>
                                <a
                                    role='link'
                                    data-uia='footer-link'
                                    className='e1xphksk0 default-ltr-cache-ncd99a e1ff4m3w1'
                                    href='https://help.netflix.com/legal/privacy'>
                                    Privasi
                                </a>
                            </li>
                            <li
                                data-layout='item'
                                className='default-ltr-cache-text8n ew2l6qe0'>
                                <a
                                    role='link'
                                    data-uia='footer-link'
                                    className='e1xphksk0 default-ltr-cache-ncd99a e1ff4m3w1'
                                    href='#'>
                                    Preferensi Cookie
                                </a>
                            </li>
                            <li
                                data-layout='item'
                                className='default-ltr-cache-text8n ew2l6qe0'>
                                <a
                                    role='link'
                                    data-uia='footer-link'
                                    className='e1xphksk0 default-ltr-cache-ncd99a e1ff4m3w1'
                                    href='https://help.netflix.com/legal/corpinfo'>
                                    Informasi Perusahaan
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
