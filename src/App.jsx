import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import { ROUTE_HOME } from "./utils/routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={`${ROUTE_HOME}`}
          element={
            <>
              <Home />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
