import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Bookmarks from "./pages/Bookmarks";
import ErrorPage from "./pages/ErrorPage";
// import App from './App';

export default function App() {
  return (
    // Used React Router library to create a single-page application, reduce page reloads for a better user experience, and organized file structure
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* when user navigates to the "/" path, Home component will be rendered by default */}
          <Route index element={<Home />} />
          {/* when user navigatges to "/bookmarks" path, Bookmarks component will be rendered */}
          <Route path="bookmarks" element={<Bookmarks />} />
          {/* when user navigates to any other paths, an error will display */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
