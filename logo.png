"use client";

import { useState } from "react";
import Image from "next/image";
import { jsPDF } from "jspdf";

const rates: Record<string, Record<string, number>> = {
  "4": { "3 Months": 200, "6 Months": 450, "9 Months": 300, "12 Months": 500 },
  "6": { "3 Months": 210, "6 Months": 460, "9 Months": 310, "12 Months": 520 },
  "8": { "3 Months": 220, "6 Months": 470, "9 Months": 320, "12 Months": 540 },
};

export default function Home() {
  const [cylinders, setCylinders] = useState("4");
  const [coverage, setCoverage] = useState("3 Months");

  const premium = rates[cylinders][coverage];

  const generatePdf = (title: string) => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Atlantic Insurance Company Ltd.", 20, 20);

    doc.setFontSize(14);
    doc.text(title, 20, 35);
    doc.text(`Coverage Period: ${coverage}`, 20, 50);
    doc.text(`Cylinders: ${cylinders}`, 20, 60);
    doc.text(`Premium: BZD ${premium.toFixed(2)}`, 20, 70);

    const filename =
      title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + ".pdf";

    doc.save(filename);
  };

  return (
    <main style={{ maxWidth: 1200, margin: "0 auto", padding: 40 }}>
      <div style={{ marginBottom: 30 }}>
        <Image
          src="/logo.png"
          alt="Atlantic Insurance"
          width={420}
          height={120}
        />
      </div>

      <h1 style={{ color: "#0b2f6b" }}>Documents, Premium & Payment</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          marginTop: 20,
        }}
      >
        <div>
          <label>Number of Cylinders</label>
          <select
            value={cylinders}
            onChange={(e) => setCylinders(e.target.value)}
            style={{ width: "100%", padding: 12, marginTop: 6 }}
          >
            <option value="4">4 Cylinders</option>
            <option value="6">6 Cylinders</option>
            <option value="8">8 Cylinders</option>
          </select>
        </div>

        <div>
          <label>Coverage Period</label>
          <select
            value={coverage}
            onChange={(e) => setCoverage(e.target.value)}
            style={{ width: "100%", padding: 12, marginTop: 6 }}
          >
            <option>3 Months</option>
            <option>6 Months</option>
            <option>9 Months</option>
            <option>12 Months</option>
          </select>
        </div>
      </div>

      <div
        style={{
          marginTop: 30,
          padding: 20,
          background: "#f0fdf4",
          borderRadius: 12,
        }}
      >
        <div style={{ fontSize: 14, color: "#166534" }}>Premium</div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#15803d",
          }}
        >
          BZD {premium.toFixed(2)}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 30,
          marginTop: 30,
        }}
      >
        <div
          style={{
            border: "1px dashed #cbd5e1",
            borderRadius: 12,
            padding: 20,
            textAlign: "center",
          }}
        >
          <Image
            src="/payment-qr.png"
            alt="Payment QR Code"
            width={220}
            height={220}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {[
            "Client Data Form",
            "Proposal Form",
            "Policy Schedule",
            "Certificate of Insurance",
          ].map((doc) => (
            <button
              key={doc}
              onClick={() => generatePdf(doc)}
              style={{
                padding: 14,
                borderRadius: 8,
                border: "1px solid #cbd5e1",
                background: "white",
                cursor: "pointer",
              }}
            >
              Print {doc}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
