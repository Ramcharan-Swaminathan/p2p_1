import { Star, BookOpen, Users, Brain, Mail, Phone, MapPin } from "lucide-react";
import { Disclosure } from "@headlessui/react";

export default function HomePage() {
    const topCourses = [
        {
            id: 1,
            title: "Complete Web Development",
            instructor: "Sarah Johnson",
            students: 1200,
            rating: 4.8,
        },
        {
            id: 2,
            title: "Machine Learning Fundamentals",
            instructor: "David Chen",
            students: 850,
            rating: 4.9,
        },
        {
            id: 3,
            title: "Mobile App Development",
            instructor: "Michael Brown",
            students: 950,
            rating: 4.7,
        },
        {
            id: 4,
            title: "Data Science Masterclass",
            instructor: "Emma Wilson",
            students: 750,
            rating: 4.6,
        },
        {
            id: 5,
            title: "UI/UX Design Principles",
            instructor: "Alex Turner",
            students: 600,
            rating: 4.8,
        },
    ];

    const faqs = [
        {
            question: "How does the peer learning system work?",
            answer:
                "Our platform connects learners with experienced peers who teach subjects they excel in. You can both learn and teach, earning reputation stars along the way.",
        },
        {
            question: "How do I start teaching?",
            answer:
                "Once you've gained expertise in a subject and earned sufficient reputation stars, you can create your own course and start teaching others.",
        },
        {
            question: "What makes this platform unique?",
            answer:
                "We combine peer-to-peer learning with AI-powered roadmaps, creating a dynamic learning environment where everyone can be both a student and teacher.",
        },
        {
            question: "How are the reputation stars earned?",
            answer:
                "You earn stars through teaching courses, helping others, and completing courses. The more value you provide to the community, the more stars you earn.",
        },
    ];

    return (
        <div className="min-h-screen w-full bg-gray-900 text-gray-200">
            {/* Hero Section */}
            <div className="bg-cyan-500 text-white py-20 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">Learn from Peers, Teach Others, Grow Together</h1>
                        <p className="text-2xl mb-8">Join our community of learners and teachers to exchange knowledge and skills</p>
                        <button className="bg-white text-cyan-600 font-semibold px-8 py-3 rounded-lg hover:bg-cyan-100 transition-colors shadow-md" onClick={() => window.location.href = '/login'}>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>

            {/* Top Courses Section */}
            <div className="py-16 bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Top Courses</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {topCourses.map((course) => (
                            <div
                                key={course.id}
                                className="bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition-all duration-500 hover:scale-105"
                            >
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-white">{course.title}</h3>
                                    <p className="text-gray-400 mb-4">By {course.instructor}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Users className="w-5 h-5  mr-2 text-white" />
                                            <span className="text-white">{course.students} students</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                                            <span className="text-white">{course.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Roadmap Section */}
            <div className="bg-violet-700 text-white py-20 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-6 drop-shadow-lg">Personalized Learning Roadmaps</h1>
                        <p className="text-xl mb-8">Get tailored learning paths based on your goals and interests</p>
                        <button className="bg-white text-violet-700 font-semibold px-8 py-3 rounded-lg hover:bg-violet-100 transition-colors shadow-md" onClick={() => window.location.href = '/roadmap'}>
                            Go to RoadMap
                        </button>
                    </div>
                </div>
            </div>

            {/* Why Us Section */}
            <div className="py-16 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-200">Why Choose Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-200">
                                <BookOpen className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-white">Learn Anything</h3>
                            <p className="text-gray-400">Access courses on any topic from peers who excel in their fields</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-200">
                                <Users className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-white">Peer Learning</h3>
                            <p className="text-gray-400">Learn from and teach others in a collaborative environment</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-200">
                                <Brain className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-white">AI-Powered Roadmaps</h3>
                            <p className="text-gray-400">Get personalized learning paths tailored to your goals</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-16 bg-gray-800">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-200">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <Disclosure key={index}>
                                {({ open }) => (
                                    <div className="bg-gray-700 rounded-lg">
                                        <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-left text-gray-200 font-medium focus:outline-none">
                                            <span>{faq.question}</span>
                                            <span className={`transform transition-transform ${open ? "rotate-180" : ""}`}>▼</span>
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pb-4 text-gray-400">{faq.answer}</Disclosure.Panel>
                                    </div>
                                )}
                            </Disclosure>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-200 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <Mail className="w-5 h-5 mr-2" />
                                    <span>support@peerlearn.com</span>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 mr-2" />
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="w-5 h-5 mr-2" />
                                    <span>123 Learning Street, Education City</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-primary-foreground">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-primary-foreground">
                                        Courses
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-primary-foreground">
                                        Become a Teacher
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-primary-foreground">
                                        Help Center
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
                            <p className="mb-4">Subscribe to our newsletter for updates and new courses</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="px-4 py-2 rounded-l-lg w-full text-gray-900"
                                />
                                <button className="bg-primary px-4 py-2 rounded-r-lg hover:bg-primary/90">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                        <p>&copy; 2024 PeerLearn. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}