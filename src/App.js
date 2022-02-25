import { Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./layout";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Work from "./pages/work";
import NoMatch from "./pages/nomatch";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="work" element={<Work />} />

                {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    );
}

export default App;
