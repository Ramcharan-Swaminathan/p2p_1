"use client"

import { useState } from "react"
import { ThumbsUp, MessageSquare, Share2, PlusCircle } from "lucide-react"

export default function RoadMap() {
    const [roadmaps, setRoadmaps] = useState([

    {
        id: 3,
            title: "AIML Engineer",
        description: "Path to becoming an AIML expert",
        author: "Rajesh Kumar",
        votes: 156,
        comments: 28,
        steps: [
        {
            title: "Mathematics",
            skills: ["Linear Algebra", "Calculus", "Statistics"],
            link: [
                "https://www.youtube.com/watch?v=F_kx0qLrZ7Q&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                "https://www.youtube.com/watch?v=KbJ4lQrRvQo&list=PLZHQObOWTQDNHOJTJXW_svdfdsf",
                "https://www.youtube.com/watch?v=uh-xwqWeo2g&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
            ],
        },
        {
            title: "Programming Basics",
            skills: ["Python", "NumPy", "Pandas"],
            link: [
                "https://www.youtube.com/watch?v=rfscVS0vtbw&list=PL-osiEiasUDraUy5GKXVJVxOpT0SarIR",
                "https://www.youtube.com/watch?v=QUT1VHiLxfM&list=PL-osiEiasUDraUy5GKXVJVxOpT0SarIR",
                "https://www.youtube.com/watch?v=_ZW5jvbwOIg&list=PL-osiEiasUDraUy5GKXVJVxOpT0SarIR",
            ],
        },
        {
            title: "ML Fundamentals",
            skills: ["Scikit-learn", "TensorFlow", "PyTorch"],
            link: [
                "https://www.youtube.com/watch?v=NcMNbqLLwsA&list=PLZHQObOWTQDNHOJTJXW_svdfdsf",
                "https://www.youtube.com/watch?v=vOppzHvv28Q&list=PLZHQObOWTQDNHOJTJXW_svdfdsf",
                "https://www.youtube.com/watch?v=SGSqxrM8PVc&list=PLZHQObOWTQDNHOJTJXW_svdfdsf",
            ],
        },
        {
            title: "Deep Learning",
            skills: ["Convolutional Neural Networks", "Recurrent Neural Networks", "Generative Adversarial Networks"],
            link: [
                "https://www.youtube.com/watch?v=FmpDIaiMIeA&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                "https://www.youtube.com/watch?v=6niqTuZLwkQ&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                "https://www.youtube.com/watch?v=5WoItGTWV54&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
            ],
        },
    ],
    },



    {
        id: 4,
        title: "Operating System Expert",
        description: "Path to becoming an OS expert",
        author: "John Smith",
        votes: 142,
        comments: 25,
        steps: [
            {
                title: "Computer Organization",
                skills: ["CPU Architecture", "Memory Hierarchy", "Input/Output Systems"],
                link: [
                    "https://www.youtube.com/watch?v=1I5ZMMRaPiQ&list=PLZHQObOWTQDNHOJTJXW_svdfdsf",
                    "https://www.youtube.com/watch?v=l7Rzou2_54o&list=PLZHQObOWTQDNHOJTJXW_svdfdsf",
                    "https://www.youtube.com/watch?v=Qx6u9WvFvRQ&list=PLZHQObOWTQDNHOJTJXW_svdfdsf",
                ],
            },
            {
                title: "Process Management",
                skills: ["Process Scheduling", "Process Synchronization", "Deadlocks"],
                link: [
                    "https://www.youtube.com/watch?v=7H9u2ZpF7Qo&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                    "https://www.youtube.com/watch?v=l7Rzou2_54o&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                    "https://www.youtube.com/watch?v=Qx6u9WvFvRQ&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                ],
            },
            {
                title: "Memory Management",
                skills: ["Memory Allocation", "Memory Protection", "Virtual Memory"],
                link: [
                    "https://www.youtube.com/watch?v=FmpDIaiMIeA&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                    "https://www.youtube.com/watch?v=6niqTuZLwkQ&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                    "https://www.youtube.com/watch?v=5WoItGTWV54&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                ],
            },
            {
                title: "File Systems",
                skills: ["File System Architecture", "File System Implementation", "File System Security"],
                link: [
                    "https://www.youtube.com/watch?v=1I5ZMRRaPiQ&list=PLZHQObOWTQDNHOJTJXW_svdfdsf",
                    "https://www.youtube.com/watch?v=l7Rzou2_54o&list=PLZHQObOWTQDNHOJTJXW_svdfdsf",
                    "https://www.youtube.com/watch?v=Qx6u9WvFvRQ&list=PLZHQObOWTQDNHOJTJXW_svdfdsf",
                ],
            },
        ],
    },


    {
        id: 5,
        title: "DBMS Expert",
        description: "Path to becoming a DBMS expert",
        author: "Jane Doe",
        votes: 129,
        comments: 22,
        steps: [
            {
                title: "Database Fundamentals",
                skills: ["Database Concepts", "Data Modeling", "Database Design"],
                link: [
                    "https://www.youtube.com/watch?v=7H9u2ZpF7Qo&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                    "https://www.youtube.com/watch?v=l7Rzou2_54o&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                    "https://www.youtube.com/watch?v=Qx6u9WvFvRQ&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                ],
            },
            {
                title: "Relational Database Management Systems",
                skills: ["SQL", "Database Normalization", "Database Query Optimization"],
                link: [
                    "https://www.youtube.com/watch?v=FmpDIaiMIeA&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                    "https://www.youtube.com/watch?v=6niqTuZLwkQ&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                    "https://www.youtube.com/watch?v=5WoItGTWV54&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                ],
            },
            {
                title: "NoSQL Database Management Systems",
                skills: ["MongoDB", "Cassandra", "Redis"],
                link: [
                    "https://www.youtube.com/watch?v=1I5ZMRRaPiQ&list=PLZHQObOWTQDNHOJTJXW_svdfdsf",
                    "https://www.youtube.com/watch?v=l7Rzou2_54o&list=PLZHQObOWTQDNHOJTJXW_svdfdsf",
                    "https://www.youtube.com/watch?v=Qx6u9WvFvRQ&list=PLZHQObOWTQDNHOJTJXW_svdfdsf",
                ],
            },
            {
                title: "Database Security and Administration",
                skills: ["Database Security", "Database Backup and Recovery", "Database Performance Tuning"],
                link: [
                    "https://www.youtube.com/watch?v=7H9u2ZpF7Qo&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                    "https://www.youtube.com/watch?v=l7Rzou2_54o&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                    "https://www.youtube.com/watch?v=Qx6u9WvFvRQ&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                ],
            },
        ],
    },

    {
        id: 6,
        title: "System Design Expert",
        description: "Path to becoming a system design expert",
        author: "Bob Johnson",
        votes: 115,
        comments: 20,
        steps: [
            {
                title: "System Design Fundamentals",
                skills: ["System Design Principles", "System Architecture", "System Scalability"],
                link: [
                    "https://www.youtube.com/watch?v=FmpDIaiMIeA&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                    "https://www.youtube.com/watch?v=6niqTuZLwkQ&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                    "https://www.youtube.com/watch?v=5WoItGTWV54&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                ],
            },
            {
                title: "Microservices Architecture",
                skills: ["Microservices Design", "Service Discovery", "API Gateway"],
                link: [
                    "https://www.youtube.com/watch?v=1I5ZMRRaPiQ&list=PLZHQObOWTQDNHOJTJXW_svdfdsf",
                    "https://www.youtube.com/watch?v=l7Rzou2_54o&list=PLZHQObOWTQDNHOJTJXW_svdfdsf",
                    "https://www.youtube.com/watch?v=Qx6u9WvFvRQ&list=PLZHQObOWTQDNHOJTJXW_svdfdsf",
                ],
            },
            {
                title: "Cloud Computing",
                skills: ["AWS", "Azure", "Google Cloud Platform"],
                link: [
                    "https://www.youtube.com/watch?v=7H9u2ZpF7Qo&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                    "https://www.youtube.com/watch?v=l7Rzou2_54o&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                    "https://www.youtube.com/watch?v=Qx6u9WvFvRQ&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                ],
            },
            {
                title: "System Security",
                skills: ["System Security Fundamentals", "Network Security", "Cryptography"],
                link: [
                    "https://www.youtube.com/watch?v=FmpDIaiMIeA&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                    "https://www.youtube.com/watch?v=6niqTuZLwkQ&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                    "https://www.youtube.com/watch?v=5WoItGTWV54&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                ],
            },
        ],
    },


    {
        id: 7,
        title: "Cloud Computing Expert",
        description: "Path to becoming a cloud computing expert",
        author: "Alice Brown",
        votes: 102,
        comments: 18,
        steps: [
            {
                title: "Cloud Computing Fundamentals",
                skills: ["Cloud Computing Concepts", "Cloud Service Models", "Cloud Deployment Models"],
                link: [
                    "https://www.youtube.com/watch?v=1I5ZMRRaPiQ&list=PLZHQObOWTQDNHOJTJXW_svdfdsf",
                    "https://www.youtube.com/watch?v=l7Rzou2_54o&list=PLZHQObOWTQDNHOJTJXW_svdfdsf",
                    "https://www.youtube.com/watch?v=Qx6u9WvFvRQ&list=PLZHQObOWTQDNHOJTJXW_svdfdsf",
                ],
            },
            {
                title: "AWS Cloud Computing",
                skills: ["AWS EC2", "AWS S3", "AWS Lambda"],
                link: [
                    "https://www.youtube.com/watch?v=7H9u2ZpF7Qo&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                    "https://www.youtube.com/watch?v=l7Rzou2_54o&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                    "https://www.youtube.com/watch?v=Qx6u9WvFvRQ&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                ],
            },
            {
                title: "Azure Cloud Computing",
                skills: ["Azure Virtual Machines", "Azure Storage", "Azure Functions"],
                link: [
                    "https://www.youtube.com/watch?v=FmpDIaiMIeA&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                    "https://www.youtube.com/watch?v=6niqTuZLwkQ&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                    "https://www.youtube.com/watch?v=5WoItGTWV54&list=PLZHQObOWTQDPD3MizzM2xVFitgF50wSJ_",
                ],
            },
            {
                title: "Google Cloud Platform",
                skills: ["Google Compute Engine", "Google Cloud Storage", "Google Cloud Functions"],
                link: [
                    "https://www.youtube.com/watch?v=1I5ZMRRaPiQ&list=PLZHQObOWTQDNHOJTJXW_svdfdsf",
                    "https://www.youtube.com/watch?v=l7Rzou2_54o&list=PLZHQObOWTQDNHOJTJXW_svdfdsf",
                    "https://www.youtube.com/watch?v=Qx6u9WvFvRQ&list=PLZHQObOWTQDNHOJTJXW_svdfdsf",
                ],
            },
        ],
    },

])

    const [showCreateForm, setShowCreateForm] = useState(false)
    const [newRoadmap, setNewRoadmap] = useState({
        title: "",
        description: "",
        steps: [{ title: "", skills: [""] }],
    })

    const handleAddStep = () => {
        setNewRoadmap({
            ...newRoadmap,
            steps: [...newRoadmap.steps, { title: "", skills: [""] }],
        })
    }

    const handleAddSkill = (stepIndex) => {
        const updatedSteps = [...newRoadmap.steps]
        updatedSteps[stepIndex].skills.push("")
        setNewRoadmap({
            ...newRoadmap,
            steps: updatedSteps,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const roadmap = {
            id: roadmaps.length + 1,
            ...newRoadmap,
            author: "Current User",
            votes: 0,
            comments: 0,
        }
        setRoadmaps([...roadmaps, roadmap])
        setShowCreateForm(false)
        setNewRoadmap({ title: "", description: "", steps: [{ title: "", skills: [""] }] })
    }

    const handleUpvote = (roadmap) => {
        const updatedRoadmaps = roadmaps.map((r) =>
            r.id === roadmap.id ? { ...r, votes: r.votes + 1 } : r
        );
        setRoadmaps(updatedRoadmaps);
    };
    return (
        <div className="max-w-full min-h-screen mx-auto px-4 sm:px-6 lg:px-8 py-8 text-gray-200 bg-gray-900">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Learning Roadmaps</h1>
                <button
                    onClick={() => setShowCreateForm(true)}
                    className="flex items-center bg-cyan-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-cyan-300 transition-colors"
                >
                    <PlusCircle className="w-5 h-5 mr-2" />
                    Create Roadmap
                </button>
            </div>

            {/* Roadmaps Grid */}
            <div className="grid grid-cols-1 gap-6">
                {roadmaps.map((roadmap) => (
                    <div key={roadmap.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <div className="mb-4">
                                <h2 className="text-xl font-semibold mb-2 text-gray-200">{roadmap.title}</h2>
                                <p className="text-gray-400">{roadmap.description}</p>
                                <p className="text-sm text-gray-500 mt-1">Created by {roadmap.author}</p>
                            </div>

                            {/* Steps */}
                            <div className="space-y-4 mb-6">
                                {roadmap.steps.map((step, index) => (
                                    <div key={index} className="bg-gray-700 rounded-lg p-4">
                                        <h3 className="font-semibold mb-2 text-gray-200">
                                            {index + 1}. {step.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {step.skills.map((skill, skillIndex) => (
                                                <span key={skillIndex} className="bg-cyan-400 text-gray-900 px-3 py-1 rounded-full text-sm">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Interactions */}
                            <div className="flex items-center space-x-6 text-gray-500">
                                <button
                                    className="flex items-center space-x-2 hover:text-cyan-400"
                                    onClick={() => handleUpvote(roadmap)}
                                >
                                    <ThumbsUp className="w-5 h-5" />
                                    <span>{roadmap.votes}</span>
                                </button>
                                <button className="flex items-center space-x-2 hover:text-cyan-400">
                                    <MessageSquare className="w-5 h-5" />
                                    <span>{roadmap.comments}</span>
                                </button>
                                <button className="flex items-center space-x-2 hover:text-cyan-400">
                                    <Share2 className="w-5 h-5" />
                                    <span>Share</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Create Roadmap Modal */}
            {showCreateForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <h2 className="text-xl font-semibold mb-4 text-gray-200">Create New Roadmap</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Roadmap Title</label>
                                    <input
                                        type="text"
                                        value={newRoadmap.title}
                                        onChange={(e) => setNewRoadmap({ ...newRoadmap, title: e.target.value })}
                                        className="w-full px-3 py-2 border rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
                                    <textarea
                                        value={newRoadmap.description}
                                        onChange={(e) => setNewRoadmap({ ...newRoadmap, description: e.target.value })}
                                        className="w-full px-3 py-2 border rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                        rows="3"
                                        required
                                    />
                                </div>

                                {/* Steps */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Steps</label>
                                    {newRoadmap.steps.map((step, stepIndex) => (
                                        <div key={stepIndex} className="bg-gray-700 rounded-lg p-4 mb-4">
                                            <input
                                                type="text"
                                                value={step.title}
                                                onChange={(e) => {
                                                    const updatedSteps = [...newRoadmap.steps]
                                                    updatedSteps[stepIndex].title = e.target.value
                                                    setNewRoadmap({ ...newRoadmap, steps: updatedSteps })
                                                }}
                                                className="w-full px-3 py-2 border rounded-lg bg-gray-600 text-gray-200 mb-2"
                                                placeholder="Step Title"
                                                required
                                            />

                                            {/* Skills */}
                                            <div className="space-y-2">
                                                {step.skills.map((skill, skillIndex) => (
                                                    <a
                                                        key={skillIndex}
                                                        href={step.link && step.link[skillIndex] ? step.link[skillIndex] : "#"}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-full px-3 py-2 border rounded-lg bg-gray-600 text-gray-200 block hover:bg-gray-500"
                                                    >
                                                        {skill}
                                                    </a>
                                                ))}
                                                <button
                                                    type="button"
                                                    onClick={() => handleAddSkill(stepIndex)}
                                                    className="text-cyan-400 hover:text-cyan-300 text-sm"
                                                >
                                                    + Add Skill
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={handleAddStep}
                                        className="text-cyan-400 hover:text-cyan-300 flex items-center"
                                    >
                                        <PlusCircle className="w-4 h-4 mr-1" />
                                        Add Step
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-end space-x-4 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setShowCreateForm(false)}
                                    className="px-4 py-2 text-gray-400 hover:text-gray-200"
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-cyan-300">
                                    Create Roadmap
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}