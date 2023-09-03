import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Create from "./components/Create";
import {HashRouter as Router, Routes, Route} from "react-router-dom"
import BlogDetails from "./components/blogDetails";
import NotFound from "./components/notFound";


function App() {

  return (
    <Router>
        <div className="app">
            <Navbar/>
            <main className="main">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/create" element={<Create/>}/>
                    <Route path="/blogs/:id" element={<BlogDetails />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
                
            </main>
            
        </div>
    </Router>
  );
}

export default App;