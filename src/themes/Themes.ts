import '../index.css'
import { createTheme } from '@mui/material';

export const themeOptions = createTheme({
    palette: {
        primary: {
            main: '#fef6e4',
        },
        secondary: {
            main: '#f3d2c1',
        },
        terciary: {
            main: '#8bd3dd'
        },
        quaternary: {
            main: '#001858'
        },
        button: {
            main: '#f582ae',
            textPrimary: '#001858',
            textSecondary: '#fffffe'
        },
        background: {
            default: '#fef6e4'
        },
        typography: {
            main: '#172c66',
            secondary: "#001858"
        }
    },
    typography: {
        fontFamily: 'Proxima-Nova, Arial, sans-serif',
    }
});