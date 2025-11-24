import React from "react";
import { Link, NavLink } from "react-router-dom";

const navLinkClass =
  "px-3 py-2 text-sm font-medium hover:text-rayTeal transition";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-rayTeal flex items-center justify-center text-white font-bold">
            R
          </div>
          <div>
            <p className="font-semibold text-rayBlue leading-tight">
              Raynott Multi Speciality Hospital
            </p>
            <p className="text-[11px] text-slate-500">
              Compassion. Care. Clinical Excellence.
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/departments" className={navLinkClass}>
            Departments
          </NavLink>
          <NavLink to="/doctors" className={navLinkClass}>
            Doctors
          </NavLink>
          <NavLink to="/appointment" className={navLinkClass}>
            Book Appointment
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        <Link
          to="/appointment"
          className="hidden md:inline-flex px-4 py-2 rounded-full bg-rayTeal text-white text-sm font-semibold shadow hover:shadow-md transition"
        >
          24x7 Emergency
        </Link>
      </div>
    </header>
  );
}
