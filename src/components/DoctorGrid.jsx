import React from "react";

export default function DoctorGrid({ doctors, departments }) {
  const getDeptName = (id) =>
    departments.find((d) => d.id === id)?.name || "Multi Speciality";

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {doctors.map((doc) => (
        <div
          key={doc.id}
          className="bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-100 p-4 transition"
        >
          <div className="flex gap-3">
            <img
              src={doc.image}
              alt={doc.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-rayBlue">{doc.name}</h3>
              <p className="text-xs text-rayTeal">{doc.specialty}</p>
              <p className="text-xs text-slate-500 mt-1">
                {getDeptName(doc.departmentId)}
              </p>
            </div>
          </div>
          <div className="mt-3 text-xs text-slate-600">
            <p>Experience: {doc.experience}</p>
            <p>Qualification: {doc.qualification}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
