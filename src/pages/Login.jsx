import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let curr_url = "http://localhost:8443"


const handleSubmit = (e) => {
    axios.post(`${curr_url}/setCredentials?username=${email}&password=${password}`)
        .then((response) => {
            if (response.data.status === "S") {
                console.log("success");
                localStorage.setItem("u_id", response.data.u_id);
                console.log(localStorage.getItem("u_id"));
                window.location.href = "/profile";
            }
            else {
                console.log("username/password is wrong");
            }
        })
        .catch((error) => {

            console.log("username/password is wrong");

        });
    e.preventDefault();
    // LoginAPI handle
}

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="max-w-md w-full bg-gray-800 rounded-2xl shadow-xl p-8 transform transition-all duration-500 hover:scale-105">
                <h2 className="text-center text-4xl font-extrabold text-cyan-400">
                    Welcome Back
                </h2>
                <p className="mt-2 text-center text-sm text-gray-300">
                    Sign in to continue learning
                </p>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-5">
                        <div className="relative">
                            <input
                                id="email-address"
                                name="email"
                                type="text"
                                required
                                className="block w-full px-4 py-3 bg-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="absolute right-4 top-3 text-gray-400">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12H8m0 0H6m2 0h8m0 0h2"
                  />
                </svg>
              </span>
                        </div>
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="block w-full px-4 py-3 bg-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="absolute right-4 top-3 text-gray-400">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => {
                        // Optional: Toggle password visibility
                    }}
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19.5c-5.523 0-10-4.477-10-10a9.98 9.98 0 011.757-5.683M16.243 3.757A9.99 9.99 0 0121.002 9.5M9.172 14.828a4 4 0 005.656-5.656M6.343 6.343l11.314 11.314"
                  />
                </svg>
              </span>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 mt-6 bg-cyan-500 text-white font-medium rounded-lg shadow-md hover:bg-cyan-600 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Sign In
                    </button>
                </form>
                <p className="mt-6 text-center text-gray-400">
                    Don't have an account?{' '}
                    <Link
                        to="/register"
                        className="text-cyan-400 hover:text-cyan-300 font-medium transition duration-200"
                    >
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}