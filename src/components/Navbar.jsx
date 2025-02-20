import { Link } from "react-router-dom";
import {BookOpen, GraduationCap, Star, User} from "lucide-react";

export default function Navbar() {
    return (
        <nav className="bg-gray-900 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
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
                            <User className="w-4 h-4 mr-2" />
                            Profile
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}