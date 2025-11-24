import React, { useEffect, useState } from "react";
import axios from "axios";
import DoctorGrid from "../components/DoctorGrid";
import { API_BASE } from "../config";


export default function Doctors() {
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE}/api/departments`).then((res) => setDepartments(res.data));
    axios.get(`${API_BASE}/api/doctors`).then((res) => setDoctors(res.data));
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold text-rayBlue mb-2">Our Doctors</h1>
      <p className="text-sm text-slate-700 mb-6">
        Experienced consultants supported by a dedicated clinical team.
      </p>
      <DoctorGrid doctors={doctors} departments={departments} />
    </section>
  );
}
