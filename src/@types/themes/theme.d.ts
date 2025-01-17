
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    terciary: Palette['primary'];
    quaternary: Palette['primary'];
    button: {
      main: string;
      textPrimary: string;
      textSecondary: string
    };
    typography: Palette['main']
  }

  interface PaletteOptions {
    terciary?: PaletteOptions['primary'];
    quaternary?: PaletteOptions['primary'];
    button?: {
      main: string;
      textPrimary: string;
      textSecondary: string
    };
    typography?: {
        main: string;
        secondary: string
    } 
  }
}
