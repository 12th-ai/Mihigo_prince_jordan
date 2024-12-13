/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1E40AF', // Example primary color
                secondary: '#F59E0B', // Example secondary color
                primaryColor: '#37517e'
            },
        },
    },
    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        themes: ["light"],
    },
}