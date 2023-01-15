import { Landing, Register, Error, Dashboard } from "./pages";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AddJob, AllJobs, Profile, SharedLayout, Stats } from './pages/dashboard'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>dashboard</div>}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/landing" element={<Landing/>}/>
        <Route path="/*" element={<Error />}/>
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
