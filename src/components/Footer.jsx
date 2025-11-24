import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-rayBlue text-rayLight mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-4">
        <div>
          <h4 className="font-semibold mb-2">Raynott Hospital</h4>
          <p className="text-sm text-slate-200">
            A NABH-inspired, patient-first multi speciality hospital providing
            advanced care under one roof.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm text-slate-200">
            12, Health City Road, Bengaluru, India
          </p>
          <p className="text-sm text-slate-200 mt-1">
            Phone: +91-98765-43210
          </p>
          <p className="text-sm text-slate-200">Email: care@raynott.com</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <div className="flex flex-col gap-1 text-sm text-slate-200">
            <Link to="/about">About</Link>
            <Link to="/departments">Departments</Link>
            <Link to="/doctors">Doctors</Link>
            <Link to="/appointment">Book Appointment</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Timings</h4>
          <p className="text-sm text-slate-200">
            OPD: 8:00 AM – 8:00 PM (Mon–Sat)
            <br />
            Emergency & ICU: 24x7
          </p>
        </div>
      </div>
      <div className="border-t border-slate-600 text-xs text-center py-4 text-slate-200">
        © {new Date().getFullYear()} Raynott Multi Speciality Hospital. All
        rights reserved.
      </div>
    </footer>
  );
}
