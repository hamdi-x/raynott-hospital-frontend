import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-rayBlue via-rayBlue to-rayTeal text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-rayLight/80">
            Raynott Multi Speciality Hospital
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            World-class care, <span className="font-bold">closer</span> to home.
          </h1>
          <p className="mt-4 text-sm md:text-base text-slate-100 max-w-xl">
            From cardiac emergencies to pediatric care, our multi speciality
            team works 24x7 to provide safe, ethical and compassionate
            healthcare.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/appointment"
              className="px-5 py-2.5 rounded-full bg-white text-rayBlue text-sm font-semibold shadow hover:shadow-lg transition"
            >
              Book Appointment
            </Link>
            <Link
              to="/departments"
              className="px-5 py-2.5 rounded-full border border-white/50 text-sm font-semibold hover:bg-white/10 transition"
            >
              Explore Departments
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4 text-xs md:text-sm">
            <div>
              <p className="text-lg md:text-2xl font-semibold">24x7</p>
              <p className="text-slate-100">Emergency Care</p>
            </div>
            <div>
              <p className="text-lg md:text-2xl font-semibold">120+</p>
              <p className="text-slate-100">Specialist Doctors</p>
            </div>
            <div>
              <p className="text-lg md:text-2xl font-semibold">200k+</p>
              <p className="text-slate-100">Patients Treated</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white/10 border border-white/20 rounded-3xl p-5 backdrop-blur shadow-xl">
            <p className="text-sm font-semibold mb-2">
              24x7 Emergency & Trauma
            </p>
            <p className="text-xs text-slate-100 mb-4">
              Dedicated emergency bay with ICU backup, cath lab and on-call
              specialists within 15 minutes.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-white/10 rounded-2xl p-3">
                <p className="font-semibold">Critical Care ICU</p>
                <p className="text-slate-100 mt-1">25+ beds with ventilators</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-3">
                <p className="font-semibold">Cardiac OT</p>
                <p className="text-slate-100 mt-1">
                  Modular operating theatres
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-3">
                <p className="font-semibold">Digital Diagnostics</p>
                <p className="text-slate-100 mt-1">MRI, CT, Cath Lab</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-3">
                <p className="font-semibold">24x7 Pharmacy</p>
                <p className="text-slate-100 mt-1">In-house & online orders</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-4 bg-white text-rayBlue rounded-2xl px-4 py-3 text-xs shadow-lg">
            <p className="font-semibold">Emergency Helpline</p>
            <p className="text-sm font-bold mt-1">+91-98765-43210</p>
          </div>
        </div>
      </div>
    </section>
  );
}
