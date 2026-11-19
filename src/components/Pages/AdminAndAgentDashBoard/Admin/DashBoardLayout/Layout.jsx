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
import { NavLink, Outlet, useLocation, useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { AuthProvider } from "../../../../AuthProvider/CreateContext";
import axiosInstance from "../../../../../lib/axiosInstance";

const navigation = [
  {
    title: "WORKSPACE",
    items: [
      { path: "/", label: "Dashboard", icon: LayoutDashboard },
      { path: "/ai-interview", label: "AI Interview", icon: MessagesSquare },
      { path: "/insight", label: "Insights", icon: Brain },
      { path: "/talent", label: "Talent", icon: MessageCircleHeart },
    ],
  },
];

const pageTitles = {
  "/": "Dashboard",
  "/ai-interview": "AI Interview",
  "/insight": "Insights",
  "/talent": "Talent",
  "/settings": "Settings",
  "/profile": "My Profile",
};

const Layout = () => {
  const { user } = useContext(AuthProvider);
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileMenu, setMobileMenu] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const profileRef = useRef(null);

  const userName = user?.name || "Zaim Maulana";
  const initial = userName.charAt(0).toUpperCase();

  const currentPage =
    pageTitles[location.pathname] ||
    location.pathname.split("/").filter(Boolean).pop()?.replace(/-/g, " ") ||
    "Dashboard";

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileMenu(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setProfileMenu(false);
        setMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    setMobileMenu(false);
    setProfileMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = async () => {
    if (loggingOut) return;

    setLoggingOut(true);

    try {
      await axiosInstance.post("/auth/logout");
      toast.success("Logged out successfully!");
      window.location.assign("/");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Unable to logout. Please try again.");
      setLoggingOut(false);
    }
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  const getNavClass = ({ isActive }) => {
    return `relative flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium ${
      isActive
        ? "bg-indigo-50 text-indigo-700"
        : "text-slate-600 hover:bg-slate-50"
    }`;
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-800">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#ffffff",
            color: "#1e293b",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            fontSize: "13px",
          },
        }}
      />

      {mobileMenu && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[260px] flex-col border-r border-slate-200 bg-white lg:relative lg:translate-x-0 ${
          collapsed ? "lg:w-[76px]" : "lg:w-[250px]"
        } ${mobileMenu ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-slate-100 px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <MessagesSquare size={21} />
            </div>

            {!collapsed && (
              <div>
                <h1 className="text-lg font-bold tracking-tight text-slate-900">
                  Interview<span className="text-indigo-600">AI</span>
                </h1>
                <p className="text-[10px] font-medium text-slate-400">
                  AI Interview Platform
                </p>
              </div>
            )}
          </div>

          <button
            type="button"
            aria-label="Close sidebar"
            onClick={closeMenu}
            className="p-2 text-slate-500 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-6">
          {!collapsed && (
            <p className="mb-4 px-3 text-[11px] font-semibold tracking-wider text-slate-400">
              MAIN MENU
            </p>
          )}

          <nav className="space-y-6">
            {navigation.map((group) => (
              <div key={group.title}>
                {collapsed && (
                  <div className="mb-4 border-t border-slate-100" />
                )}

                <ul className="space-y-1">
                  {group.items.map((item) => {
                    const Icon = item.icon;

                    return (
                      <li key={item.path}>
                        <NavLink
                          to={item.path}
                          end={item.path === "/"}
                          onClick={closeMenu}
                          title={collapsed ? item.label : undefined}
                          className={getNavClass}
                        >
                          {({ isActive }) => (
                            <>
                              {isActive && (
                                <span className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-indigo-600" />
                              )}

                              <Icon
                                size={19}
                                className="shrink-0"
                                strokeWidth={isActive ? 2.2 : 1.8}
                              />

                              {!collapsed && <span>{item.label}</span>}
                            </>
                          )}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="shrink-0 border-t border-slate-100 p-3">
          <NavLink
            to="/settings"
            onClick={closeMenu}
            title={collapsed ? "Settings" : undefined}
            className={getNavClass}
          >
            <Settings size={19} className="shrink-0" />
            {!collapsed && <span>Settings</span>}
          </NavLink>

          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            title={collapsed ? "Logout" : undefined}
            className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-red-500 hover:bg-red-50 disabled:opacity-50"
          >
            <LogOut size={19} className="shrink-0" />
            {!collapsed && (
              <span>{loggingOut ? "Logging out..." : "Logout"}</span>
            )}
          </button>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <header className="z-30 flex h-[72px] shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileMenu(true)}
              className="rounded-md border border-slate-200 p-2 text-slate-600 lg:hidden"
            >
              <Menu size={20} />
            </button>

            <button
              type="button"
              aria-label="Toggle sidebar"
              onClick={() => setCollapsed((prev) => !prev)}
              className="hidden rounded-md p-2 text-slate-500 hover:bg-slate-100 lg:flex"
            >
              {collapsed ? (
                <ChevronLeft size={20} className="rotate-180" />
              ) : (
                <ChevronLeft size={20} />
              )}
            </button>

            <div className="hidden h-7 w-px bg-slate-200 sm:block" />

            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>Workspace</span>
                <span>/</span>
                <span className="truncate capitalize text-indigo-600">
                  {currentPage}
                </span>
              </div>

              <h2 className="mt-1 truncate text-base font-bold capitalize text-slate-900">
                {currentPage}
              </h2>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-3 sm:gap-5">
            <button
              type="button"
              aria-label="Notifications"
              className="relative flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-500"
            >
              <Bell size={19} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-red-500" />
            </button>

            <div className="hidden h-8 w-px bg-slate-200 sm:block" />

            <div className="relative" ref={profileRef}>
              <button
                type="button"
                aria-expanded={profileMenu}
                aria-haspopup="true"
                onClick={() => setProfileMenu((prev) => !prev)}
                className="flex items-center gap-2 rounded-lg p-1 sm:gap-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-indigo-100 bg-indigo-50 text-sm font-semibold text-indigo-700">
                  {user?.photoURL || user?.photo ? (
                    <img
                      src={user.photoURL || user.photo}
                      alt={userName}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    initial
                  )}
                </div>

                <div className="hidden text-left sm:block">
                  <p className="max-w-[130px] truncate text-xs font-semibold text-slate-800">
                    {userName}
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Premium Member
                  </p>
                </div>

                <ChevronDown
                  size={15}
                  className="hidden text-slate-400 sm:block"
                />
              </button>

              {profileMenu && (
                <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-lg border border-slate-200 bg-white p-2 shadow-lg">
                  <div className="border-b border-slate-100 px-3 py-3">
                    <p className="truncate text-sm font-semibold text-slate-800">
                      {userName}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Premium Member
                    </p>
                  </div>

                  <NavLink
                    to="/profile"
                    onClick={() => setProfileMenu(false)}
                    className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50"
                  >
                    <User size={17} />
                    My Profile
                  </NavLink>

                  <NavLink
                    to="/settings"
                    onClick={() => setProfileMenu(false)}
                    className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50"
                  >
                    <Settings size={17} />
                    Settings
                  </NavLink>

                  <div className="my-1 border-t border-slate-100" />

                  <button
                    type="button"
                    onClick={handleLogout}
                    disabled={loggingOut}
                    className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm text-red-500 hover:bg-red-50 disabled:opacity-50"
                  >
                    <LogOut size={17} />
                    {loggingOut ? "Logging out..." : "Logout"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-slate-50">
          <div className="mx-auto min-h-full w-full max-w-[1800px] p-4 sm:p-6 lg:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
