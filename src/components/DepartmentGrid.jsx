import React from "react";

export default function DepartmentGrid({ departments }) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {departments.map((d) => (
        <div
          key={d.id}
          className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md border border-slate-100 transition"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rayLight flex items-center justify-center text-xl">
              {d.icon}
            </div>
            <h3 className="font-semibold text-rayBlue">{d.name}</h3>
          </div>
          <p className="mt-3 text-sm text-slate-600">{d.description}</p>
        </div>
      ))}
    </div>
  );
}
