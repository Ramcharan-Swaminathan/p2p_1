"use client"

import { useState } from "react"
import { ThumbsUp, MessageSquare, Share2, PlusCircle } from "lucide-react"

export default function RoadMap() {
    const [roadmaps, setRoadmaps] = useState([
        {
            id: 1,
            title: "Full Stack Web Development",
            description: "Complete roadmap to become a full stack developer",
            author: "Sarah Johnson",
            votes: 234,
            comments: 45,
            steps: [
                {
                    title: "Frontend Fundamentals",
                    skills: ["HTML", "CSS", "JavaScript"],
                },
                {
                    title: "Frontend Frameworks",
                    skills: ["React", "Redux", "TypeScript"],
                },
                {
                    title: "Backend Development",
                    skills: ["Node.js", "Express", "MongoDB"],
                },
                {
                    title: "DevOps & Deployment",
                    skills: ["Docker", "AWS", "CI/CD"],
                },
            ],
        },
        {
            id: 2,
            title: "Machine Learning Engineer",
            description: "Path to becoming a machine learning expert",
            author: "David Chen",
            votes: 189,
            comments: 32,
            steps: [
                {
                    title: "Programming Basics",
                    skills: ["Python", "NumPy", "Pandas"],
                },
                {
                    title: "Mathematics",
                    skills: ["Linear Algebra", "Calculus", "Statistics"],
                },
                {
                    title: "ML Fundamentals",
                    skills: ["Scikit-learn", "TensorFlow", "PyTorch"],
                },
                {
                    title: "Advanced Topics",
                    skills: ["Deep Learning", "NLP", "Computer Vision"],
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
                                <button className="flex items-center space-x-2 hover:text-cyan-400">
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
                                                    <input
                                                        key={skillIndex}
                                                        type="text"
                                                        value={skill}
                                                        onChange={(e) => {
                                                            const updatedSteps = [...newRoadmap.steps]
                                                            updatedSteps[stepIndex].skills[skillIndex] = e.target.value
                                                            setNewRoadmap({ ...newRoadmap, steps: updatedSteps })
                                                        }}
                                                        className="w-full px-3 py-2 border rounded-lg bg-gray-600 text-gray-200"
                                                        placeholder={`Skill ${skillIndex + 1}`}
                                                        required
                                                    />
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