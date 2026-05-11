
"use client";

import React, { useState } from "react";
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

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    boxSizing: "border-box",
  };

  return (
    <main style={{ maxWidth: 1000, margin: "40px auto", padding: 20 }}>
      <div style={{ background: "white", padding: 32, borderRadius: 16, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}>
        <h1 style={{ color: "#0b3a78", fontSize: 40, marginBottom: 8 }}>
          Atlantic Insurance
        </h1>
        <p style={{ color: "#6b7280", marginBottom: 32 }}>
          Buy your vehicle insurance online.
        </p>

        <h2>Personal Information</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
          {[
            ["fullName", "Full Name"],
            ["email", "Email"],
            ["phone", "Phone Number"],
            ["address", "Address"],
          ].map(([field, label]) => (
            <input
              key={field}
              placeholder={label}
              style={inputStyle}
              value={(form as any)[field]}
              onChange={(e) => updateField(field, e.target.value)}
            />
          ))}
        </div>

        <h2>Vehicle Information</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
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
              style={inputStyle}
              value={(form as any)[field]}
              onChange={(e) => updateField(field, e.target.value)}
            />
          ))}

          <select
            style={inputStyle}
            value={form.cylinders}
            onChange={(e) => updateField("cylinders", e.target.value)}
          >
            <option value="4">4 Cylinders</option>
            <option value="6">6 Cylinders</option>
            <option value="8">8 Cylinders</option>
          </select>

          <select
            style={inputStyle}
            value={form.coveragePeriod}
            onChange={(e) => updateField("coveragePeriod", e.target.value)}
          >
            <option>3 Months</option>
            <option>6 Months</option>
            <option>9 Months</option>
            <option>12 Months</option>
          </select>
        </div>

        <div style={{ background: "#eff6ff", padding: 24, borderRadius: 12, marginBottom: 24 }}>
          <h3 style={{ marginTop: 0, color: "#0b3a78" }}>Premium Summary</h3>
          <p style={{ fontSize: 36, fontWeight: "bold", color: "#15803d", margin: 0 }}>
            BZD {premium.toFixed(2)}
          </p>
        </div>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <button
            onClick={generatePDF}
            style={{
              background: "#0b3a78",
              color: "white",
              padding: "12px 24px",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            Generate PDF
          </button>

          <a
            href="https://example.com/payment"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#16a34a",
              color: "white",
              padding: "12px 24px",
              borderRadius: 8,
              textDecoration: "none",
            }}
          >
            Proceed to Payment
          </a>
        </div>
      </div>
    </main>
  );
}
