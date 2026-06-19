import SidebarItem from "../../../Shared/SidebarItem";
import logo from '../../../../../assets/images/images.png'
import {
  LayoutDashboard,
  LogOut,
  Menu,
  X,
  User,
  ChevronDown,
  MessagesSquare,
  Brain,
  MessageCircleHeart,
  Settings,
  ChevronLeft,
  Bell,
} from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { AuthProvider } from "../../../../AuthProvider/CreateContext";
const Layout = () => {
  const { user } = useContext(AuthProvider);
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedInsideButton = menuButtonRef.current && menuButtonRef.current.contains(event.target);
      const clickedInsideMenu = mobileMenuRef.current && mobileMenuRef.current.contains(event.target);
      if (!clickedInsideButton && !clickedInsideMenu) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    {
      section: "OVERVIEW",
      items: [
        { path: "/", label: "Dashboard", icon: LayoutDashboard },
        { path: "/ai-interview", label: "Interview With AI", icon: MessagesSquare },
        { path: "/insight", label: "Insight", icon: Brain },
        { path: "/talent", label: "Talent", icon: MessageCircleHeart },
      ],
    },
  ];

  const [porfileopen, setporfileopen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setporfileopen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");

    toast.success("Logged out successfully!");

    setTimeout(() => {
      navigate('/admin-login');
    }, 1500);
  };


  return (
    <div className="h-screen flex overflow-hidden bg-[#F8F9FD]">
      <Toaster position="top-right" reverseOrder={false} />
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#1E2640] border-r border-[#2A3454] transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 flex flex-col p-4 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="py-4 px-2 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-[#6366F1] p-2.5 rounded-xl flex items-center justify-center shadow-lg shadow-[#6366F1]/20">
              <MessagesSquare className="size-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white tracking-wide leading-none">InterviewAI</span>
              <span className="text-[10px] text-gray-400 font-medium tracking-wider mt-0.5 uppercase">AI Interview Prep</span>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto pt-6 space-y-6">
          {menuItems.map((group, idx) => (
            <div key={idx}>
              <p className="text-[11px] font-medium text-gray-400 tracking-wider mb-3 px-3">
                {group.section}
              </p>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block"
                  >
                    {({ isActive }) => (
                      <div
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer ${isActive
                          ? "bg-[#6366F1] text-white shadow-lg shadow-[#6366F1]/15"
                          : "text-gray-400 hover:bg-[#2A3454] hover:text-white"
                          }`}
                      >
                        <item.icon size={18} className={isActive ? "text-white" : "text-gray-400"} />
                        <span>{item.label}</span>
                      </div>
                    )}
                  </NavLink>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="pt-4 border-t border-[#2A3454] space-y-1.5 flex-shrink-0">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${isActive
                ? "bg-[#6366F1] text-white"
                : "text-gray-400 hover:bg-[#2A3454] hover:text-white"
              }`
            }
          >
            <Settings size={18} className="text-gray-400" />
            <span>Settings</span>
          </NavLink>
          <button
            onClick={handleLogOut}
            className="flex items-center gap-3 text-[#F87171] hover:bg-[#F87171]/10 w-full px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium"
          >
            <LogOut size={18} /> <span>Logout</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <header className="h-16 sm:h-20 bg-[#F4F6FA] border-b border-gray-200/60 flex items-center justify-between px-4 sm:px-6 lg:px-8 shrink-0 relative">
          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 text-gray-600 lg:hidden hover:bg-gray-200 rounded-md transition-colors"
            >
              <Menu size={24} />
            </button>

            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors bg-white shrink-0">
                <ChevronLeft size={16} />
              </button>
              <div className="flex items-center gap-2 min-w-0">
                <h2 className="text-sm sm:text-base font-semibold text-[#1E2640] truncate">
                  Interview / UI/UX Designer
                </h2>
                <span className="bg-[#E0E7FF] text-[#4F46E5] text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-full shrink-0 max-w-[90px] sm:max-w-none truncate">
                  Sams Brother
                </span>
              </div>
            </div>
          </div>

          <div
            className="flex items-center gap-3 sm:gap-6 shrink-0"
            ref={dropdownRef}
          >
            <button className="relative p-2 text-gray-500 hover:text-gray-700 transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#6366F1] rounded-full"></span>
            </button>

            <div className="h-6 sm:h-8 w-px bg-gray-300"></div>

            <div className="relative">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setporfileopen(!porfileopen);
                }}
                className="flex items-center gap-2 sm:gap-3 cursor-pointer group select-none"
              >
                <div className="hidden sm:flex flex-col text-right">
                  <span className="text-sm font-bold text-gray-900 leading-tight">
                    {user?.name || 'Zaim Maulana'}
                  </span>
                  <span className="text-[11px] font-medium text-gray-400">Premium Plan</span>
                </div>

                <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                  <img
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop"
                    alt="User Profile"
                    className="w-full h-full rounded-full object-cover border border-gray-200 group-hover:border-gray-400 transition-colors"
                  />
                </div>

                <ChevronDown
                  size={14}
                  className={`text-gray-400 transition-transform duration-200 ${porfileopen ? "rotate-180" : ""}`}
                />
              </div>

              {porfileopen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">
                  <div className="px-4 py-2 sm:hidden border-b border-gray-100 mb-1">
                    <p className="text-sm font-bold text-gray-900 truncate">{user?.name || 'Zaim Maulana'}</p>
                    <p className="text-xs text-gray-400">Premium Plan</p>
                  </div>
                  <NavLink to='/profile' className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                    <User size={16} className="text-gray-500" />
                    My Profile
                  </NavLink>
                  <div className="h-px bg-gray-100 my-1 mx-2"></div>
                  <button onClick={handleLogOut} className="w-full flex items-center gap-2 px-4 py-2 text-sm text-[#F87171] hover:bg-red-50 transition-colors">
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-[#F8F9FD] p-4 sm:p-6 lg:p-8">
          <div>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
