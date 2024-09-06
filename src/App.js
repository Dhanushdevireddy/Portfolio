import React from "react";
import Bio from "./components/Bio";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <div style={{marginTop:"20px"}} >
      <Bio/>
      <Experience />
      <Projects />
      <Education />
    </div>
  );
}

export default App;
