import { BrowserRouter, Routes, Route } from "react-router-dom";

import All from "./components/content/contentAll.jsx";
import FullStackDevelopment from "./components/content/contentFSD.jsx";
import Career from "./components/content/career.jsx";
import DataScience from "./components/content/contentDataScience.jsx";
import CyberSecurity from "./components/content/contentCyberSecurity.jsx";

// import course from "./components/courseContent.json";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<All />} />
          <Route
            path="/Full-Stack-Development"
            element={<FullStackDevelopment />}
          />
          <Route path="/Data-Science" element={<DataScience />} />
          <Route path="/Cyber-Security" element={<CyberSecurity />} />
          <Route path="/Career" element={<Career />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
