import { HiOutlineDotsHorizontal } from "react-icons/hi";
import workers from "../data/workers";

function StarRating({ value }) {
  const full = Math.floor(value);
  const half = value % 1 >= 0.5;
  const stars = Array.from({ length: 5 }).map((_, i) => {
    if (i < full) return "★";
    if (i === full && half) return "☆"; // simple half placeholder
    return "☆";
  });
  // (5) Stars a little bigger + bolder
  return (
    <span className="text-yellow-500 text-lg font-semibold">
      {stars.join(" ")}
    </span>
  );
}

function StatusBadge({ status }) {
  const map = {
    Approved: "bg-green-100 text-green-800",
    Pending: "bg-yellow-100 text-yellow-800",
    Rejected: "bg-red-100 text-red-800",
    "In Review": "bg-amber-100 text-amber-800",
  };
  const cls = map[status] || "bg-gray-100 text-gray-800";
  return (
    <span className={`px-2 py-0.5 rounded-full text-sm font-semibold ${cls}`}>
      {status}
    </span>
  );
}

export default function WorkersTable({ onViewProfile }) {
  return (
    // (2) Table color same as background
    <div className=" shadow rounded-lg overflow-hidden">
      <table className="min-w-full">
        <thead className="bg-gray-100 text-gray-700 font-semibold">
          <tr>
            <th className="p-3 text-left">Worker Name</th>
            <th className="p-3 text-left">Work Agencies</th>
            <th className="p-3 text-left">Rating</th>
            <th className="p-3 text-left">Industry</th>
            <th className="p-3 text-left">Compliance</th>
            <th className="p-3 text-left">Worker Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {workers.map((w, idx) => (
            <tr key={idx} className="hover:bg-gray-100">
              <td className="p-3 flex items-center gap-3 align-middle">
                <img
                  src={w.avatar}
                  alt={w.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="font-semibold text-gray-800">{w.name}</div>
              </td>

              <td className="p-3 text-sm font-semibold text-gray-700 align-middle">
                {w.agency}
              </td>

              <td className="p-3 align-middle">
                <div className="flex items-center gap-2">
                  <StarRating value={w.rating} />
                  <span className="text-sm font-semibold text-gray-700">
                    {w.rating.toFixed(1)}
                  </span>
                </div>
              </td>

              <td className="p-3 text-sm font-semibold text-gray-700 align-middle">
                {w.industry}
              </td>

              <td className="p-3 text-sm  font-semibold text-gray-700 align-middle">
                {w.compliance}%
              </td>

              <td className="p-3 align-middle">
                <StatusBadge status={w.status} />
              </td>

              {/* Fixed Actions column */}
              <td className="p-3 text-sm font-semibold text-indigo-600 align-middle">
                <div className="flex items-center gap-2">
                  <span
                    onClick={() => onViewProfile(w)}
                    className="cursor-pointer"
                  >
                    Profile Details
                  </span>
                  <span className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full">
                    <HiOutlineDotsHorizontal className="w-4 h-4 text-gray-600" />
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
