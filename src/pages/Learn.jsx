"use client"

import { useState, useEffect } from "react"
import { Search, BookOpen, Clock, Star, ChevronRight, ChevronDown, MessageCircle, ThumbsUp, Video } from 'lucide-react'

export default function Learner() {
    const [searchQuery, setSearchQuery] = useState("")
    const [expandedModule, setExpandedModule] = useState(null)
    const [comments, setComments] = useState({})
    const [newComment, setNewComment] = useState("")
    const [scheduledMeets, setScheduledMeets] = useState({})

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
            links: [
                ["https://www.youtube.com/embed/S0EUmPQuEpQ?si=jMfDyfrsJNNyTqbB"],
                ["https://www.youtube.com/embed/S0EUmPQuEpQ?si=jMfDyfrsJNNyTqbB"],
                ["https://www.youtube.com/embed/S0EUmPQuEpQ?si=jMfDyfrsJNNyTqbB"],
                ["https://www.youtube.com/embed/S0EUmPQuEpQ?si=jMfDyfrsJNNyTqbB"]
            ]
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
            links: [
                ["https://www.youtube.com/embed/S0EUmPQuEpQ?si=jMfDyfrsJNNyTqbB"],
                ["https://www.youtube.com/embed/S0EUmPQuEpQ?si=jMfDyfrsJNNyTqbB"],
                ["https://www.youtube.com/embed/S0EUmPQuEpQ?si=jMfDyfrsJNNyTqbB"],
                ["https://www.youtube.com/embed/S0EUmPQuEpQ?si=jMfDyfrsJNNyTqbB"]
            ]
        },
    ]

    const filteredCourses = courses.filter((course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const handleCommentSubmit = (courseId) => {
        if (newComment.trim() !== "") {
            setComments((prevComments) => ({
                ...prevComments,
                [courseId]: [
                    ...(prevComments[courseId] || []),
                    { id: Date.now(), text: newComment, upvotes: 0 }
                ]
            }))
            setNewComment("")
        }
    }


    const handleUpvote = (courseId, commentId) => {
        setComments((prevComments) => ({
            ...prevComments,
            [courseId]: prevComments[courseId].map((comment) =>
                comment.id === commentId ? { ...comment, upvotes: comment.upvotes + 1 } : comment
            )
        }))
    }

    const scheduleMeet = (courseId) => {
        const meetLink = `https://meet.google.com/${Math.random().toString(36).substring(7)}`
        setScheduledMeets((prevMeets) => ({
            ...prevMeets,
            [courseId]: meetLink
        }))
    }

    useEffect(() => {
        // Simulating API call to fetch comments and scheduled meets
        const fetchData = async () => {
            // In a real application, you would make API calls to your Spring Boot backend here
            // For now, we'll use mock data
            setComments({
                1: [
                    { id: 1, text: "Great course! Very informative.", upvotes: 5 },
                    { id: 2, text: "The instructor explains concepts clearly.", upvotes: 3 }
                ],
                2: [
                    { id: 3, text: "Python is fun to learn!", upvotes: 7 },
                    { id: 4, text: "I'm enjoying the hands-on projects.", upvotes: 4 }
                ]
            })
            setScheduledMeets({
                1: "https://meet.google.com/kea-iiyt-hhk",
                2: "https://meet.google.com/pen-pdpx-ddg"
            })
        }

        fetchData()
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold text-center mb-12">Learn and Grow</h1>

                {/* Search Section */}
                <div className="mb-12">
                    <div className="relative max-w-xl mx-auto">
                        <input
                            type="text"
                            placeholder="Search for courses..."
                            className="w-full px-4 py-3 pl-12 rounded-full border-2 border-cyan-400 bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition duration-300"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Search className="absolute left-4 top-3.5 h-5 w-5 text-cyan-400" />
                    </div>
                </div>

                {/* Course List */}
                <div className="grid grid-cols-1 gap-12">
                    {filteredCourses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
                        >
                            <div className="p-8">
                                <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                                    <div>
                                        <h2 className="text-3xl font-bold mb-3 text-cyan-400">{course.title}</h2>
                                        <p className="text-gray-300 mb-4 text-lg">{course.description}</p>
                                        <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
                                            <div className="flex items-center">
                                                <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                                                {course.duration}
                                            </div>
                                            <div className="flex items-center">
                                                <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
                                                {course.rating}
                                            </div>
                                            <div className="flex items-center">
                                                <BookOpen className="w-4 h-4 mr-2 text-cyan-400" />
                                                {course.enrolled} students
                                            </div>
                                        </div>
                                    </div>
                                    <button className="mt-4 md:mt-0 bg-cyan-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-cyan-300 transition-colors duration-300">
                                        Enroll Now
                                    </button>
                                </div>

                                {/* Course Modules */}
                                <div className="mt-8">
                                    <h3 className="text-xl font-semibold mb-4 text-gray-200">Course Modules</h3>
                                    <div className="space-y-3">
                                        {course.modules.map((module, index) => (
                                            <div key={index}>
                                                {/* Module Button */}
                                                <div
                                                    className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300 cursor-pointer"
                                                    onClick={() =>
                                                        setExpandedModule(expandedModule === `${course.id}-${index}` ? null : `${course.id}-${index}`)
                                                    }
                                                >
                          <span className="flex items-center text-gray-200">
                            <span className="w-8 h-8 flex items-center justify-center bg-cyan-400 text-gray-900 rounded-full mr-4 text-sm font-semibold">
                              {index + 1}
                            </span>
                              {module}
                          </span>
                                                    {expandedModule === `${course.id}-${index}` ? (
                                                        <ChevronDown className="w-5 h-5 text-cyan-400" />
                                                    ) : (
                                                        <ChevronRight className="w-5 h-5 text-cyan-400" />
                                                    )}
                                                </div>
                                                {/* Links Dropdown */}
                                                {expandedModule === `${course.id}-${index}` && (
                                                    <div className="p-4 bg-gray-600 rounded-b-lg text-gray-200">
                                                        <h4 className="text-lg font-medium mb-3">Resources:</h4>
                                                        <div className="space-y-3">
                                                            {course.links[index].map((link, linkIndex) => (
                                                                <div key={linkIndex} className="aspect-w-16 aspect-h-9">
                                                                    <iframe
                                                                        src={link}
                                                                        title="YouTube video player"
                                                                        frameBorder="0"
                                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                        allowFullScreen
                                                                        className="w-full h-full rounded-lg"
                                                                    ></iframe>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Google Meet Integration */}
                                <div className="mt-12">
                                    <h3 className="text-xl font-semibold mb-4 text-gray-200">Schedule 1-on-1 Session</h3>
                                    <div className="bg-gray-700 rounded-lg p-6">
                                        {scheduledMeets[course.id] ? (
                                            <div>
                                                <p className="text-gray-200 mb-4">Your scheduled Google Meet session:</p>
                                                <a
                                                    href={scheduledMeets[course.id]}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors duration-300 inline-flex items-center"
                                                >
                                                    <Video className="w-5 h-5 mr-2" />
                                                    Join Google Meet
                                                </a>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => scheduleMeet(course.id)}
                                                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300"
                                            >
                                                Schedule a Meet with Instructor
                                            </button>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <iframe
                                        src="https://docs.google.com/forms/d/e/1FAIpQLScJ9pihMvvdHJ2j8QkID5tCFbpdc-nwfm871x_F2-5zAfqD9g/viewform?embedded=true"
                                        width="640" height="779" frameBorder="0" marginHeight="0"
                                        marginWidth="0">Loading…
                                    </iframe>
                                </div>
                                {/* Discussion Forum */}
                                <div className="mt-12">
                                    <h3 className="text-xl font-semibold mb-4 text-gray-200">Discussion Forum</h3>
                                    <div className="bg-gray-700 rounded-lg p-6">
                                        <div className="mb-4">
                      <textarea
                          className="w-full px-3 py-2 text-gray-200 border rounded-lg focus:outline-none bg-gray-600 focus:ring-2 focus:ring-cyan-400"
                          rows="3"
                          placeholder="Share your thoughts..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                      ></textarea>
                                            <button
                                                className="mt-2 bg-cyan-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition-colors duration-300"
                                                onClick={() => handleCommentSubmit(course.id)}
                                            >
                                                Post Comment
                                            </button>
                                        </div>
                                        <div className="space-y-4">
                                            {comments[course.id]?.map((comment) => (
                                                <div key={comment.id} className="bg-gray-600 rounded-lg p-4">
                                                    <p className="text-gray-200 mb-2">{comment.text}</p>
                                                    <div className="flex items-center justify-between text-sm text-gray-400">
                                                        <span>Posted by Anonymous</span>
                                                        <button
                                                            className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300"
                                                            onClick={() => handleUpvote(course.id, comment.id)}
                                                        >
                                                            <ThumbsUp className="w-4 h-4" />
                                                            <span>{comment.upvotes}</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}