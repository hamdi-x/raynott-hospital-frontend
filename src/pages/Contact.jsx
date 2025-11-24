import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thank you. Our team will reach out to you shortly.");
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-[1.5fr,2fr]">
      <div>
        <h1 className="text-2xl font-semibold text-rayBlue mb-2">Contact Us</h1>
        <p className="text-sm text-slate-700 mb-4">
          We are here to help you with appointments, reports, billing and more.
        </p>

        <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm space-y-2 text-sm text-slate-700">
          <p>
            <span className="font-semibold">Address:</span> 12, Health City
            Road, Bengaluru, India
          </p>
          <p>
            <span className="font-semibold">General Helpline:</span>{" "}
            +91-98765-43210
          </p>
          <p>
            <span className="font-semibold">Appointments:</span>{" "}
            +91-98765-43211
          </p>
          <p>
            <span className="font-semibold">Email:</span> care@raynott.com
          </p>
        </div>
      </div>

      <div>
        {status && (
          <div className="mb-4 text-sm rounded-lg px-3 py-2 bg-emerald-50 text-emerald-800 border border-emerald-200">
            {status}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm space-y-3"
        >
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-slate-600">
                Name *
              </label>
              <input
                required
                className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-rayTeal"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600">
                Email *
              </label>
              <input
                type="email"
                required
                className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-rayTeal"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-slate-600">
              Message *
            </label>
            <textarea
              required
              rows={4}
              className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-rayTeal resize-none"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 rounded-full bg-rayTeal text-white text-sm font-semibold shadow hover:shadow-md transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
