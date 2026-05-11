
"use client";

import { useState } from "react";
import jsPDF from "jspdf";

const premiumTable: Record<string, number> = {
  "3 Months": 150,
  "6 Months": 300,
  "9 Months": 200,
  "12 Months": 350,
};

export default function Home() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    make: "",
    model: "",
    year: "",
    registration: "",
    engineNo: "",
    chassisNo: "",
    cylinders: "4",
    coveragePeriod: "3 Months",
  });

  const premium = premiumTable[form.coveragePeriod] || 0;

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Atlantic Insurance - Motor Insurance Quote", 20, 20);

    doc.setFontSize(12);
    let y = 40;

    const rows = [
      ["Full Name", form.fullName],
      ["Email", form.email],
      ["Phone", form.phone],
      ["Address", form.address],
      ["Vehicle", `${form.year} ${form.make} ${form.model}`],
      ["Registration", form.registration],
      ["Engine No.", form.engineNo],
      ["Chassis No.", form.chassisNo],
      ["Cylinders", form.cylinders],
      ["Coverage Period", form.coveragePeriod],
      ["Premium", `BZD ${premium.toFixed(2)}`],
    ];

    rows.forEach(([label, value]) => {
      doc.text(`${label}: ${value}`, 20, y);
      y += 8;
    });

    doc.save("Atlantic-Insurance-Quote.pdf");
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">
          Atlantic Insurance
        </h1>
        <p className="text-gray-600 mb-8">
          Buy your vehicle insurance online.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[
            ["fullName", "Full Name"],
            ["email", "Email"],
            ["phone", "Phone Number"],
            ["address", "Address"],
          ].map(([field, label]) => (
            <input
              key={field}
              placeholder={label}
              className="border rounded-lg p-3"
              value={(form as any)[field]}
              onChange={(e) => updateField(field, e.target.value)}
            />
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">Vehicle Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[
            ["make", "Make"],
            ["model", "Model"],
            ["year", "Year"],
            ["registration", "Registration Number"],
            ["engineNo", "Engine Number"],
            ["chassisNo", "Chassis Number"],
          ].map(([field, label]) => (
            <input
              key={field}
              placeholder={label}
              className="border rounded-lg p-3"
              value={(form as any)[field]}
              onChange={(e) => updateField(field, e.target.value)}
            />
          ))}

          <select
            className="border rounded-lg p-3"
            value={form.cylinders}
            onChange={(e) => updateField("cylinders", e.target.value)}
          >
            <option>4</option>
            <option>6</option>
            <option>8</option>
          </select>

          <select
            className="border rounded-lg p-3"
            value={form.coveragePeriod}
            onChange={(e) => updateField("coveragePeriod", e.target.value)}
          >
            <option>3 Months</option>
            <option>6 Months</option>
            <option>9 Months</option>
            <option>12 Months</option>
          </select>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            Premium Summary
          </h3>
          <p className="text-3xl font-bold text-green-700">
            BZD {premium.toFixed(2)}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={generatePDF}
            className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
          >
            Generate PDF
          </button>

          <a
            href="https://example.com/payment"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Proceed to Payment
          </a>
        </div>
      </div>
    </main>
  );
}
