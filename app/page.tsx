
"use client";

import React, { useState } from "react";
import Image from "next/image";
import jsPDF from "jspdf";

const premiumTable: Record<string, number> = {
  "3 Months": 150,
  "6 Months": 300,
  "9 Months": 200,
  "12 Months": 350,
};

export default function Home() {
  const [started, setStarted] = useState(false);
  const [coveragePeriod, setCoveragePeriod] = useState("3 Months");
  const premium = premiumTable[coveragePeriod];

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(24);
    doc.text("Atlantic Insurance", 20, 20);
    doc.setFontSize(14);
    doc.text("Motor Insurance Quote", 20, 30);
    doc.text(`Coverage Period: ${coveragePeriod}`, 20, 50);
    doc.text(`Premium: BZD ${premium.toFixed(2)}`, 20, 60);
    doc.save("Atlantic-Insurance-Quote.pdf");
  };

  if (!started) {
    return (
      <main>
        <section style={{
          background: "linear-gradient(135deg, #0b2f6b, #1f5dbf)",
          color: "white",
          padding: "30px 20px 90px"
        }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Image src="/logo.png" alt="Atlantic Insurance" width={360} height={90}
              style={{ background: "white", padding: 12, borderRadius: 12 }} />
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 40, marginTop: 50 }}>
              <div>
                <h1 style={{ fontSize: 56, lineHeight: 1.1, marginBottom: 20 }}>
                  Buy Your Motor Insurance Online
                </h1>
                <p style={{ fontSize: 22, opacity: 0.92, maxWidth: 700 }}>
                  Get an instant quote, generate your policy documents, and proceed to secure payment in minutes.
                </p>
                <button onClick={() => setStarted(true)} style={{
                  marginTop: 30,
                  background: "#22c55e",
                  color: "white",
                  border: "none",
                  padding: "18px 32px",
                  borderRadius: 12,
                  fontSize: 20,
                  fontWeight: "bold",
                  cursor: "pointer"
                }}>
                  Start Your Quote
                </button>
              </div>
              <div style={{
                background: "rgba(255,255,255,0.12)",
                borderRadius: 24,
                padding: 30,
                backdropFilter: "blur(8px)"
              }}>
                <h3 style={{ marginTop: 0 }}>Private Use Rates</h3>
                {Object.entries(premiumTable).map(([k,v]) => (
                  <div key={k} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.2)"
                  }}>
                    <span>{k}</span>
                    <strong>BZD {v.toFixed(2)}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 1200, margin: "40px auto", padding: 20 }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 30 }}>
        <div style={{
          background: "white",
          borderRadius: 24,
          padding: 40,
          boxShadow: "0 20px 60px rgba(0,0,0,0.08)"
        }}>
          <Image src="/logo.png" alt="Atlantic Insurance" width={260} height={65} />
          <h2 style={{ color: "#0b2f6b", marginTop: 20 }}>Coverage Selection</h2>
          <p>Select your desired period of coverage.</p>

          <select
            value={coveragePeriod}
            onChange={(e) => setCoveragePeriod(e.target.value)}
            style={{
              width: "100%",
              padding: 16,
              borderRadius: 12,
              border: "1px solid #dbe2ea",
              fontSize: 18
            }}
          >
            <option>3 Months</option>
            <option>6 Months</option>
            <option>9 Months</option>
            <option>12 Months</option>
          </select>

          <div style={{
            marginTop: 30,
            background: "#f8fafc",
            padding: 24,
            borderRadius: 16
          }}>
            <h3 style={{ marginTop: 0 }}>Documents Generated</h3>
            <ul>
              <li>Client Data Form</li>
              <li>Proposal Form</li>
              <li>Policy Schedule</li>
              <li>Certificate of Insurance</li>
            </ul>
          </div>
        </div>

        <div style={{
          background: "white",
          borderRadius: 24,
          padding: 30,
          boxShadow: "0 20px 60px rgba(0,0,0,0.08)"
        }}>
          <h3 style={{ marginTop: 0, color: "#0b2f6b" }}>Premium Summary</h3>
          <div style={{ color: "#64748b" }}>{coveragePeriod}</div>
          <div style={{
            fontSize: 48,
            fontWeight: "bold",
            color: "#16a34a",
            margin: "10px 0 20px"
          }}>
            BZD {premium.toFixed(2)}
          </div>

          <button onClick={generatePDF} style={{
            width: "100%",
            background: "#0b2f6b",
            color: "white",
            border: "none",
            padding: 14,
            borderRadius: 12,
            fontSize: 16,
            marginBottom: 12,
            cursor: "pointer"
          }}>
            Download Quote PDF
          </button>

          <a href="https://example.com/payment" target="_blank" rel="noreferrer"
            style={{
              display: "block",
              textAlign: "center",
              background: "#22c55e",
              color: "white",
              padding: 14,
              borderRadius: 12,
              textDecoration: "none",
              fontWeight: "bold"
            }}>
            Proceed to Payment
          </a>
        </div>
      </div>
    </main>
  );
}
