import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../config";


export default function MeetingBanner() {
  const [meeting, setMeeting] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE}/api/meeting`)
      .then((res) => setMeeting(res.data))
      .catch(() => {});
  }, []);

  if (!meeting) return null;

  const date = new Date(meeting.dateTime);

  return (
    <section className="bg-amber-50 border border-amber-200 text-amber-900">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide">
            Upcoming Meeting
          </p>
          <p className="text-sm font-medium mt-1">{meeting.title}</p>
          <p className="text-xs mt-1">{meeting.description}</p>
        </div>
        <div className="text-xs md:text-sm text-right">
          <p>
            {date.toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric"
            })}{" "}
            at{" "}
            {date.toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit"
            })}
          </p>
          <p className="mt-1">{meeting.location}</p>
        </div>
      </div>
    </section>
  );
}
