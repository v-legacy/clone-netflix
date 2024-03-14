/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'back-img':
                    "url('https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/88c1e911-2c1e-40ae-b622-8417a7a51726/ID-id-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg')",
            },
        },
    },
    plugins: [],
};
