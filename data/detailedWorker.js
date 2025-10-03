// src/data/detailedWorker.js
const detailedWorker = {
  // --- Header Details ---
  id: 1,
  full_name: "Justin Septimus",
  rating: 4.5,
  avatar: "https://i.pravatar.cc/40?img=11", // Placeholder for the actual image
  phone_number: "+966531214994",
  email: "justin_septimus@gmail.com",
  activation_code: "313141",
  sanctions_status: "Cleared",
  ready_to_work: true,

  // --- Basic Details ---
  gender: "Male",
  postcode: "145341",
  address: "2356 King Abdulaziz Road",
  industry: "Security Services",
  worker_type: "Security Guard",

  // --- Compliance Details ---
  compliance_docs: [
    { name: "Health & Safety (HSE) Certificate", status: "Approved" },
    { name: "Manual Handling Certificate", status: "Approved" },
    { name: "First Aid Certification", status: "Approved" },
    { name: "National ID / Passport", status: "Approved" },
    { name: "Proof of Address", status: "Approved" },
    { name: "Right to Work Document", status: "Approved" },
    { name: "Driving License", status: "Approved" },
    { name: "CSCS Card (Construction Certification)", status: "Approved" },
  ],
};

export default detailedWorker;
