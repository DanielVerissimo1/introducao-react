import React from "react";
import {createRoot } from "react-dom/client";
import {App} from "./App.jsx"
const rootElemente = document.getElementById("root")

const root = createRoot(rootElemente)

root.render(<App/>)