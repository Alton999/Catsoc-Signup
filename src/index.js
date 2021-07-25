import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { CssBaseline } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
	overrides: {
		MuiCssBaseline: {
			"@global": {
				html: {
					margin: "0",
					padding: "0"
				}
			}
		}
	},
	palette: {
		background: {
			default: "#e1e0ff"
		}
	}
});

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<App />
	</ThemeProvider>,
	document.getElementById("root")
);
