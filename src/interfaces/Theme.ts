export interface MuiTheme {
    palette: {
        primary: {
            main: string;
        };
        secondary: {
            main: string;
        };
        terciary: {
            main: string
        };
        quaternary: {
            main: string;
        }
        button: {
            main: string;
            text: string;
        };
        background: {
            default: string
        };
        typography: {
            main: string
            secondary: string
        }
    };
    typography: {
        fontFamily: string;
    };
}