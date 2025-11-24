import React, { useEffect, useState } from "react";
import axios from "axios";
import DepartmentGrid from "../components/DepartmentGrid";
import { API_BASE } from "../config";


export default function Departments() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE}/api/departments`).then((res) => setDepartments(res.data));
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold text-rayBlue mb-2">Departments</h1>
      <p className="text-sm text-slate-700 mb-6">
        Explore our key specialities and super-specialities. Call our helpline
        for more information.
      </p>
      <DepartmentGrid departments={departments} />
    </section>
  );
}
