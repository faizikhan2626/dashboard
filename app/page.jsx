// app/page.js

"use client"; // REQUIRED for using React Hooks (useState) in Next.js App Router

import React, { useState } from "react";
import Header from "../components/header";
import WorkersTable from "../components/workers-table.jsx";
import WorkerDetails from "../components/WorkerDetails.jsx"; // Import the new component
import detailedWorker from "../data/detailedWorker"; // Import the detailed data

// Helper object to provide full details when a worker is clicked
const workerWithDetails = {
  ...detailedWorker,
  name: detailedWorker.full_name, // Map properties for consistency
  agency: "SecureStaff Ltd",
  compliance: 95,
  status: "Approved",
};

export default function Page() {
  // 1. State to control the view: 'list' (WorkersTable) or 'details' (WorkerDetails)
  const [view, setView] = useState("list");
  // 2. State to hold the data of the currently selected worker
  const [selectedWorkerData, setSelectedWorkerData] =
    useState(workerWithDetails);

  // Function to switch to the details view
  const handleViewProfile = (worker) => {
    // In a real app, you'd fetch the detailed data using the worker ID.
    // Here, we use the static 'workerWithDetails' object for demonstration.
    setSelectedWorkerData(workerWithDetails);
    setView("details");
  };

  // Function to switch back to the list view
  const handleBack = () => {
    setView("list");
  };

  return (
    <div className="space-y-6">
      {/* The Header component is only shown on the list view */}
      {view === "list" && <Header />}

      {/* Conditional Rendering based on the 'view' state */}
      {view === "list" ? (
        // Pass the handler to the WorkersTable
        <WorkersTable onViewProfile={handleViewProfile} />
      ) : (
        // Pass the selected data and the back handler to the WorkerDetails
        <WorkerDetails worker={selectedWorkerData} onBack={handleBack} />
      )}
    </div>
  );
}
