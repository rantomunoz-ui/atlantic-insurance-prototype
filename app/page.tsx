
"use client";

import React, { useState } from "react";
import Image from "next/image";

const premiumTable: Record<string, number> = {
  "3 Months": 150,
  "6 Months": 300,
  "9 Months": 200,
  "12 Months": 350,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 8,
  border: "1px solid #d0d7e2",
  boxSizing: "border-box",
};

function Field({ label, placeholder = "" }: { label: string; placeholder?: string }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{label}</label>
      <input placeholder={placeholder} style={inputStyle} />
    </div>
  );
}

export default function Home() {
  const [step, setStep] = useState(1);
  const [coverage, setCoverage] = useState("3 Months");

  const premium = premiumTable[coverage];

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <main>
      <section style={{
        background: "linear-gradient(135deg,#0b2f6b,#2e63c9)",
        color: "white",
        padding: "24px 0 60px"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <Image src="/logo.png" alt="Atlantic Insurance" width={280} height={70}
            style={{ background: "white", padding: 10, borderRadius: 12 }} />
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
          <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
            {["1. Applicant Information", "2. Vehicle Information", "3. Documents & Premium"].map((label, i) => (
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
                <Field label="Social Security Number" />
                <Field label="Passport Number" />
                <Field label="Date of Birth" />
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
                <Field label="Make & Model of Vehicle" />
                <Field label="Year Manufactured" />
                <Field label="Type" />
                <Field label="Registry No. or VIN" />
                <Field label="Capacity" />
                <Field label="Cylinders" />
                <Field label="Color" />
                <Field label="License Plate Number" />
                <Field label="Present Value" />
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 style={{ color: "#0b2f6b" }}>Documents & Premium</h2>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 24 }}>
                <div>
                  <label style={{ display: "block", fontWeight: 600, marginBottom: 6 }}>Social Security Card</label>
                  <input type="file" style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: "block", fontWeight: 600, marginBottom: 6 }}>Passport</label>
                  <input type="file" style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: "block", fontWeight: 600, marginBottom: 6 }}>Vehicle Title</label>
                  <input type="file" style={inputStyle} />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24 }}>
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
            </>
          )}

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 32 }}>
            <button
              onClick={back}
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
              onClick={next}
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
