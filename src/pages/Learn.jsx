"use client"

import { useState } from "react"
import { Search, BookOpen, Clock, Star, ChevronRight } from "lucide-react"

export default function Learn() {
    const [searchQuery, setSearchQuery] = useState("")

    const courses = [
        {
            id: 1,
            title: "Web Development Fundamentals",
            description: "Learn the basics of HTML, CSS, and JavaScript",
            instructor: "Sarah Johnson",
            duration: "8 weeks",
            level: "Beginner",
            rating: 4.8,
            enrolled: 1200,
            modules: ["HTML Basics", "CSS Styling", "JavaScript Fundamentals", "DOM Manipulation"],
        },
        {
            id: 2,
            title: "Python Programming",
            description: "Master Python programming from scratch",
            instructor: "David Chen",
            duration: "10 weeks",
            level: "Intermediate",
            rating: 4.9,
            enrolled: 950,
            modules: ["Python Basics", "Data Structures", "Object-Oriented Programming", "File Handling"],
        },
        // Add more courses as needed
    ]

    const filteredCourses = courses.filter((course) => course.title.toLowerCase().includes(searchQuery.toLowerCase()))

    return (
        <div className="max-w-full min-h-screen mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-900">
            {/* Search Section */}
            <div className="mb-8">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search for courses..."
                        className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-600 bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                </div>
            </div>

            {/* Course List */}
            <div className="grid grid-cols-1 gap-6">
                {filteredCourses.map((course) => (
                    <div
                        key={course.id}
                        className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-2 text-gray-200">{course.title}</h2>
                                    <p className="text-gray-400 mb-4">{course.description}</p>
                                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                                        <div className="flex items-center">
                                            <Clock className="w-4 h-4 mr-1" />
                                            {course.duration}
                                        </div>
                                        <div className="flex items-center">
                                            <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                                            {course.rating}
                                        </div>
                                        <div className="flex items-center">
                                            <BookOpen className="w-4 h-4 mr-1" />
                                            {course.enrolled} students
                                        </div>
                                    </div>
                                </div>
                                <button className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-cyan-300 transition-colors">
                                    Enroll Now
                                </button>
                            </div>

                            {/* Course Modules */}
                            <div className="mt-6">
                                <h3 className="font-semibold mb-3 text-gray-200">Course Modules</h3>
                                <div className="space-y-2">
                                    {course.modules.map((module, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                                        >
                                            <span className="flex items-center text-gray-200">
                                                <span className="w-6 h-6 flex items-center justify-center bg-cyan-400 text-gray-900 rounded-full mr-3 text-sm">
                                                    {index + 1}
                                                </span>
                                                {module}
                                            </span>
                                            <ChevronRight className="w-5 h-5 text-gray-400" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}