import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { CssBaseline } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
	palette: {
		others: {
			success: "#2AC769",
			pending: "#FDBC3F",
			error: "#FB4E4E"
		},
		background: {
			default: "#e1e0ff"
		}
	},
	typography: {
		fontFamily: ["Brandon Grotesque"].join(",")
	},
	overrides: {
		MuiCssBaseline: {
			"@global": {
				html: {
					margin: "0",
					padding: "0"
				}
			}
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
