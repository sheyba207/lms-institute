"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });

  return (
    <div>
      {/* Header */}
      <div style={{ background:"#1B2A4A", borderBottom:"4px solid #C8A96E" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"44px 24px 36px" }}>
          <span className="label" style={{ color:"#C8A96E" }}>Get in Touch</span>
          <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(28px,4vw,44px)", fontWeight:600, color:"#fff" }}>Contact Dr. Gohar</h1>
          <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:15, color:"rgba(255,255,255,0.6)", marginTop:8, maxWidth:540 }}>
            Questions about courses, research collaboration, or conference invitations. Dr. Gohar reads every message personally and responds within 48 hours.
          </p>
        </div>
      </div>

      <div style={{ maxWidth:1200, margin:"0 auto", padding:"56px 24px" }}>
        <div className="grid gap-16 md:grid-cols-[3fr,2fr]">

          {/* Form */}
          <div>
            {sent ? (
              <div style={{ textAlign:"center", padding:"60px 40px", background:"#fff", border:"1px solid #D8D4CC" }}>
                <div style={{ width:56, height:56, background:"#1B2A4A", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px" }}>
                  <span style={{ color:"#C8A96E", fontSize:22, fontWeight:700 }}>✓</span>
                </div>
                <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:26, fontWeight:600, color:"#0F1C35", marginBottom:10 }}>Message Sent</h2>
                <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:15, color:"#5C5C6E" }}>Dr. Gohar will reply within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={e=>{e.preventDefault();setSent(true);}} style={{ background:"#fff", border:"1px solid #D8D4CC", padding:"36px 40px" }}>
                <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:22, fontWeight:600, color:"#0F1C35", marginBottom:28 }}>Send a Message</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2" style={{ marginBottom:20 }}>
                  {[{id:"name",label:"Your Name",type:"text",ph:"Dr. Jane Smith"},{id:"email",label:"Email Address",type:"email",ph:"you@example.com"}].map(f=>(
                    <div key={f.id}>
                      <label className="field-label">{f.label} *</label>
                      <input type={f.type} required placeholder={f.ph} value={(form as any)[f.id]} onChange={e=>setForm({...form,[f.id]:e.target.value})} className="field" />
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom:20 }}>
                  <label className="field-label">Subject</label>
                  <select value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} className="field">
                    <option value="">Select a topic…</option>
                    <option>Course Enquiry</option>
                    <option>IELTS / TOEFL Preparation</option>
                    <option>Live Session / Webinar</option>
                    <option>Research Collaboration</option>
                    <option>University / Conference Invitation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div style={{ marginBottom:28 }}>
                  <label className="field-label">Message *</label>
                  <textarea required rows={7} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="field" placeholder="Describe your learning goals, questions, or collaboration idea…" style={{ resize:"vertical", lineHeight:1.7 }} />
                </div>
                <button type="submit" className="btn btn-navy">Send Message →</button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <div className="panel" style={{ marginBottom:20 }}>
              <div className="panel-head gold">Contact Information</div>
              <div className="panel-body">
                {[{label:"Email",value:"sheema.gohar@university.edu.pk"},{label:"Office Hours",value:"By Appointment (Zoom)"},{label:"Response Time",value:"Within 48 Hours"},{label:"Location",value:"University Campus / Online"}].map((x,i,a)=>(
                  <div key={x.label} style={{ padding:"13px 0", borderBottom: i<a.length-1?"1px solid #ECEAE4":"none" }}>
                    <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:10, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#8C8C9E", marginBottom:4 }}>{x.label}</div>
                    <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:14, color:"#0F1C35", fontWeight:500 }}>{x.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel" style={{ marginBottom:20 }}>
              <div className="panel-head">Academic Profiles</div>
              <div className="panel-body">
                {[{l:"Google Scholar",h:"https://scholar.google.com/"},{l:"ResearchGate",h:"https://researchgate.net/"},{l:"LinkedIn",h:"https://linkedin.com/"},{l:"YouTube Channel",h:"https://youtube.com/"}].map((x,i,a)=>(
                  <div key={x.l} style={{ borderBottom: i<a.length-1?"1px solid #ECEAE4":"none" }}>
                    <a href={x.h} target="_blank" rel="noopener noreferrer" style={{ display:"flex", justifyContent:"space-between", padding:"12px 0", fontFamily:"'Source Sans 3',sans-serif", fontSize:14, color:"#2D3142", textDecoration:"none" }}>
                      <span>{x.l}</span><span style={{ color:"#1B2A4A", fontWeight:700 }}>↗</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background:"#F2EFE8", border:"1px solid #D8D4CC", padding:"22px" }}>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:16, fontWeight:600, color:"#0F1C35", marginBottom:10, fontStyle:"italic" }}>
                "I believe in accessible, high-quality education for every learner. Reach out — I'd love to hear from you."
              </div>
              <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, color:"#8C8C9E", letterSpacing:"0.06em" }}>— Dr. Sheema Ali Gohar</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
