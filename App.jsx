import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./css/App.css";
const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
