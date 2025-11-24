import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import DepartmentGrid from "../components/DepartmentGrid";
import DoctorGrid from "../components/DoctorGrid";
import MeetingBanner from "../components/MeetingBanner";
import { API_BASE } from "../config";


export default function Home() {
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE}/api/departments`).then((res) => setDepartments(res.data));
    axios.get(`${API_BASE}/api/doctors`).then((res) => setDoctors(res.data));
  }, []);

  return (
    <>
      <Hero />
      <MeetingBanner />
      <section className="max-w-6xl mx-auto px-4 py-10 space-y-10">
        <div>
          <h2 className="text-xl font-semibold text-rayBlue mb-2">
            Centres of Excellence
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            Our core specialities are led by senior consultants with
            international training and experience.
          </p>
          <DepartmentGrid departments={departments.slice(0, 4)} />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-rayBlue mb-2">
            Featured Consultants
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            A multidisciplinary team working together to create the best care
            plan for you.
          </p>
          <DoctorGrid doctors={doctors} departments={departments} />
        </div>
      </section>
    </>
  );
}
