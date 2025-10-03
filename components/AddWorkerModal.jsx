"use client";
import { X } from "lucide-react";

export default function AddWorkerModal({ isOpen, onClose }) {
  if (!isOpen) return null; // don’t render if closed

  return (
    // BACKDROP
    <div className="fixed inset-0 flex items-center justify-center bg-black/30  z-50">
      {/* MODAL CONTAINER */}
      <div className="bg-white rounded-4xl shadow-2xl w-full max-w-3xl p-8 relative">
        {/* Top Actions */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Add New Worker</h2>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <X size={22} />
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
            >
              Add Worker
            </button>
          </div>
        </div>

        {/* FORM */}
        <form className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Ex: Charlie Franci"
              className="mt-1 w-full p-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select className="mt-1 w-full p-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none">
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="(907) 486-4845"
              className="mt-1 w-full p-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Ex: charliefranci@gmail.com"
              className="mt-1 w-full p-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Post Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Ex: 145341"
              className="mt-1 w-full p-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              placeholder="Ex: 2356 King Abdulaziz Road"
              className="mt-1 w-full p-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Worker Type
            </label>
            <select className="mt-1 w-full p-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none">
              <option>Select</option>
              <option>Part Time</option>
              <option>Full Time</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Industry
            </label>
            <select className="mt-1 w-full p-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none">
              <option>Select</option>
              <option>Security</option>
              <option>Transport</option>
            </select>
          </div>
        </form>

        {/* Worker Documents */}
        <h3 className="text-lg font-semibold mt-8">Worker Documents</h3>
        <div className="flex gap-4 mt-4">
          <button className="px-5 py-2 rounded-lg bg-indigo-50 text-indigo-600 font-medium hover:bg-indigo-100 transition">
            Invite Worker to Complete Profile
          </button>
          <button className="px-5 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition">
            Add Documents Manually
          </button>
        </div>
      </div>
    </div>
  );
}
