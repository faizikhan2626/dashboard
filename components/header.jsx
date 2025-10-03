"use client";
import { useState } from "react";
import { Input } from "./ui/input"; // if you used shadcn, otherwise replace with <input>
import { Button } from "./ui/button"; // optional
import { ChevronDown } from "lucide-react";
import AddWorkerModal from "../components/AddWorkerModal";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">Workers</h1>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 border rounded-md px-3 py-2 text-sm bg-white hover:shadow">
          Filter by <ChevronDown size={16} />
        </button>

        {/* simple input fallback if you don't have shadcn input */}
        <div className="relative">
          <input
            className="w-[240px] border rounded-md px-3 py-2 bg-white"
            placeholder="Search"
          />
        </div>

        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:opacity-95"
          onClick={() => setOpen(true)}
        >
          + Add New Worker
        </button>
      </div>
      <AddWorkerModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
