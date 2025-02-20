import { Link } from "react-router-dom";
import { BookOpen, GraduationCap, Star, User } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const userId = localStorage.getItem("u_id");
                const response = await fetch(`http://localhost:8443/getUserDetails?u_id=${userId}`);
                if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);
                const data = await response.json();
                if (data.status === "E") throw new Error(data.message);
                setUser(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchUserDetails();
    }, []);

    return (
        <nav className="bg-gray-900 shadow-sm h-10 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-full items-cente">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <span className="text-xl font-bold text-cyan-400">PeerLearn</span>
                        </Link>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link
                                to="/learn"
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-200 hover:text-cyan-400"
                            >
                                <BookOpen className="w-4 h-4 mr-2" />
                                Learn
                            </Link>
                            <Link
                                to="/teach"
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-200 hover:text-cyan-400"
                            >
                                <GraduationCap className="w-4 h-4 mr-2" />
                                Teach
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <Link
                            to="/profile"
                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-gray-200 hover:text-cyan-400"
                        >
                            <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" /> {/* Yellow Star icon */}
                            {user && <span>{user.stars}</span>} {/* Display user's stars */}
                            <User className="w-4 h-4 ml-2" />
                            Profile
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}