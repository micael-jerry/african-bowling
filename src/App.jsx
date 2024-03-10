import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import { ROUTE_HOME } from "./utils/routes";
import MyNavbar from "./components/navbar/MyNavbar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={`${ROUTE_HOME}`}
          element={
            <>
              <MyNavbar />
              <Home />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
