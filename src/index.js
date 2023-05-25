import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home/Home";
import DoTask from "./pages/Home/DoTask";
import TaskContext from "./TaskContext";
import SubTask from "./pages/Home/SubTask";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <TaskContext>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<SubTask />} />
        <Route path="/dotask" element={<DoTask />} />
      </Routes>
    </TaskContext>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
