"use client"

import { useState, useEffect } from "react";
import { PlusCircle, Book, Users, DollarSign, Edit, Trash2, ChevronDown, ChevronUp } from "lucide-react";

export default function Teach() {
    const [courses, setCourses] = useState([]);
    const [expandedCourse, setExpandedCourse] = useState(null);
    const [courseDetails, setCourseDetails] = useState({});
    const [showNewCourseForm, setShowNewCourseForm] = useState(false);
    const [newCourse, setNewCourse] = useState({
        title: "",
        description: "",
        modules: [{ name: "", links: [""] }],
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                setLoading(true);
                const userId = localStorage.getItem("u_id");
                const response = await fetch(`http://localhost:8443/getCoursesTaught?u_id=${userId}`);
                if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);
                const data = await response.json();
                if (data.status === "E") throw new Error(data.message);
                const courses = data.courses_taught.map(course => ({
                    id: course.course_id,
                    title: course.course_name,
                    description: "Description not provided",
                    students: 53,
                    earnings: 6434,
                    modules: [],
                    status: "active",
                }));
                setCourses(courses);

                // Fetch details for all courses
                for (const course of courses) {
                    await fetchCourseDetails(course.title, course.id);
                }
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch courses:", error);
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    const fetchCourseDetails = async (courseName, courseId) => {
        try {
            const response = await fetch(`http://localhost:8443/getCoursesByName?course_name=${encodeURIComponent(courseName)}`);
            if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);
            const data = await response.json();
            if (data.status === "E") throw new Error(data.message);
            const course = data.courses[0];
            const moduleNames = await getModuleNames(courseId);
            const modules = await Promise.all(
                moduleNames.map(async (moduleName) => {
                    const moduleDetails = await getModuleDetails(courseId, moduleName);
                    return {
                        moduleName,
                        ...moduleDetails,
                    };
                })
            );
            setCourseDetails((prevDetails) => ({
                ...prevDetails,
                [courseName]: { ...course, modules },
            }));
        } catch (error) {
            console.error("Failed to fetch course details:", error);
        }
    };

    const getModuleNames = async (courseId) => {
        try {
            const response = await fetch(`http://localhost:8443/getModuleNames?course_id=${courseId}`);
            if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);
            const data = await response.json();
            if (data.status === "E") throw new Error(data.message);
            return data.module_names;
        } catch (error) {
            console.error("Failed to fetch module names:", error);
            return [];
        }
    };

    const getModuleDetails = async (courseId, moduleName) => {
        try {
            const response = await fetch(`http://localhost:8443/getModuleDetails?course_id=${courseId}&module_name=${encodeURIComponent(moduleName)}`);
            if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);
            const data = await response.json();
            if (data.status === "E") throw new Error(data.message);
            return data.module;
        } catch (error) {
            console.error("Failed to fetch module details:", error);
            return {};
        }
    };

    const toggleCourseDetails = (courseName) => {
        if (expandedCourse === courseName) {
            setExpandedCourse(null);
        } else {
            setExpandedCourse(courseName);
        }
    };

    const handleAddModule = () => {
        setNewCourse({
            ...newCourse,
            modules: [...newCourse.modules, { name: "", links: [""] }],
        });
    };

    const handleModuleChange = (index, value) => {
        const updatedModules = [...newCourse.modules];
        updatedModules[index].name = value;
        setNewCourse({
            ...newCourse,
            modules: updatedModules,
        });
    };

    const handleLinkChange = (moduleIndex, linkIndex, value) => {
        const updatedModules = [...newCourse.modules];
        updatedModules[moduleIndex].links[linkIndex] = value;
        setNewCourse({
            ...newCourse,
            modules: updatedModules,
        });
    };

    const handleAddLink = (moduleIndex) => {
        const updatedModules = [...newCourse.modules];
        updatedModules[moduleIndex].links.push("");
        setNewCourse({
            ...newCourse,
            modules: updatedModules,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userId = localStorage.getItem("u_id");
            // Create the new course
            const response = await fetch(`http://localhost:8443/createCourse?course_name=${encodeURIComponent(newCourse.title)}&tags=${encodeURIComponent(newCourse.description)}&user_id=${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);
            const data = await response.json();
            if (data.status === "E") throw new Error(data.message);

            const courseId = data.course_id;
            // Create each module for the new course
            for (const module of newCourse.modules) {
                await fetch(`http://localhost:8443/createModule?course_id=${courseId}&module_name=${encodeURIComponent(module.name)}&module_cost=0&quiz_link=`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                // Create each lesson for the module
                for (const link of module.links) {
                    await fetch(`http://localhost:8443/createLesson?course_id=${courseId}&module_name=${encodeURIComponent(module.name)}&lesson_link=${encodeURIComponent(link)}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                }
            }

            const course = {
                id: courseId,
                ...newCourse,
                students: 0,
                earnings: 0,
                status: "draft",
            };
            setCourses([...courses, course]);
            setShowNewCourseForm(false);
            setNewCourse({ title: "", description: "", modules: [{ name: "", links: [""] }] });

        } catch (error) {
            console.error("Failed to create course:", error);
        }
    };

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
                {loading ? (
                    <div className="text-gray-200">Loading...</div>
                ) : (
                    courses.map((course) => (
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
                                        <span>{courseDetails[course.title]?.modules?.length || 0} Modules</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-gray-400">
                                        <Users className="w-5 h-5" />
                                        <span>Course co-ordinator: {courseDetails[course.title]?.teacher_name || "N/A"}</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-gray-400">
                                        <DollarSign className="w-5 h-5" />
                                        <span>Earnings: ${course.earnings}</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-gray-400">
                                        <PlusCircle className="w-5 h-5" />
                                        <span>Rating: {courseDetails[course.title]?.ratings || "N/A"}</span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    {courseDetails[course.title]?.modules?.map((module, index) => (
                                        <div key={index} className="bg-gray-700 rounded-lg p-4">
                                            <div className="flex items-center justify-between">
                                                <span className="flex items-center text-gray-200">
                                                    <span className="w-6 h-6 flex items-center justify-center bg-cyan-400 text-gray-900 rounded-full mr-3 text-sm">
                                                        {index + 1}
                                                    </span>
                                                    {module.module_name}
                                                </span>
                                            </div>
                                            <div className="mt-2 space-y-1">
                                                {module.links?.map((link, linkIndex) => (
                                                    <a key={linkIndex} href={link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                                                        {link}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => toggleCourseDetails(course.title)}
                                    className="flex items-center text-gray-400 mt-4 hover:text-gray-200 focus:outline-none"
                                >
                                    {expandedCourse === course.title ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                    <span className="ml-2">More Info</span>
                                </button>

                                {expandedCourse === course.title && courseDetails[course.title] && (
                                    <div className="mt-4 text-gray-400">
                                        <p><strong>Teacher Name:</strong> {courseDetails[course.title].teacher_name}</p>
                                        <p><strong>Total Cost:</strong> {courseDetails[course.title].total_cost}</p>
                                        <p><strong>Ratings:</strong> {courseDetails[course.title].ratings}</p>
                                        <p><strong>No of Modules:</strong> {courseDetails[course.title]?.modules?.length}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                )}
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
                                    {newCourse.modules.map((module, moduleIndex) => (
                                        <div key={moduleIndex} className="mb-4">
                                            <div className="flex items-center mb-2">
                                                <input
                                                    type="text"
                                                    value={module.name}
                                                    onChange={(e) => handleModuleChange(moduleIndex, e.target.value)}
                                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-gray-700 text-gray-200"
                                                    placeholder={`Module ${moduleIndex + 1}`}
                                                    required
                                                />
                                            </div>
                                            <label className="block text-sm font-medium text-gray-400 mb-1">Links</label>
                                            {module.links.map((link, linkIndex) => (
                                                <div key={linkIndex} className="flex items-center mb-2">
                                                    <input
                                                        type="text"
                                                        value={link}
                                                        onChange={(e) => handleLinkChange(moduleIndex, linkIndex, e.target.value)}
                                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-gray-700 text-gray-200"
                                                        placeholder={`Link ${linkIndex + 1}`}
                                                        required
                                                    />
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                onClick={() => handleAddLink(moduleIndex)}
                                                className="text-cyan-400 hover:text-cyan-300 flex items-center mt-2"
                                            >
                                                <PlusCircle className="w-4 h-4 mr-1" />
                                                Add Link
                                            </button>
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
    );
}