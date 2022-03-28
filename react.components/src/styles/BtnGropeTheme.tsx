import { createTheme } from '@mui/material';

const BtnGropeTheme = createTheme({
  palette: {
    transparent: {
      main: 'rgba(255,255,255,0)' /*'#757575'*/,
      contrastText: 'rgba(255,255,255,0)' /*'#CECECE'*/,
    },
  },
});
declare module '@mui/material/styles' {
  interface Palette {
    transparent: Palette['primary'];
  }

  interface PaletteOptions {
    transparent?: PaletteOptions['primary'];
  }
}
declare module '@mui/material/ButtonGroup' {
  interface ButtonGroupPropsColorOverrides {
    transparent: true;
  }
}

export default BtnGropeTheme;
