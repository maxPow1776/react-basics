import React from "react";
import "antd/dist/antd.css";
import Info from "./pages/Info";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import { ThemeProvider } from "./providers/ThemeProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="info/:id" element={<Info />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
