
"use client";

import React, { useState } from "react";
import Image from "next/image";

const premiumTable: Record<string, Record<string, number>> = {
  "4": { "3 Months": 200, "6 Months": 450, "9 Months": 300, "12 Months": 500 },
  "6": { "3 Months": 210, "6 Months": 460, "9 Months": 310, "12 Months": 520 },
  "8": { "3 Months": 220, "6 Months": 470, "9 Months": 320, "12 Months": 540 },
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 8,
  border: "1px solid #d0d7e2",
  boxSizing: "border-box",
};

function Field({
  label,
  type = "text",
}: {
  label: string;
  type?: string;
}) {
  return (
    <div>
      <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{label}</label>
      <input type={type} style={inputStyle} />
    </div>
  );
}

export default function Home() {
  const [step, setStep] = useState(1);
  const [cylinders, setCylinders] = useState("4");
  const [coverage, setCoverage] = useState("3 Months");

  const premium = premiumTable[cylinders][coverage];

  return (
    <main>
      <section style={{
        background: "linear-gradient(135deg,#0b2f6b,#2e63c9)",
        color: "white",
        padding: "24px 0 60px"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <Image
            src="/logo.png"
            alt="Atlantic Insurance"
            width={420}
            height={110}
            style={{ background: "white", padding: 14, borderRadius: 14 }}
          />
          <h1 style={{ fontSize: 48, marginTop: 40, marginBottom: 10 }}>
            Buy Your Motor Insurance Online
          </h1>
          <p style={{ fontSize: 22, maxWidth: 700, opacity: 0.95 }}>
            Complete your application, upload your documents, and receive your quote instantly.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "-30px auto 40px", padding: "0 24px" }}>
        <div style={{
          background: "white",
          borderRadius: 20,
          boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
          padding: 32
        }}>
          <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
            {["1. Applicant Information", "2. Vehicle Information", "3. Documents, Premium & Payment"].map((label, i) => (
              <div key={label}
                style={{
                  padding: "10px 14px",
                  borderRadius: 999,
                  background: step === i + 1 ? "#0b2f6b" : "#eaf0fb",
                  color: step === i + 1 ? "white" : "#0b2f6b",
                  fontWeight: 600,
                  fontSize: 14
                }}>
                {label}
              </div>
            ))}
          </div>

          {step === 1 && (
            <>
              <h2 style={{ color: "#0b2f6b" }}>Identification of Applicant</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                <Field label="First Name" />
                <Field label="Middle Name" />
                <Field label="Surname" />
              </div>
              <div style={{ marginTop: 16 }}>
                <Field label="Company Name (Optional for Businesses)" />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 16 }}>
                <Field label="Social Security No. / Passport No." />
                <Field label="Date of Birth" type="date" />
                <Field label="Nationality" />
                <Field label="Source of Income" />
                <Field label="Occupation" />
                <Field label="Home Address" />
                <Field label="City/Town/Village" />
                <Field label="District" />
                <Field label="Telephone" />
                <Field label="Cellular" />
                <Field label="Email" />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2 style={{ color: "#0b2f6b" }}>Particulars of Vehicle Insured</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                <Field label="Make" />
                <Field label="Model" />
                <Field label="Year Manufactured" />
                <Field label="Type" />
                <Field label="Registry No. or VIN" />
                <Field label="Capacity" />

                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Cylinders</label>
                  <select
                    value={cylinders}
                    onChange={(e) => setCylinders(e.target.value)}
                    style={inputStyle}
                  >
                    <option value="4">4 Cylinders</option>
                    <option value="6">6 Cylinders</option>
                    <option value="8">8 Cylinders</option>
                  </select>
                </div>

                <Field label="Color" />
                <Field label="License Plate Number" />
                <Field label="Present Value" />
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 style={{ color: "#0b2f6b" }}>Documents, Premium & Payment</h2>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginBottom: 24 }}>
                {[
                  "Driver's License",
                  "Vehicle Title",
                  "Social Security Card / Passport",
                  "Utility Bill",
                ].map((label) => (
                  <div key={label}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{label}</label>
                    <input type="file" style={inputStyle} />
                  </div>
                ))}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24, marginBottom: 24 }}>
                <div>
                  <label style={{ display: "block", fontWeight: 600, marginBottom: 6 }}>Coverage Period</label>
                  <select
                    value={coverage}
                    onChange={(e) => setCoverage(e.target.value)}
                    style={inputStyle}
                  >
                    <option>3 Months</option>
                    <option>6 Months</option>
                    <option>9 Months</option>
                    <option>12 Months</option>
                  </select>
                </div>

                <div style={{
                  background: "#f0f9f4",
                  border: "1px solid #bbf7d0",
                  borderRadius: 12,
                  padding: 20
                }}>
                  <div style={{ fontSize: 13, color: "#166534", marginBottom: 8 }}>Premium</div>
                  <div style={{ fontSize: 36, fontWeight: 700, color: "#15803d" }}>
                    BZD {premium.toFixed(2)}
                  </div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                <div style={{
                  border: "2px dashed #cbd5e1",
                  borderRadius: 12,
                  padding: 30,
                  textAlign: "center",
                  color: "#64748b"
                }}>
                  QR Code Placeholder
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <a href="https://example.com/payment" target="_blank" rel="noreferrer"
                    style={{
                      background: "#22c55e",
                      color: "white",
                      textDecoration: "none",
                      padding: "14px 18px",
                      borderRadius: 8,
                      textAlign: "center",
                      fontWeight: 700
                    }}>
                    Proceed to Payment
                  </a>

                  {[
                    "Client Data Form",
                    "Proposal Form",
                    "Policy Schedule",
                    "Certificate of Insurance",
                  ].map((doc) => (
                    <button key={doc}
                      style={{
                        padding: "12px 16px",
                        borderRadius: 8,
                        border: "1px solid #cbd5e1",
                        background: "white",
                        cursor: "pointer"
                      }}>
                      Print {doc}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 32 }}>
            <button
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              disabled={step === 1}
              style={{
                padding: "12px 24px",
                borderRadius: 8,
                border: "1px solid #cbd5e1",
                background: step === 1 ? "#f1f5f9" : "white",
                cursor: step === 1 ? "not-allowed" : "pointer"
              }}
            >
              Back
            </button>

            <button
              onClick={() => setStep((s) => Math.min(3, s + 1))}
              style={{
                padding: "12px 24px",
                borderRadius: 8,
                border: "none",
                background: "#22c55e",
                color: "white",
                fontWeight: 600,
                cursor: "pointer"
              }}
            >
              {step === 3 ? "Submit Application" : "Next"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
