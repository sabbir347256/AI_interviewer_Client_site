import { ArrowRight, Eye, EyeOff, LockIcon, Mail, MessagesSquare, Sparkles, User } from "lucide-react";
import { useState } from "react";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        agreeTerms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            console.log("Logging in with:", formData.email, formData.password);
        } else {
            console.log("Registering with:", formData);
        }
    };
    return (
        <div className="min-h-screen w-full bg-[#F8F9FD] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-5xl bg-white rounded-[32px] shadow-xl border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">

                <div className="lg:col-span-5 bg-[#1E2640] p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#6366F1]/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#818CF8]/5 rounded-full blur-2xl pointer-events-none" />

                    <div className="flex items-center gap-3 relative z-10">
                        <div className="bg-[#6366F1] p-2.5 rounded-xl flex items-center justify-center shadow-lg shadow-[#6366F1]/20">
                            <MessagesSquare className="size-6 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-white tracking-wide leading-none">InterviewAI</span>
                            <span className="text-[10px] text-gray-400 font-medium tracking-wider mt-0.5 uppercase">AI Interview Prep</span>
                        </div>
                    </div>

                    <div className="space-y-4 my-12 lg:my-0 relative z-10">
                        <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/10 px-3 py-1 rounded-full text-[11px] font-bold text-[#818CF8] uppercase tracking-wider">
                            <Sparkles size={12} className="fill-current" />
                            <span>Elevate Your Career</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
                            {isLogin ? "Welcome Back to Your AI Prep Suite" : "Start Your AI-Powered Interview Journey"}
                        </h2>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-medium">
                            Experience high-fidelity simulations, receive real-time behavioral insights, and track your readiness index score effortlessly.
                        </p>
                    </div>

                    <div className="text-[11px] text-gray-400 font-medium relative z-10">
                        &copy; {new Date().getFullYear()} InterviewAI. All rights reserved.
                    </div>
                </div>

                <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white">
                    <div className="mb-8">
                        <h1 className="text-xl sm:text-2xl font-bold text-[#1E2640]">
                            {isLogin ? "Sign In" : "Create Account"}
                        </h1>
                        <p className="text-xs sm:text-sm text-gray-400 font-medium mt-1">
                            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                            <button
                                onClick={() => { setIsLogin(!isLogin); setFormData({ name: '', email: '', password: '', agreeTerms: false }); }}
                                className="text-[#6366F1] font-bold hover:underline ml-1"
                            >
                                {isLogin ? "Register here" : "Login here"}
                            </button>
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {!isLogin && (
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Full Name</label>
                                <div className="relative flex items-center">
                                    <User className="absolute left-4 text-gray-400 size-4 pointer-events-none" />
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full bg-[#F8F9FD] border border-gray-200/80 rounded-xl pl-11 pr-4 py-3 text-sm font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#6366F1] focus:bg-white transition-all"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Email Address</label>
                            <div className="relative flex items-center">
                                <Mail className="absolute left-4 text-gray-400 size-4 pointer-events-none" />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="name@example.com"
                                    className="w-full bg-[#F8F9FD] border border-gray-200/80 rounded-xl pl-11 pr-4 py-3 text-sm font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#6366F1] focus:bg-white transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <div className="flex items-center justify-between">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Password</label>
                                {isLogin && (
                                    <a href="#" className="text-xs font-bold text-[#6366F1] hover:underline">Forgot?</a>
                                )}
                            </div>
                            <div className="relative flex items-center">
                                <LockIcon className="absolute left-4 text-gray-400 size-4 pointer-events-none" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full bg-[#F8F9FD] border border-gray-200/80 rounded-xl pl-11 pr-12 py-3 text-sm font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#6366F1] focus:bg-white transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>

                        {isLogin ? (
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    className="w-4 h-4 rounded text-[#6366F1] border-gray-300 focus:ring-[#6366F1]"
                                />
                                <label htmlFor="rememberMe" className="ml-2 text-xs font-semibold text-gray-500 select-none cursor-pointer">
                                    Remember me on this device
                                </label>
                            </div>
                        ) : (
                            <div className="flex items-start">
                                <input
                                    type="checkbox"
                                    id="agreeTerms"
                                    name="agreeTerms"
                                    required
                                    checked={formData.agreeTerms}
                                    onChange={handleChange}
                                    className="w-4 h-4 rounded text-[#6366F1] border-gray-300 focus:ring-[#6366F1] mt-0.5"
                                />
                                <label htmlFor="agreeTerms" className="ml-2 text-xs font-semibold text-gray-500 select-none cursor-pointer leading-relaxed">
                                    I agree to the <a href="#" className="text-[#6366F1] font-bold hover:underline">Terms of Service</a> and <a href="#" className="text-[#6366F1] font-bold hover:underline">Privacy Policy</a>
                                </label>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-[#6366F1] text-white font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-[#6366F1]/15 hover:bg-[#4F46E5] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 group mt-2"
                        >
                            <span>{isLogin ? "Sign In to Dashboard" : "Create Free Account"}</span>
                            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AuthPage;