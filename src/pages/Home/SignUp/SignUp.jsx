
import { FaFacebookF, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
import signUpImage from '../../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const SignUp = () => {
    //calling createUser
    const {createUser}=useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email= form.email.value;
        const password = form.password.value; 
        //log the info here
        console.log(name, email, password); 

        createUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch (error => console.log(error))
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg rounded-lg overflow-hidden">
                {/* Left Side - Image */}
                <div className="hidden md:block">
                    <img 
                        src={signUpImage} 
                        alt="Sign Up"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Right Side - Sign Up Form */}
                <div className="p-8 md:p-12 flex flex-col justify-center border rounded-lg">
                    <h2 className="text-3xl text-amber-600 font-semibold mb-6">Sign Up</h2>
                    <form className="space-y-4" onSubmit={handleSignUp}>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-white">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your full name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-white">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-white">Confirm Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        <button
                            className="w-full bg-amber-700 text-white py-2 rounded-md hover:bg-amber-600 transition duration-300">
                            Sign Up
                        </button>
                    </form>

                    {/* Social Media Sign Up */}
                    <div className="my-6 text-center">
                        <p className="text-white">Or Sign Up with</p>
                        <div className="flex justify-center space-x-4 mt-4">
                            <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700">
                                <FaFacebookF />
                            </button>
                            <button className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500">
                                <FaLinkedinIn />
                            </button>
                            <button className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700">
                                <FaGoogle />
                            </button>
                        </div>
                        <div className="mt-5">
                            <p className="text-white">
                                Already have an Account?{' '}
                                <span className="hover:text-amber-600">
                                    <Link to="/login">Login</Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
