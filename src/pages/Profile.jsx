"use client"

import { useState, useEffect } from "react";
import { Star, Trophy, BookOpen, ChevronDown, ChevronUp } from "lucide-react";

export default function Profile() {
    const [user, setUser] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const [courseDetails, setCourseDetails] = useState({});
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

    const fetchAllCourseDetails = async (courses) => {
        try {
            const details = {};
            for (const course of courses) {
                const response = await fetch(`http://localhost:8443/getCoursesByName?course_name=${encodeURIComponent(course.course_name)}`);
                if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);
                const data = await response.json();
                if (data.status === "E") throw new Error(data.message);
                const courseData = data.courses[0];
                const moduleCount = await getModuleCount(courseData.course_id);
                details[course.course_name] = { ...courseData, no_of_modules: moduleCount };
            }
            setCourseDetails(details);
        } catch (err) {
            setError(err.message);
        }
    };

    const getModuleCount = async (courseId) => {
        try {
            const response = await fetch(`http://localhost:8443/getModuleNames?course_id=${courseId}`);
            if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);
            const data = await response.json();
            if (data.status === "E") throw new Error(data.message);
            return data.module_names.length;
        } catch (err) {
            setError(err.message);
            return 0;
        }
    };

    const toggleAllCourses = () => {
        setExpanded(!expanded);
        if (!expanded) {
            fetchAllCourseDetails([...user.course_learnt, ...user.courses_taught]);
        }
    };

    if (!user) {
        return <div className="min-h-screen max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-900 text-gray-200">Loading...</div>;
    }

    return (
        <div className="min-h-screen max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-900 text-gray-200">
            {/* User Stats */}
            <div className="bg-gray-800 rounded-lg shadow p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-100">{user.uname}</h1>
                        <div className="flex items-center mt-2">
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                            <span className="ml-2 text-gray-400">{user.stars} stars</span>
                            <span className="ml-2 text-gray-400">{user.reputation} reputation</span>
                        </div>
                    </div>
                    <Trophy className="w-8 h-8 text-cyan-400" />
                </div>
            </div>

            <button
                onClick={toggleAllCourses}
                className="mb-6 px-4 py-2 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-300 transition-colors"
            >
                {expanded ? "Collapse All Courses" : "Expand All Courses"}
            </button>

            {/* Courses Learnt */}
            <div className="bg-gray-800 rounded-lg shadow p-6 mb-8">
                <div className="flex items-center mb-6">
                    <BookOpen className="w-6 h-6 text-cyan-400 mr-2" />
                    <h2 className="text-xl font-semibold text-gray-100">Courses Learnt</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {user.course_learnt.map((course) => (
                        <div key={course.course_id} className="bg-gray-700 rounded-lg p-4">
                            <h3 className="font-medium text-gray-100">{course.course_name}</h3>
                            <div className="mt-2">
                                <div className="w-full bg-gray-600 rounded-full h-2">
                                    <div className="bg-cyan-400 rounded-full h-2" style={{ width: `${course.completion}%` }} />
                                </div>
                                <span className="text-sm text-gray-400 mt-1">{course.completion}% Complete</span>
                            </div>
                            {expanded && courseDetails[course.course_name] && (
                                <div className="mt-4 text-gray-400">
                                    <p><strong>Teacher Name:</strong> {courseDetails[course.course_name].teacher_name}</p>
                                    <p><strong>Total Cost:</strong> {courseDetails[course.course_name].total_cost}</p>
                                    <p><strong>Ratings:</strong> {courseDetails[course.course_name].ratings}</p>
                                    <p><strong>No of Modules:</strong> {courseDetails[course.course_name].no_of_modules}</p>
                                </div>
                            )}
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
                    {user.courses_taught.map((course) => (
                        <div key={course.course_id} className="border rounded-lg p-4 border-gray-700 bg-gray-700">
                            <div className="flex justify-between items-center">
                                <h3 className="font-medium text-gray-100">{course.course_name}</h3>
                            </div>
                            {expanded && courseDetails[course.course_name] && (
                                <div className="mt-4 text-gray-400">
                                    <p><strong>Teacher Name:</strong> {courseDetails[course.course_name].teacher_name}</p>
                                    <p><strong>Total Cost:</strong> {courseDetails[course.course_name].total_cost}</p>
                                    <p><strong>Ratings:</strong> {courseDetails[course.course_name].ratings}</p>
                                    <p><strong>No of Modules:</strong> {courseDetails[course.course_name].no_of_modules}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}