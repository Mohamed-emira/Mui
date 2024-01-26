import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./Components/root/Root";
import Create from "./Components/2-create/Create";
import Profile from "./Components/3-profile/Profile";
import Setting from "./Components/4-setting/Setting";
import CssBaseline from "@mui/material/CssBaseline";
import { getDesignTokens } from "./theme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo, useState } from "react";
import Home from "./Components/1-home/Home";
import Error404 from "./Components/error404/Error404";
import LogOut from "./Components/5-logout/LogOut";
function App() {
  const [mode, setMode] = useState(
    Boolean(localStorage.getItem("currentMode"))
      ? localStorage.getItem("currentMode")
      : "dark"
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Root setMode={setMode} />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Setting" element={<Setting />} />
            <Route path="/LogOut" element={<LogOut />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
