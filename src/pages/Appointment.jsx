import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../config";


export default function Appointment() {
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    departmentId: "",
    doctorId: "",
    date: "",
    time: "",
    message: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    axios.get(`${API_BASE}/api/departments`).then((res) => setDepartments(res.data));
    axios.get(`${API_BASE}/api/doctors`).then((res) => setDoctors(res.data));
  }, []);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    try {
      const res = await axios.post(`${API_BASE}/api/appointments`, {
        ...form,
        departmentId: Number(form.departmentId) || null,
        doctorId: form.doctorId ? Number(form.doctorId) : null
      });
      setStatus({ type: "success", message: res.data.message });
      setForm({
        name: "",
        email: "",
        phone: "",
        departmentId: "",
        doctorId: "",
        date: "",
        time: "",
        message: ""
      });
    } catch (err) {
      setStatus({
        type: "error",
        message: err.response?.data?.error || "Failed to book appointment"
      });
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-[2fr,1.5fr]">
      <div>
        <h1 className="text-2xl font-semibold text-rayBlue mb-2">
          Book an Appointment
        </h1>
        <p className="text-sm text-slate-700 mb-6">
          Share a few details and our team will confirm your appointment via
          call or SMS.
        </p>

        {status.message && (
          <div
            className={`mb-4 text-sm rounded-lg px-3 py-2 ${
              status.type === "success"
                ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                : "bg-rose-50 text-rose-800 border border-rose-200"
            }`}
          >
            {status.message}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-slate-600">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-rayTeal"
                required
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-rayTeal"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-slate-600">
                Email (optional)
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-rayTeal"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600">
                Department *
              </label>
              <select
                name="departmentId"
                value={form.departmentId}
                onChange={handleChange}
                className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-rayTeal"
                required
              >
                <option value="">Select department</option>
                {departments.map((d) => (
                  <option value={d.id} key={d.id}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-slate-600">
                Preferred Doctor (optional)
              </label>
              <select
                name="doctorId"
                value={form.doctorId}
                onChange={handleChange}
                className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-rayTeal"
              >
                <option value="">Any doctor</option>
                {doctors.map((doc) => (
                  <option value={doc.id} key={doc.id}>
                    {doc.name} – {doc.specialty}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-slate-600">
                  Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-rayTeal"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-600">
                  Time *
                </label>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-rayTeal"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-slate-600">
              Brief concern (optional)
            </label>
            <textarea
              name="message"
              rows={3}
              value={form.message}
              onChange={handleChange}
              className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-rayTeal resize-none"
              placeholder="Chest pain, follow-up, health checkup, etc."
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-5 py-2.5 rounded-full bg-rayTeal text-white text-sm font-semibold shadow hover:shadow-md transition"
          >
            Submit Request
          </button>
        </form>
      </div>

      <aside className="space-y-4">
        <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-rayBlue mb-2">
            Need urgent help?
          </h2>
          <p className="text-sm text-slate-700 mb-2">
            For emergencies, please call our helpline instead of submitting a
            form.
          </p>
          <p className="text-lg font-bold text-rayTeal">+91-98765-43210</p>
          <p className="text-xs text-slate-600 mt-1">
            24x7 Emergency & Trauma Centre
          </p>
        </div>
      </aside>
    </section>
  );
}
