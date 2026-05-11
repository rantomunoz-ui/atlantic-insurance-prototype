
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
  const [started, setStarted] = useState(false);
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", make: "", model: "",
    registration: "", cylinders: "4 Cylinders", coveragePeriod: "3 Months"
  });

  const premium = premiumTable[form.coveragePeriod] || 0;
  const step = started ? 3 : 0;

  const update = (field: string, value: string) =>
    setForm(prev => ({...prev, [field]: value}));

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text("Atlantic Insurance", 20, 20);
    doc.setFontSize(14);
    doc.text("Motor Insurance Quote", 20, 30);
    let y = 50;
    Object.entries({
      "Customer": form.fullName,
      "Email": form.email,
      "Phone": form.phone,
      "Vehicle": `${form.make} ${form.model}`,
      "Registration": form.registration,
      "Coverage": form.coveragePeriod,
      "Premium": `BZD ${premium.toFixed(2)}`
    }).forEach(([k,v]) => {
      doc.text(`${k}: ${v}`, 20, y);
      y += 10;
    });
    doc.save("Atlantic-Insurance-Quote.pdf");
  };

  const card = {
    background: "white",
    borderRadius: 24,
    boxShadow: "0 20px 60px rgba(15,23,42,0.08)",
    padding: 40
  } as React.CSSProperties;

  const input = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 12,
    border: "1px solid #dbe2ea",
    boxSizing: "border-box",
    fontSize: 16
  } as React.CSSProperties;

  if (!started) {
    return (
      <main>
        <section style={{
          background: "linear-gradient(135deg,#143d8d,#1f6ed4)",
          color: "white", padding: "80px 20px"
        }}>
          <div style={{maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40}}>
            <div>
              <div style={{fontSize: 18, opacity: .9, marginBottom: 12}}>ATLANTIC INSURANCE</div>
              <h1 style={{fontSize: 56, lineHeight: 1.1, margin: "0 0 20px 0"}}>
                Buy Your Vehicle Insurance Online in Minutes
              </h1>
              <p style={{fontSize: 20, opacity: .9, maxWidth: 600}}>
                Complete your quote, generate your policy documents, and proceed to payment in a few simple steps.
              </p>
              <button onClick={() => setStarted(true)} style={{
                marginTop: 30, background: "#22c55e", color: "white",
                border: "none", borderRadius: 12, padding: "16px 28px",
                fontSize: 18, cursor: "pointer", fontWeight: 600
              }}>
                Get Started
              </button>
            </div>
            <div style={card}>
              <h3 style={{marginTop:0, color:"#143d8d"}}>Private Use Rates</h3>
              {Object.entries(premiumTable).map(([k,v]) => (
                <div key={k} style={{display:"flex", justifyContent:"space-between", padding:"10px 0", borderBottom:"1px solid #eef2f7"}}>
                  <span>{k}</span><strong>BZD {v.toFixed(2)}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main style={{maxWidth: 1100, margin: "40px auto", padding: 20}}>
      <div style={{marginBottom: 20}}>
        <div style={{fontSize: 14, color: "#64748b"}}>Step {step} of 3</div>
        <div style={{height: 8, background:"#e2e8f0", borderRadius: 99, marginTop: 8}}>
          <div style={{width: "100%", height: "100%", background:"#22c55e", borderRadius: 99}} />
        </div>
      </div>

      <div style={{display: "grid", gridTemplateColumns: "2fr 1fr", gap: 30}}>
        <div style={card}>
          <h2 style={{marginTop:0, color:"#143d8d"}}>Vehicle Insurance Application</h2>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:16}}>
            {[
              ["fullName","Full Name"],
              ["email","Email Address"],
              ["phone","Phone Number"],
              ["registration","Registration Number"],
              ["make","Vehicle Make"],
              ["model","Vehicle Model"],
            ].map(([field,label]) => (
              <input key={field} placeholder={label} style={input}
                value={(form as any)[field]}
                onChange={(e)=>update(field,e.target.value)} />
            ))}
            <select style={input} value={form.cylinders}
              onChange={(e)=>update("cylinders",e.target.value)}>
              <option>4 Cylinders</option>
              <option>6 Cylinders</option>
              <option>8 Cylinders</option>
            </select>
            <select style={input} value={form.coveragePeriod}
              onChange={(e)=>update("coveragePeriod",e.target.value)}>
              <option>3 Months</option>
              <option>6 Months</option>
              <option>9 Months</option>
              <option>12 Months</option>
            </select>
          </div>
        </div>

        <div style={card}>
          <h3 style={{marginTop:0, color:"#143d8d"}}>Premium Summary</h3>
          <div style={{fontSize: 14, color:"#64748b"}}>{form.coveragePeriod}</div>
          <div style={{fontSize: 42, fontWeight: 700, color:"#16a34a", margin:"10px 0 20px"}}>
            BZD {premium.toFixed(2)}
          </div>
          <button onClick={generatePDF} style={{
            width:"100%", background:"#143d8d", color:"white",
            border:"none", borderRadius:12, padding:"14px", cursor:"pointer",
            marginBottom:12, fontSize:16
          }}>
            Download Quote PDF
          </button>
          <a href="https://example.com/payment" target="_blank" rel="noreferrer"
             style={{
               display:"block", textAlign:"center", background:"#22c55e",
               color:"white", padding:"14px", borderRadius:12,
               textDecoration:"none", fontWeight:600
             }}>
            Proceed to Payment
          </a>
          <div style={{
            marginTop:20, padding:16, background:"#f8fafc",
            borderRadius:12, fontSize:14, color:"#475569"
          }}>
            📱 Scan QR code or click the payment button to complete your purchase.
          </div>
        </div>
      </div>
    </main>
  );
}
