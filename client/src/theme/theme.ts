import { createTheme } from '@mui/material';
import { orange, purple, red } from '@mui/material/colors';

declare module '@mui/material/styles' {
	interface Palette {
		green: React.CSSProperties['color'];
	}

	interface PaletteOptions {
		green: React.CSSProperties['color'];
	}
}

const primaryColor = purple[500];
const secondaryColor = orange[500];
const errorColor = red[500];

const theme = createTheme({
	palette: {
		primary: {
			main: primaryColor,
		},
		secondary: {
			main: secondaryColor,
		},
		error: {
			main: errorColor,
		},
		green: '#49B737',
	},
	components: {
		MuiFab: {
			styleOverrides: {
				secondary: {
					':hover': {
						backgroundColor: orange[700],
					},
				},
			},
		},
	},
	typography: {
		h2: {
			fontSize: '3em',
		},
	},
});

export default theme;
