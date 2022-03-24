import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import Header from "./components/header/Header";
import GamePage from "./pages/game-page/GamePage";
import OrderPage from "./pages/order-page/OrderPage";

const App = () => {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
          <Routes>
                  <Route path="/*" element={<HomePage/>} />
                  <Route path="/app/:title" element={<GamePage/>} />
                  <Route path="/order" element={<OrderPage/>} />
          </Routes>
          </div>
      </BrowserRouter>
  );
};

export default App;
