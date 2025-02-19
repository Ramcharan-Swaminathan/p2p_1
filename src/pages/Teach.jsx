"use client"

import { useState } from "react"
import { PlusCircle, Book, Users, DollarSign, Edit, Trash2 } from "lucide-react"

export default function Teach() {
    const [courses, setCourses] = useState([
        {
            id: 1,
            title: "JavaScript Fundamentals",
            description: "A comprehensive guide to JavaScript basics",
            students: 150,
            earnings: 1200,
            modules: ["Introduction to JavaScript", "Variables and Data Types", "Functions and Scope", "DOM Manipulation"],
            status: "active",
        },
        {
            id: 2,
            title: "React for Beginners",
            description: "Learn React.js from scratch",
            students: 89,
            earnings: 890,
            modules: ["React Basics", "Components", "State and Props", "Hooks"],
            status: "draft",
        },
    ])

    const [showNewCourseForm, setShowNewCourseForm] = useState(false)
    const [newCourse, setNewCourse] = useState({
        title: "",
        description: "",
        modules: [""],
    })

    const handleAddModule = () => {
        setNewCourse({
            ...newCourse,
            modules: [...newCourse.modules, ""],
        })
    }

    const handleModuleChange = (index, value) => {
        const updatedModules = [...newCourse.modules]
        updatedModules[index] = value
        setNewCourse({
            ...newCourse,
            modules: updatedModules,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const course = {
            id: courses.length + 1,
            ...newCourse,
            students: 0,
            earnings: 0,
            status: "draft",
        }
        setCourses([...courses, course])
        setShowNewCourseForm(false)
        setNewCourse({ title: "", description: "", modules: [""] })
    }

    return (
        <div className="max-w-full min-h-screen mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-900">
            {/* Header */}
            <div className="flex justify-between items-center mb-8 text-gray-200">
                <h1 className="text-2xl font-bold">Your Courses</h1>
                <button
                    onClick={() => setShowNewCourseForm(true)}
                    className="flex items-center bg-cyan-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-cyan-300 transition-colors"
                >
                    <PlusCircle className="w-5 h-5 mr-2" />
                    Create New Course
                </button>
            </div>

            {/* Course List */}
            <div className="grid grid-cols-1 gap-6">
                {courses.map((course) => (
                    <div key={course.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-xl font-semibold mb-2 text-gray-100">{course.title}</h2>
                                    <p className="text-gray-200">{course.description}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="p-2 text-gray-200 hover:text-cyan-400">
                                        <Edit className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 text-gray-200 hover:text-red-500">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="flex items-center space-x-2 text-gray-400">
                                    <Users className="w-5 h-5" />
                                    <span>{course.students} Students</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-400">
                                    <Book className="w-5 h-5" />
                                    <span>{course.modules.length} Modules</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-400">
                                    <DollarSign className="w-5 h-5" />
                                    <span>${course.earnings} Earned</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                {course.modules.map((module, index) => (
                                    <div key={index} className="flex items-center p-3 bg-gray-700 rounded-lg text-gray-200">
                                        <span className="w-6 h-6 flex items-center justify-center bg-cyan-400 text-gray-900 rounded-full mr-3 text-sm">
                                            {index + 1}
                                        </span>
                                        {module}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* New Course Form Modal */}
            {showNewCourseForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-gray-800 rounded-lg p-6 w-full max-w-2xl">
                        <h2 className="text-xl font-semibold mb-4 text-gray-200">Create New Course</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Course Title</label>
                                    <input
                                        type="text"
                                        value={newCourse.title}
                                        onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-gray-700 text-gray-200"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
                                    <textarea
                                        value={newCourse.description}
                                        onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-gray-700 text-gray-200"
                                        rows="3"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Modules</label>
                                    {newCourse.modules.map((module, index) => (
                                        <div key={index} className="flex mb-2">
                                            <input
                                                type="text"
                                                value={module}
                                                onChange={(e) => handleModuleChange(index, e.target.value)}
                                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-gray-700 text-gray-200"
                                                placeholder={`Module ${index + 1}`}
                                                required
                                            />
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={handleAddModule}
                                        className="text-cyan-400 hover:text-cyan-300 flex items-center mt-2"
                                    >
                                        <PlusCircle className="w-4 h-4 mr-1" />
                                        Add Module
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-end space-x-4 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setShowNewCourseForm(false)}
                                    className="px-4 py-2 text-gray-400 hover:text-gray-200"
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-cyan-300">
                                    Create Course
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}