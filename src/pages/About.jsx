import React from "react";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold text-rayBlue mb-4">
        About Raynott Multi Speciality Hospital
      </h1>
      <p className="text-sm text-slate-700 mb-4">
        Raynott Multi Speciality Hospital is a 250+ bed, tertiary care facility
        built with a single promise: to deliver high-quality, ethical and
        transparent healthcare that families can trust.
      </p>
      <p className="text-sm text-slate-700 mb-4">
        From preventive check-ups to complex cardiac and neuro surgeries, our
        team of experienced consultants, nurses and technicians work together to
        provide evidence-based treatment in a safe, patient-centric
        environment.
      </p>
      <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
        <li>Digitally integrated ICU and operating theatres</li>
        <li>Dedicated women & child block</li>
        <li>In-house diagnostics: Lab, Radiology, Cath Lab</li>
        <li>24x7 pharmacy, ambulance and blood bank</li>
      </ul>
    </section>
  );
}
