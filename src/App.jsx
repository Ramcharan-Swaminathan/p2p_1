import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Profile from "./pages/Profile"
import HomePage from "./pages/HomePage"
import Learn from "./pages/Learn"
import Teach from "./pages/Teach"
import RoadMap from "./pages/RoadMap"

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/learn" element={<Learn />} />
                    <Route path="/teach" element={<Teach />} />
                    <Route path="/roadmap" element={<RoadMap />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App

