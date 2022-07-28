import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

function App() {
  //render DOM
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}> 
          {/* homepage  */}
          <Route path="/" element={<HomePage></HomePage>}></Route>
        
          {/* movies page */}
          <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
        </Route>

      </Routes>

      
    </Fragment>
  );
}

export default App;
