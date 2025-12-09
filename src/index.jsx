import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DrupalCoder } from "./screens/DrupalCoder";

createRoot(document.getElementById("app")).render(
    <StrictMode>
        <DrupalCoder />
    </StrictMode>,
);
