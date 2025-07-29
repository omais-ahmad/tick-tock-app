import { useEffect, useRef, useState } from "react";
import { useAuth } from '../context/AuthContext';

export const ProfileMenu = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        console.log("Logged out");
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left" ref={menuRef}>
            <button onClick={() => setOpen(!open)} className="flex items-center text-md font-medium text-[#6B7280]">John Doe <img src="/chivron-down.svg" className="w-[14px] h-[14px] ml-1" alt="" /></button>
            {open && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};


