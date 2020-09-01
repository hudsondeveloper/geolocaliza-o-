import React, { useState } from "react";
import {
  Button,
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core";
import Home from "./home";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "red",
    height: "100vh",
  },
}));

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#f44336",
      },
      secondary: {
        main: "#3EA6FF",
      },
      background: {
        default: darkMode ? "#232323" : "#fff",
        dark: darkMode ? "#181818" : "#f4f6f8",
        paper: darkMode ? "#232323" : "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode}></Home>
    </ThemeProvider>
  );
}

export default App;
