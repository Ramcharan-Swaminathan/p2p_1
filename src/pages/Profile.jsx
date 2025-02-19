import { Star, Trophy, BookOpen } from "lucide-react";

export default function Profile() {
    const user = {
        name: "John Doe",
        reputationStars: 120,
        pinnedCourses: [
            { id: 1, name: "React Fundamentals", progress: 75 },
            { id: 2, name: "Node.js Basics", progress: 60 },
            { id: 3, name: "Web Development", progress: 90 },
        ],
        coursesTeaching: [
            { id: 1, name: "JavaScript Basics", students: 150 },
            { id: 2, name: "React Hooks", students: 89 },
            { id: 3, name: "API Development", students: 120 },
        ],
    };

    return (
        <div className="min-h-screen max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-900">
            {/* User Stats */}
            <div className="bg-gray-800 rounded-lg shadow p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-100">{user.name}</h1>
                        <div className="flex items-center mt-2">
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                            <span className="ml-2 text-gray-400">{user.reputationStars} reputation stars</span>
                        </div>
                    </div>
                    <Trophy className="w-8 h-8 text-cyan-400" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {user.pinnedCourses.map((course) => (
                        <div key={course.id} className="bg-gray-700 rounded-lg p-4">
                            <h3 className="font-medium text-gray-100">{course.name}</h3>
                            <div className="mt-2">
                                <div className="w-full bg-gray-600 rounded-full h-2">
                                    <div className="bg-cyan-400 rounded-full h-2" style={{ width: `${course.progress}%` }} />
                                </div>
                                <span className="text-sm text-gray-400 mt-1">{course.progress}% Complete</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Courses Teaching */}
            <div className="bg-gray-800 rounded-lg shadow p-6">
                <div className="flex items-center mb-6">
                    <BookOpen className="w-6 h-6 text-cyan-400 mr-2" />
                    <h2 className="text-xl font-semibold text-gray-100">Courses Teaching</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {user.coursesTeaching.map((course) => (
                        <div key={course.id} className="border rounded-lg p-4 border-gray-700 bg-gray-700">
                            <h3 className="font-medium text-gray-100">{course.name}</h3>
                            <p className="text-sm text-gray-400 mt-1">{course.students} students enrolled</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}