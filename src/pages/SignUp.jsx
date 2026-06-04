import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { validateSignup } from '../utils/Validation'

function SignUp() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("");
    {/* signup handler */ }
    const handleSingnup = (e) => {
        e.preventDefault();
        setError("");
        const validationError = validateSignup(
            name,
            phoneNo,
            email,
            password,
            confirmPassword
        );
        if (validationError) {
            setError(validationError);
            return;
        }

        const user = {
            name,
            phoneNo,
            email,
            password,
        };
        localStorage.setItem("user", JSON.stringify(user));
        alert("SignUp Successfully");
        navigate('/login');
    }
    console.log({
        name,
        phoneNo,
        email,
        password,
        confirmPassword
    })
    return (
        <div
            className="min-h-screen bg-cover bg-center flex justify-center lg:justify-end items-center px-4 sm:px-10 lg:px-40"
            style={{
                backgroundImage: "url('/images/login.png')",
            }}
        >
            {/* Login Card */}

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md ">

                <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
                    Fresh Mart
                </h1>
                <form className="space-y-4" onSubmit={handleSingnup}>
                    <input
                        type="name"
                        placeholder="Name"
                        className="w-full p-3 border rounded-lg outline-none focus:border-green-500"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="phoneNo"
                        placeholder="Phone Number"
                        className="w-full p-3 border rounded-lg outline-none focus:border-green-500"
                        onChange={(e) => setPhoneNo(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full p-3 border rounded-lg outline-none focus:border-green-500"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 border rounded-lg outline-none focus:border-green-500"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full p-3 border rounded-lg outline-none focus:border-green-500"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
                    >
                        sign up
                    </button>
                </form>
                {error && (
                    <p className="text-red-500 text-center">{error}</p>
                )}
                <p className="text-center text-slate-900 mt-4">
                    Already have an account?{" "}
                    <span className="text-blue-800 cursor-pointer hover:text-red-500 transition" onClick={() => navigate('/login')}>
                        Log In
                    </span>
                </p>

            </div>
        </div>

    )
}

export default SignUp
