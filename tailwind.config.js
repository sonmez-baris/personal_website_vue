module.exports = {
    //mode: 'jit',
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
    purge: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}'
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                bsonmezprimary: '#6D6E70',
                bsonmezsecondary: '#F1F1F1',
                bsonmezline: 'E6E6E6'
            },
            spacing: {
                '150': '37.5rem',
            },
            borderWidth: {
                '1': '1px',
            }
            
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
