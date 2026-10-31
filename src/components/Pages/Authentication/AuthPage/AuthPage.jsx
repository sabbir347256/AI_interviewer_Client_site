
import  { useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockIcon,
  Mail,
  MessagesSquare,
  Sparkles,
  User,
} from "lucide-react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../../../lib/axiosInstance";
import { useNavigate } from "react-router";

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      agreeTerms: false,
    },
  });

  const changeMode = () => {
    setIsLogin((prev) => !prev);
    setServerError("");
    setSuccessMessage("");
    setShowPassword(false);
    reset();
  };

  const onSubmit = async (data) => {
    setLoading(true);
    setServerError("");
    setSuccessMessage("");

    try {
      if (isLogin) {
        await axiosInstance.post("/auth/login", {
          email: data.email,
          password: data.password,
        });

        navigate("/dashboard", { replace: true });
      } else {
        await axiosInstance.post("/users/register", {
          name: data.name,
          email: data.email,
          password: data.password,
        });

        reset();
        setIsLogin(true);
        setSuccessMessage(
          "Account created successfully. Please sign in."
        );
      }
    } catch (error) {
      setServerError(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-[#F8F9FD] border border-gray-200/80 rounded-xl pl-11 pr-4 py-3 text-sm font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#6366F1] focus:bg-white transition-all";

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
              <span className="text-lg font-bold text-white tracking-wide leading-none">
                InterviewAI
              </span>
              <span className="text-[10px] text-gray-400 font-medium tracking-wider mt-0.5 uppercase">
                AI Interview Prep
              </span>
            </div>
          </div>

          <div className="space-y-4 my-12 lg:my-0 relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/10 px-3 py-1 rounded-full text-[11px] font-bold text-[#818CF8] uppercase tracking-wider">
              <Sparkles size={12} className="fill-current" />
              <span>Elevate Your Career</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
              {isLogin
                ? "Welcome Back to Your AI Prep Suite"
                : "Start Your AI-Powered Interview Journey"}
            </h2>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-medium">
              Experience high-fidelity simulations, receive
              AI-powered feedback, and track your interview
              performance effortlessly.
            </p>
          </div>

          <div className="text-[11px] text-gray-400 font-medium relative z-10">
            &copy; {new Date().getFullYear()} InterviewAI.
            All rights reserved.
          </div>
        </div>

        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white">
          <div className="mb-8">
            <h1 className="text-xl sm:text-2xl font-bold text-[#1E2640]">
              {isLogin ? "Sign In" : "Create Account"}
            </h1>

            <p className="text-xs sm:text-sm text-gray-400 font-medium mt-1">
              {isLogin
                ? "Don't have an account?"
                : "Already have an account?"}

              <button
                type="button"
                onClick={changeMode}
                className="text-[#6366F1] font-bold hover:underline ml-1"
              >
                {isLogin ? "Register here" : "Login here"}
              </button>
            </p>
          </div>

          {serverError && (
            <div
              role="alert"
              className="mb-5 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600"
            >
              {serverError}
            </div>
          )}

          {successMessage && (
            <div
              role="status"
              className="mb-5 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700"
            >
              {successMessage}
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-5"
          >
            {!isLogin && (
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                  Full Name
                </label>

                <div className="relative flex items-center">
                  <User className="absolute left-4 text-gray-400 size-4 pointer-events-none" />

                  <input
                    type="text"
                    autoComplete="name"
                    placeholder="John Doe"
                    className={inputClass}
                    {...register("name", {
                      required: !isLogin
                        ? "Full name is required"
                        : false,
                      minLength: {
                        value: 2,
                        message: "Minimum 2 characters required",
                      },
                    })}
                  />
                </div>

                {errors.name && (
                  <p className="text-xs text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                Email Address
              </label>

              <div className="relative flex items-center">
                <Mail className="absolute left-4 text-gray-400 size-4 pointer-events-none" />

                <input
                  type="email"
                  autoComplete="email"
                  placeholder="name@example.com"
                  className={inputClass}
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
              </div>

              {errors.email && (
                <p className="text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                  Password
                </label>
              </div>

              <div className="relative flex items-center">
                <LockIcon className="absolute left-4 text-gray-400 size-4 pointer-events-none" />

                <input
                  type={showPassword ? "text" : "password"}
                  autoComplete={
                    isLogin
                      ? "current-password"
                      : "new-password"
                  }
                  placeholder="••••••••"
                  className={`${inputClass} pr-12`}
                  {...register("password", {
                    required: "Password is required",
                    ...(!isLogin && {
                      minLength: {
                        value: 8,
                        message:
                          "Password must be at least 8 characters",
                      },
                    }),
                  })}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                  className="absolute right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {!isLogin && (
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  className="w-4 h-4 rounded text-[#6366F1] border-gray-300 focus:ring-[#6366F1] mt-0.5"
                  {...register("agreeTerms", {
                    required: "Please accept the terms",
                  })}
                />

                <label
                  htmlFor="agreeTerms"
                  className="ml-2 text-xs font-semibold text-gray-500 select-none cursor-pointer leading-relaxed"
                >
                  I agree to the Terms of Service and
                  Privacy Policy
                </label>
              </div>
            )}

            {errors.agreeTerms && !isLogin && (
              <p className="text-xs text-red-500">
                {errors.agreeTerms.message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#6366F1] text-white font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-[#6366F1]/15 hover:bg-[#4F46E5] disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 group mt-2"
            >
              <span>
                {loading
                  ? "Please wait..."
                  : isLogin
                    ? "Sign In to Dashboard"
                    : "Create Free Account"}
              </span>

              {!loading && (
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
