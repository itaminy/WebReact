import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DrupalCoder } from "./screens/DrupalCoder";

createRoot(document.getElementById("app")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                {/* Главная страница */}
                <Route path="/" element={<DrupalCoder />} />

                {/* Пример страницы с параметром */}
                <Route path="/page/:id" element={<DrupalCoder />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
