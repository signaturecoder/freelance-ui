import { createTheme, responsiveFontSizes } from '@mui/material/styles'


export let theme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF'
        },
        secondary: {
            main: '#02183A'
        }
    },
    typography: {
        fontFamily: 'Epilogue',
      
     },
     shape: {
        borderRadius: 0
     },
})
theme = responsiveFontSizes(theme);
export default theme;