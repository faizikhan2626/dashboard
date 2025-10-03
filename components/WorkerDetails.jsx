"use client";
import React, { useState } from "react";
import {
  HiOutlineArrowLeft,
  HiOutlinePencil,
  HiOutlinePlus,
} from "react-icons/hi";
import { Switch } from "@/components/ui/switch"; // ✅ shadcn switch

const detailedWorker = {
  full_name: "Justin Septimus",
  rating: 4.5,
  avatar: "https://i.pravatar.cc/100",
  phone_number: "+96653124994",
  email: "justin.septimus@gmail.com",
  activation_code: "313141",
  sanctions_status: "Cleared",
  ready_to_work: true,
  warning: false,
  gender: "Male",
  postcode: "145341",
  address: "2356 King Abdulaziz Road",
  industry: "Security Services",
  worker_type: "Security Guard",
  compliance_docs: [
    { name: "Health & Safety (HSE) Certificate", status: "Approved" },
    { name: "Manual Handling Certificate", status: "Approved" },
    { name: "First Aid Certification", status: "Approved" },
    { name: "National ID / Passport", status: "Approved" },
    { name: "Proof of Address", status: "Approved" },
    { name: "Right to Work Document", status: "Approved" },
    { name: "Driving Licence", status: "Approved" },
    { name: "CSCS Card (Construction Certification)", status: "Approved" },
  ],
};

function StarRating({ value }) {
  const full = Math.floor(value);
  const half = value % 1 >= 0.5;
  const stars = Array.from({ length: 5 }).map((_, i) => {
    if (i < full) return "★";
    if (i === full && half) return "☆";
    return "☆";
  });
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

function DetailItem({ label, value, className = "col-span-1" }) {
  return (
    <div className={className}>
      <p className="text-xs font-medium text-gray-500 mb-1">{label}</p>
      <p className="text-sm font-semibold text-gray-800">{value}</p>
    </div>
  );
}

function ComplianceDocumentRow({ name, status }) {
  const [checked, setChecked] = useState(status === "Approved");
  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
      <div className="text-sm font-medium text-gray-700">{name}</div>
      <div className="flex items-center space-x-2">
        <span className="text-sm font-semibold text-gray-600">{status}</span>
        <Switch
          checked={checked}
          onCheckedChange={setChecked}
          className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-300"
        />
        <button className="px-2 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full hover:bg-green-200">
          Preview
        </button>
        <button className="px-2 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full hover:bg-green-200">
          Edit
        </button>
        <button className="px-2 py-1 bg-red-200 text-red-800 text-sm font-medium rounded-full hover:bg-red-300">
          Delete
        </button>
      </div>
    </div>
  );
}

export default function WorkerDetails({ worker = detailedWorker, onBack }) {
  const [ready, setReady] = useState(worker.ready_to_work);
  const [warning, setWarning] = useState(worker.warning);

  const {
    full_name,
    rating,
    avatar,
    phone_number,
    email,
    activation_code,
    sanctions_status,
    gender,
    postcode,
    address,
    industry,
    worker_type,
    compliance_docs,
  } = worker;

  const sanctionsColor =
    sanctions_status === "Cleared"
      ? "text-green-600 bg-green-100"
      : "text-red-600 bg-red-100";

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="flex-1 p-8 bg-gray-50 overflow-auto">
        {/* Header */}
        <div
          className="flex items-center space-x-2 mb-6 cursor-pointer text-gray-600"
          onClick={onBack}
        >
          <HiOutlineArrowLeft className="w-5 h-5" />
          <span className="text-lg font-medium">Back to My Workers</span>
        </div>

        {/* Worker Details Section */}
        <h1 className="text-l font-semibold text-gray-800 mb-1">
          Worker Details
        </h1>

        <div className="p-6 bg-white">
          {/* Worker Header Info */}
          <div className="flex items-start justify-between pb-4 border-b border-gray-100 mb-6">
            {/* Avatar */}
            <img
              src={avatar}
              alt={full_name}
              className="w-24 h-24 rounded-3xl object-cover"
            />

            {/* Main content */}
            <div className="ml-4 flex-1">
              {/* Stars + name */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <StarRating value={rating} />
                  <span className="text-sm font-semibold text-gray-600">
                    {rating.toFixed(1)}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {full_name}
                </h2>
              </div>

              {/* Info rows */}
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-2 text-sm items-center">
                {/* Row 1 */}
                <p className="text-gray-500 truncate">{email}</p>
                <p className="text-gray-500">
                  Activation Code:&nbsp;
                  <span className="font-bold text-gray-900">
                    {activation_code}
                  </span>
                </p>
                <p className="text-gray-500">
                  Sanctions:&nbsp;
                  <span
                    className={`px-2 py-0.5 rounded-full font-bold text-xs ${sanctionsColor}`}
                  >
                    {sanctions_status}
                  </span>
                </p>

                {/* Row 2 */}
                <p className="text-gray-500">{phone_number}</p>

                <div className="flex items-center space-x-2">
                  <span className="text-gray-500">Ready to work:</span>
                  <Switch
                    checked={ready}
                    onCheckedChange={setReady}
                    className={
                      "data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-300"
                    }
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-gray-500">Set Warning:</span>
                  <Switch
                    checked={warning}
                    onCheckedChange={setWarning}
                    className={
                      "data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-300"
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-4  mb-6">
            <button className="py-2 px-4 text-sm font-semibold bg-black text-white rounded-xl">
              Worker Basic Information
            </button>
            <button className="py-2 px-4 text-sm font-medium text-gray-500 bg-gray-200 rounded-xl">
              Timesheet
            </button>
            <button className="py-2 px-4 text-sm font-medium text-gray-500 bg-gray-200 rounded-xl">
              Worker Rota
            </button>
            <button className="py-2 px-4 text-sm font-medium text-gray-500 bg-gray-200 rounded-xl">
              Profile Warnings
            </button>
            <button className="py-2 px-4 text-sm font-medium text-gray-500 bg-gray-200 rounded-xl">
              Activity Logs
            </button>
          </div>

          {/* Basic Details Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Basic Details
              </h3>
              <button className="flex items-center space-x-1 px-3 py-1.5 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-gray-200">
                <HiOutlinePencil className="w-4 h-4 text-blue-600" />
                <span className=" text-blue-600">Edit Details</span>
              </button>
            </div>

            <div className="grid grid-cols-5 gap-x-10 gap-y-6">
              <DetailItem label="Full Name" value={full_name} />
              <DetailItem label="Gender" value={gender} />
              <DetailItem label="Phone Number" value={phone_number} />
              <DetailItem label="Email" value={email} />
              <DetailItem label="Postcode" value={postcode} />
              <DetailItem label="Address" value={address} />
              <DetailItem label="Industry" value={industry} />
              <DetailItem label="Worker Type" value={worker_type} />
              <DetailItem label="Activation Code" value={activation_code} />
            </div>
          </div>

          {/* Compliance Section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Compliance
              </h3>
              <button className="flex items-center space-x-1 px-3 py-1.5 bg-gray-200 rounded-md text-sm font-medium text-white hover:bg-indigo-700">
                <HiOutlinePlus className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600">Add New Document</span>
              </button>
            </div>

            <div className="bg-white p-4 rounded-lg  ">
              {compliance_docs.map((doc, index) => (
                <ComplianceDocumentRow
                  key={index}
                  name={doc.name}
                  status={doc.status}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
