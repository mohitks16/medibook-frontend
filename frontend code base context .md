<directory_structure>
public/
  ambulance.svg
  file.svg
  globe.svg
  Line.svg
  logo-icon.svg
  next.svg
  Rectangle.svg
  Vector.svg
  vercel.svg
  window.svg
src/
  app/
    AppointmentCheckout/
      [...slug]/
        page.js
    DoctorDashboard/
      [...slug]/
        page.js
    DoctorDetailPage/
      [...slug]/
        page.js
    DoctorLogin/
      page.js
    PatientDashboard/
      [...slug]/
        page.js
    PatientLogin/
      page.js
    PatientSignup/
      page.js
    RegisterAsDoctor/
      page.js
    favicon.ico
    globals.css
    layout.js
    page.js
  components/
    Footer.jsx
    Header.jsx
  lib/
    axios.js
.gitignore
eslint.config.mjs
jsconfig.json
next.config.mjs
package.json
postcss.config.mjs
README.md
repomix-output.md
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path="src/lib/axios.js">
import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
</file>

<file path="repomix-output.md">
This file is a merged representation of the entire codebase, combined into a single document by Repomix.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  - File path as an attribute
  - Full contents of the file
</file_format>

<usage_guidelines>
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

</file_summary>

<directory_structure>
public/
  ambulance.svg
  file.svg
  globe.svg
  Line.svg
  logo-icon.svg
  next.svg
  Rectangle.svg
  Vector.svg
  vercel.svg
  window.svg
src/
  app/
    AppointmentCheckout/
      [...slug]/
        page.js
    DoctorDashboard/
      [...slug]/
        page.js
    DoctorDetailPage/
      [...slug]/
        page.js
    DoctorLogin/
      page.js
    PatientDashboard/
      [...slug]/
        page.js
    PatientLogin/
      page.js
    PatientSignup/
      page.js
    RegisterAsDoctor/
      page.js
    favicon.ico
    globals.css
    layout.js
    page.js
  components/
    Footer.jsx
    Header.jsx
.gitignore
eslint.config.mjs
jsconfig.json
next.config.mjs
package.json
postcss.config.mjs
README.md
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path="public/ambulance.svg">
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.83324 5.83345H3.49972M8.16676 10.4997V3.50035C8.16676 3.19096 8.04383 2.89425 7.82502 2.67548C7.60621 2.45671 7.30944 2.3338 7 2.3338H2.33296C2.02351 2.3338 1.72674 2.45671 1.50793 2.67548C1.28912 2.89425 1.1662 3.19096 1.1662 3.50035V9.91638C1.1662 10.0711 1.22766 10.2194 1.33707 10.3288C1.44647 10.4382 1.59486 10.4997 1.74958 10.4997H2.91634M2.91634 10.4997C2.91634 11.1439 3.43872 11.6662 4.0831 11.6662C4.72748 11.6662 5.24986 11.1439 5.24986 10.4997M2.91634 10.4997C2.91634 9.85538 3.43872 9.3331 4.0831 9.3331C4.72748 9.3331 5.24986 9.85538 5.24986 10.4997M5.24986 10.4997H8.75014M11.0837 10.4997H12.2504C12.4051 10.4997 12.5535 10.4382 12.6629 10.3288C12.7723 10.2194 12.8338 10.0711 12.8338 9.91638V8.00323C12.8337 7.88087 12.7951 7.76163 12.7235 7.66239C12.6519 7.56316 12.5509 7.48896 12.4348 7.45029L11.3129 7.07641C11.2402 7.05214 11.1731 7.01379 11.1152 6.96355C11.0573 6.91331 11.01 6.85216 10.9757 6.78361L10.0779 4.98945C10.0295 4.89258 9.95507 4.8111 9.86295 4.75413C9.77084 4.69716 9.66468 4.66696 9.55637 4.6669H8.16676M11.0837 10.4997C11.0837 11.1439 10.5613 11.6662 9.9169 11.6662C9.27252 11.6662 8.75014 11.1439 8.75014 10.4997M11.0837 10.4997C11.0837 9.85538 10.5613 9.3331 9.9169 9.3331C9.27252 9.3331 8.75014 9.85538 8.75014 10.4997M4.66648 4.6669V7" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>
</file>

<file path="public/file.svg">
<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>
</file>

<file path="public/globe.svg">
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
</file>

<file path="public/Line.svg">
<svg width="1280" height="1" viewBox="0 0 1280 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line opacity="0.2" y1="0.5" x2="1280" y2="0.5" stroke="#6B7280"/>
</svg>
</file>


<file path="src/app/AppointmentCheckout/[...slug]/page.js">
import React from 'react'

export default function page() {
  return (
    <div>
      
    </div>
  )
}
</file>

<file path="src/app/DoctorDashboard/[...slug]/page.js">
'use client'
import React, { useState } from 'react'

export default function page() {
    
    const [mainTab, setMainTab] = useState("profile");
    const [apptFilter, setApptFilter] = useState("all");
    const [availTab, setAvailTab] = useState("add");

    // Specializations to be controlled via admin panel
    const specializations = [
        "Cardiologist", "Neurologist", "Dermatologist", "Orthopedist",
        "Pediatrician", "Gynecologist", "Ophthalmologist", "ENT Specialist",
        "Psychiatrist", "General Physician", "Dentist", "Radiologist",
    ];
    const timeSlots = [
        "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
        "12:00 PM", "12:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
        "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM",
    ];


    // Degrees to be controlled via admin panel
    const degrees = ["MBBS", "BDS", "BSc Nursing", "MD", "MS", "MSc", "DNB", "DM", "MCh", "MDS", "BAMS", "BHMS"];
    const [apptTab, setApptTab] = useState("list");

    // Profiles will be fetched via backend API
    const [profile, setProfile] = useState({
        name: "Name Of the Doctor ",
        specialization: "Please Enter The Specialisation ",
        fee: "Please Enter The Fee ",
        experience: "Please Enter The Experience ",
        bio: "Please Enter The Bio ",
        hospital: "Please Enter The Hospital ",
        degrees: ["MBBS", "BDS"]
    });

    const toggleDegree = (degree) => {
        if (profile.degrees.includes(degree)) {
            setProfile((p) => ({ ...p, degrees: p.degrees.filter((d) => d !== degree) }));
        } else {
            setProfile((p) => ({ ...p, degrees: [...p.degrees, degree] }));
        }
    };


    return (
        <>
            <div className='px-60'>

                {/*////////////////////// Name And  Stats ///////////////////////////////////  */}

                <div className=' my-5  flex justify-between' >
                    <div >
                        <p className='text-2xl font-bold '>Welcome Back Doctor Mheta </p>
                        <p>3 pending appointments today </p>
                    </div>
                    <div >
                        <div className="flex gap-2">
                            <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-center">
                                <p className="text-xl font-bold text-blue-600">5</p>
                                <p className="text-xs text-slate-500">Total</p>
                            </div>
                            <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-center">
                                <p className="text-xl font-bold text-amber-500">3</p>
                                <p className="text-xs text-slate-500">Pending</p>
                            </div>
                            <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-center">
                                <p className="text-xl font-bold text-teal-600">2</p>
                                <p className="text-xs text-slate-500">Done</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}

                {/* Tabbings  */}

                <div className="flex gap-2 mb-6 bg-white border border-slate-200 rounded-xl p-1 w-fit">
                    <button
                        onClick={() => setMainTab("profile")}
                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${mainTab === "profile" ? "bg-blue-600 text-white" : "text-slate-600 hover:text-slate-800 hover:bg-slate-100"}`}
                    >
                        Profile Setup
                    </button>
                    <button
                        onClick={() => setMainTab("appointments")}
                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${mainTab === "appointments" ? "bg-blue-600 text-white" : "text-slate-600 hover:text-slate-800 hover:bg-slate-100"}`}
                    >
                        Appointment
                    </button>
                </div>

                {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}

                {/*////////////////////// Profile Setup ///////////////////////////////////  */}
                {mainTab === "profile" && (
                    // <p>Profile Setup</p>

                    <div className='flex gap-6 ' >
                        <div className='w-2/3'>
                            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5">
                                <h2 className="font-semibold text-slate-900">Profile Information</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                                        <input

                                            onChange={(e) => setProfile((p) => ({ ...p, name: e.target.value }))}
                                            className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Specialization</label>
                                        <select
                                            value={profile.specialization}
                                            onChange={(e) => setProfile((p) => ({ ...p, specialization: e.target.value }))}
                                            className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                        >
                                            {specializations.map((s) => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Consultation Fee (₹)</label>
                                        <input
                                            type="number"
                                            value={profile.fee}
                                            onChange={(e) => setProfile((p) => ({ ...p, fee: e.target.value }))}
                                            className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Years of Experience</label>
                                        <input
                                            type="number"
                                            value={profile.experience}
                                            onChange={(e) => setProfile((p) => ({ ...p, experience: e.target.value }))}
                                            className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Currently Working At</label>
                                    <input
                                        value={profile.hospital}
                                        onChange={(e) => setProfile((p) => ({ ...p, hospital: e.target.value }))}
                                        className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Professional Bio</label>
                                    <textarea
                                        rows={3}
                                        value={profile.bio}
                                        onChange={(e) => setProfile((p) => ({ ...p, bio: e.target.value }))}
                                        className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                    />
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl my-5 p-6">
                                <h2 className="font-semibold text-slate-900 mb-1">Degree Badges</h2>
                                <p className="text-xs text-slate-500 mb-4">Select all degrees that apply to your qualifications</p>
                                <div className="flex flex-wrap gap-2">
                                    {degrees.map((d) => (
                                        <button
                                            key={d}
                                            type="button"
                                            onClick={() => toggleDegree(d)}
                                            className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${profile.degrees.includes(d)
                                                ? "bg-blue-600 text-white border-blue-600"
                                                : "bg-white text-slate-600 border-slate-300 hover:border-blue-300"
                                                }`}
                                        >
                                            {d}
                                        </button>

                                    ))}
                                </div>
                            </div>

                            <button
                                // onClick={handleProfileSave}
                                className="w-full my-3 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Save Profile
                            </button>
                        </div>
                        {/* Right Profile Card View  */}
                        <div className='w-1/3 '>
                            <div className="space-y-5">
                                {/* Avatar and name preview */}
                                <div className="bg-white border border-slate-200 rounded-2xl p-5">
                                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-2xl mx-auto mb-4">
                                        AM
                                    </div>
                                    <div className="text-center">
                                        <p className="font-semibold text-slate-900">{profile.name}</p>
                                        <p className="text-sm text-slate-500">{profile.specialization}</p>
                                        <p className="text-xs text-slate-400 mt-1">{profile.hospital}</p>
                                    </div>
                                    <div className="mt-4 flex gap-2 justify-center flex-wrap">
                                        {profile.degrees.map((d) => (
                                            <span key={d} className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded-md font-medium">
                                                {d}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Badges preview panel */}
                                <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3">
                                    <h3 className="text-sm font-semibold text-slate-700">Badges Preview</h3>
                                    <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-xl border border-amber-100">
                                        <span className="text-2xl">⭐</span>
                                        <div>
                                            <p className="text-xs font-semibold text-amber-800">Experience Badge</p>
                                            <p className="text-xs text-amber-600">{profile.experience}+ Years</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-xl border border-teal-100">
                                        <span className="text-2xl">✅</span>
                                        <div>
                                            <p className="text-xs font-semibold text-teal-800">Consultation Fee</p>
                                            <p className="text-xs text-teal-600">₹{profile.fee} per visit</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
                                        <span className="text-2xl">🏥</span>
                                        <div>
                                            <p className="text-xs font-semibold text-blue-800">Verified Specialist</p>
                                            <p className="text-xs text-blue-600">MediBook Verified</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                )}

                {/*////////////////////// Appointment ///////////////////////////////////  */}
                {mainTab === "appointments" && (
                    <>
                        {/* Appontment tabbings  */}

                        <div className="flex gap-2 mb-6 border-b border-slate-200">
                            {["list", "availability"].map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setApptTab(t)}
                                    className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${apptTab === t ? "border-blue-600 text-blue-600" : "border-transparent text-slate-500 hover:text-slate-800"
                                        }`}
                                >
                                    {t === "list" ? "Appointments" : "Availability Control"}
                                </button>
                            ))}
                        </div>


                        {apptTab === "list" && (
                            <>
                                {/* Filtering The Different Lists  */}
                                <div className="flex flex-wrap gap-2">
                                    {["all", "pending", "done"].map((f) => (
                                        <button
                                            key={f}
                                            onClick={() => setApptFilter(f)}
                                            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors capitalize ${apptFilter === f ? "bg-blue-600 text-white" : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300"
                                                }`}
                                        >
                                            {f}
                                        </button>
                                    ))}
                                </div>

                                {/* Appointment List  */}

                                <div className="space-y-3 my-5">
                                    <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-start gap-4">
                                        {/* Patient initials avatar */}
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-semibold text-sm shrink-0">
                                            {/* {a.patient.split(" ").map((n) => n[0]).join("")} */}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2">
                                                <div>
                                                    <p className="font-medium text-slate-900 text-sm">Name of the Patient</p>
                                                    <p className="text-xs text-slate-500">age yrs · Reason for Appointment</p>
                                                </div>
                                                {/* Status badge */}
                                                <span className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${apptFilter.status === "done"
                                                    ? "bg-teal-50 text-teal-700 border border-teal-100"
                                                    : "bg-amber-50 text-amber-700 border border-amber-100"
                                                    }`}>
                                                    {apptFilter.status === "done" ? "Done" : "Pending"}
                                                </span>
                                            </div>
                                            <div className="mt-2 flex items-center justify-between">
                                                <p className="text-xs text-blue-600 font-medium">🕐 Slot Assigned</p>
                                                {/* Toggle status button */}
                                                <button
                                                    // onClick={() => toggleApptStatus(a.id)}
                                                    className="text-xs text-slate-500 hover:text-blue-600 border border-slate-200 px-2.5 py-1 rounded-lg hover:border-blue-200 transition-colors"
                                                >
                                                    Mark as {apptFilter.status === "done" ? "Pending" : "Done"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {apptTab === "availability" && (

                            <>
                                {/* Appointment Availability  */}

                                <div className="grid lg:grid-cols-2 gap-6">

                                    <div>


                                        <div className="flex gap-2 mb-4 bg-white border border-slate-200 rounded-xl p-1 w-fit">
                                            <button
                                                onClick={() => setAvailTab("add")}
                                                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${availTab === "add" ? "bg-blue-600 text-white" : "text-slate-600 hover:text-slate-800"}`}
                                            >
                                                Add Slot
                                            </button>
                                            <button
                                                onClick={() => setAvailTab("view")}
                                                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${availTab === "view" ? "bg-blue-600 text-white" : "text-slate-600 hover:text-slate-800"}`}
                                            >
                                                View Slots
                                            </button>
                                        </div>

                                        {availTab === "add" && (
                                            <form className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
                                                <h3 className="font-semibold text-slate-900">Add New Slot</h3>
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Select Date</label>
                                                    <input
                                                        type="date"

                                                        className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Select Time Slot</label>
                                                    <select
                                                        className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                                    >
                                                        <option value="">Choose a time</option>
                                                        {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                                                    </select>
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="w-full bg-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
                                                >
                                                    Add Slot
                                                </button>
                                            </form>
                                        )}

                                        {availTab === "view" && (
                                            <div className="bg-white border border-slate-200 rounded-2xl p-5">
                                                <h3 className="font-semibold text-slate-900 mb-4">All Active Slots</h3>
                                                <div className="space-y-2">

                                                    <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                                                        <div>
                                                            <p className="text-sm font-medium text-slate-800">Date of the slot · Slot-Timing</p>
                                                            <p className="text-xs text-slate-500 mt-0.5">Patient: Name of the patient</p>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            {/* Booked badge */}
                                                            {/* "bg-teal-50 text-teal-700 border border-teal-100" */}
                                                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-100 
                                                                }`}>
                                                                    Booked 
                                                            </span>
                                                                {/*No  Delete button , delete button only for unbooked slots */}

                                                        </div>
                                                    </div>

                                                    <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                                                        <div>
                                                            <p className="text-sm font-medium text-slate-800">Date of the slot · Slot-Timing</p>
                                                            <p className="text-xs text-slate-500 mt-0.5">Patient: Name of the patient</p>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            {/* Booked / Open badge */}
                                                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-100`}>
                                                                Unbooked 
                                                            </span>

                                                            {/* Delete button (only for unbooked slots) */}

                                                            <button
                                                                // onClick={() => handleDeleteSlot(s.id)}
                                                                className="text-slate-400 hover:text-red-500 transition-colors p-1"
                                                                title="Delete slot"
                                                            >
                                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                </svg>
                                                            </button>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        )}

                                    </div>

                                </div>
                            </>
                        )}

                    </>


                )}

            </div>


        </>
    )
}
</file>

<file path="src/app/DoctorDetailPage/[...slug]/page.js">
'use client'
import React, { useState } from 'react'

export default function page() {
  
    const [selectedSlot, setSelectedSlot] = useState(null);

    const slots = [ "10:00 AM" , "12:00 PM" , "2:00 PM" , "4:00 PM" , "6:00 PM" , "8:00 PM" , "10:00 PM" ]; 

  return (
    
    <>

    <div className="px-60">
         <div>
            <button
            //   onClick={() => { setBookingStep("browse"); setSelectedDoc(null); }}
              className="text-sm text-slate-600 hover:text-blue-600 font-medium mb-6 flex items-center gap-1"
            >
              ← Back to search
            </button>
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Doctor details card */}
              <div className="lg:col-span-2 space-y-5">
                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl shrink-0">
                      {/* {selectedDoc.name.split(" ").slice(1).map((n) => n[0]).join("")} */}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">
                        {/* {selectedDoc.name} */}
                        name goes here
                        </h2>
                      <p className="text-blue-600 font-medium text-sm">
                        {/* {selectedDoc.spec} */}
                        specialization goes here
                        </p>
                      <p className="text-slate-500 text-xs mt-0.5">
                        {/* {selectedDoc.hospital} */}
                        hospital goes here
                        </p>
                      <div className="mt-1.5 flex items-center gap-2 flex-wrap">
                        {/* {selectedDoc.degrees.map((d) => ( */}
                          <span className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded-md font-medium">Degrees</span>
                        {/* ))} */}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {/* {selectedDoc.bio} */}
                    Bio goes here
                    </p>
                  {/* Stats row */}
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="text-center p-3 bg-slate-50 rounded-xl">
                      <p className="text-lg font-bold text-slate-900">
                        {/* {selectedDoc.exp}+ */}
                        doctor experience
                        </p>
                      <p className="text-xs text-slate-500">Years Exp.</p>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-xl">
                      <p className="text-lg font-bold text-amber-500">
                        {/* {selectedDoc.rating}★ */}
                        </p>
                      <p className="text-xs text-slate-500">
                        {/* {selectedDoc.reviews} reviews */}
                        number of reviews
                        </p>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-xl">
                      <p className="text-lg font-bold text-teal-600">
                        {/* ₹{selectedDoc.fee} */}
                        fees in inr
                        </p>
                      <p className="text-xs text-slate-500">Consultation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking panel: slot selection */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <h3 className="font-semibold text-slate-900 mb-4">Select a Slot</h3>
                <div className="space-y-2 mb-5">
                  {slots.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSlot(s)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm border transition-all 
                        ${selectedSlot === s
                          ? "border-blue-600 bg-blue-50 text-blue-700 font-medium"
                          : "border-slate-200 text-slate-700 hover:border-blue-200"
                        }`}
                    >
                      {s}
                    </button>
                   ))} 
                </div>
                <button
                //   onClick={() => {
                    // if (selectedSlot) setBookingStep("book");
                    // else onNotify("Please select a time slot first.");
                //   }}
                  className="w-full bg-blue-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
    </div>
    </>
  )
}
</file>

<file path="src/app/DoctorLogin/page.js">
import React from 'react'

export default function page() {
    return (
        <div className='flex justify-center bg-[#E5E7EB] items-center py-10'>
            <div className='w-[440px] bg-white py-10 px-15 rounded-2xl '>
                <div className='text-[28px] mb-2 font-bold'>
                    Doctor login
                </div>
                <div className='text-[#6B7280] text-[14px] text-wrap '>
                    Sign in to access your appointment schedule.                </div>

                <form className='my-3' action="">
                    <label className='font-semibold' htmlFor="">Username</label>
                    <input className='w-full px-3 my-2 py-2 border-2  border-[#cccccc57] outline-none rounded-xl ' placeholder='jane_smith_cardiology' type="text" />

                    <label className='font-semibold' htmlFor="">DoctorId</label>
                    <input className='  outline-none w-full px-3 my-2 py-2 border-2 border-[#cccccc57] rounded-xl ' placeholder='MD-2049-SA' type="Email" />

                    <label className='font-semibold' htmlFor="">Password</label>
                    <input className='  outline-none w-full px-3 my-2 py-2 border-2 border-[#cccccc57] rounded-xl ' placeholder='password' type="password" />



                    <button className='w-full mt-5 px-5 py-3 text-white font-semibold hover:bg-blue-300 rounded-xl text-center bg-[#2563EB]'>
                        Login
                    </button>

                    <div className="text-center mt-5"> {/* Add this div to center the text */}
                        <p>New Doctor ? <span className='text-[#2563EB]'> Register here </span></p>
                    </div>

                </form>
            </div>
        </div>
    )
}
</file>

<file path="src/app/PatientDashboard/[...slug]/page.js">
"use client";
import React, { useState } from "react";

export default function page() {
    const [tab, setTab] = useState("search");
    const [specFilter, setSpecFilter] = useState("All");
    const [histFilter, setHistFilter] = useState("all");
    const specializations = [
        "All",
        "Cardiologist",
        "Neurologist",
        "Dermatologist",
        "Orthopedist",
        "Pediatrician",
        "Gynecologist",
        "Ophthalmologist",
        "ENT Specialist",
        "Psychiatrist",
        "General Physician",
        "Dentist",
    ];

    return (
        <>
            <div className="px-60">
                <div className="my-3">
                    <p className="text-2xl font-bold">Hello , Patient Name </p>
                    <p>Find and book appointments with top specialists</p>
                </div>

                {/* Tabbings  */}

                <div className="flex gap-1 my-6 bg-white border border-slate-200 rounded-xl p-1 w-fit overflow-x-auto">
                    {[
                        { key: "search", label: "Find Doctors" },
                        { key: "profile", label: "My Profile" },
                        { key: "history", label: "Bookings" },
                    ].map((t) => (
                        <button
                            key={t.key}
                            onClick={() => {
                                setTab(t.key);
                            }}
                            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${tab === t.key
                                    ? "bg-blue-600 text-white"
                                    : "text-slate-600 hover:text-slate-800 hover:bg-slate-100"
                                }`}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>

                {tab === "search" && (
                    <div>
                        {/* Search input */}
                        <div className="flex flex-col sm:flex-row gap-3 mb-6">
                            <div className="relative flex-1">
                                <svg
                                    className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                                <input
                                    type="text"
                                    //   value={searchQuery}
                                    //   onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search by name or specialization..."
                                    className="w-full border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                />
                            </div>
                        </div>

                        {/* Specialization filter pills */}
                        <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
                            {specializations.map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setSpecFilter(s)}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 border transition-colors ${specFilter === s
                                            ? "bg-blue-600 text-white border-blue-600"
                                            : "bg-white text-slate-600 border-slate-200 hover:border-blue-200"
                                        }`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>

                        {/* Doctor cards grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                            <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-200 hover:shadow-sm transition-all cursor-pointer">
                                <div className="flex items-start gap-3 mb-4">
                                    {/* Doctor initials avatar */}
                                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">
                                        {/* {doc.name.split(" ").slice(1).map((n) => n[0]).join("")} */}
                                        AM
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-semibold text-slate-900 text-sm truncate">
                                            Name of the Doctor{" "}
                                        </p>
                                        <p className="text-xs text-blue-600 font-medium">
                                            Specialisation{" "}
                                        </p>
                                        {/* RAting stars */}
                                        <span className="text-amber-500 text-xs font-semibold">
                                            "★"
                                        </span>
                                    </div>
                                </div>
                                {/* Degree badges */}
                                <div className="flex gap-1.5 flex-wrap mb-4">
                                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                                        Cardiologist
                                    </span>
                                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                                        Neurologist
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-3">
                                    <span>Experience in years </span>
                                    <span className="font-semibold text-slate-800">Fee</span>
                                </div>
                                <div className="mt-1 text-xs text-teal-600 font-medium">
                                    number of slots available
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-200 hover:shadow-sm transition-all cursor-pointer">
                                <div className="flex items-start gap-3 mb-4">
                                    {/* Doctor initials avatar */}
                                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">
                                        {/* {doc.name.split(" ").slice(1).map((n) => n[0]).join("")} */}
                                        AM
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-semibold text-slate-900 text-sm truncate">
                                            Name of the Doctor{" "}
                                        </p>
                                        <p className="text-xs text-blue-600 font-medium">
                                            Specialisation{" "}
                                        </p>
                                        {/* RAting stars */}
                                        <span className="text-amber-500 text-xs font-semibold">
                                            "★"
                                        </span>
                                    </div>
                                </div>
                                {/* Degree badges */}
                                <div className="flex gap-1.5 flex-wrap mb-4">
                                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                                        Cardiologist
                                    </span>
                                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                                        Neurologist
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-3">
                                    <span>Experience in years </span>
                                    <span className="font-semibold text-slate-800">Fee</span>
                                </div>
                                <div className="mt-1 text-xs text-teal-600 font-medium">
                                    number of slots available
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-200 hover:shadow-sm transition-all cursor-pointer">
                                <div className="flex items-start gap-3 mb-4">
                                    {/* Doctor initials avatar */}
                                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">
                                        {/* {doc.name.split(" ").slice(1).map((n) => n[0]).join("")} */}
                                        AM
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-semibold text-slate-900 text-sm truncate">
                                            Name of the Doctor{" "}
                                        </p>
                                        <p className="text-xs text-blue-600 font-medium">
                                            Specialisation{" "}
                                        </p>
                                        {/* RAting stars */}
                                        <span className="text-amber-500 text-xs font-semibold">
                                            "★"
                                        </span>
                                    </div>
                                </div>
                                {/* Degree badges */}
                                <div className="flex gap-1.5 flex-wrap mb-4">
                                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                                        Cardiologist
                                    </span>
                                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                                        Neurologist
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-3">
                                    <span>Experience in years </span>
                                    <span className="font-semibold text-slate-800">Fee</span>
                                </div>
                                <div className="mt-1 text-xs text-teal-600 font-medium">
                                    number of slots available
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {tab === "profile" && (
                    <div className="max-w-2xl">
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5">
                            <h2 className="font-semibold text-slate-900">Health Profile</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                        Full Name
                                    </label>
                                    <input
                                        // value={profile.name}
                                        // onChange={(e) => setP("name", e.target.value)}
                                        className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                        Age
                                    </label>
                                    <input
                                        type="number"
                                        // value={profile.age}
                                        // onChange={(e) => setP("age", e.target.value)}
                                        className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                        Gender
                                    </label>
                                    <select
                                        // value={profile.gender}
                                        // onChange={(e) => setP("gender", e.target.value)}
                                        className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                    >
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                        Phone Number
                                    </label>
                                    <input
                                        // value={profile.phone}
                                        // onChange={(e) => setP("phone", e.target.value)}
                                        className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                    Lifestyle
                                </label>
                                <select
                                    //   value={profile.lifestyle}
                                    //   onChange={(e) => setP("lifestyle", e.target.value)}
                                    className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                >
                                    <option>Sedentary</option>
                                    <option>Lightly Active</option>
                                    <option>Moderately Active</option>
                                    <option>Very Active</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                    Any Recent Medical Condition
                                </label>
                                <input
                                    //   value={profile.medicalCondition}
                                    //   onChange={(e) => setP("medicalCondition", e.target.value)}
                                    placeholder="e.g. Hypertension, Diabetes..."
                                    className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                    Last Doctor Visit
                                </label>
                                <input
                                    type="date"
                                    //   value={profile.lastVisit}
                                    //   onChange={(e) => setP("lastVisit", e.target.value)}
                                    className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <button
                                // onClick={handleSaveProfile}
                                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Save Profile
                            </button>
                        </div>
                    </div>
                )}

                {tab === "history" && (
                    <div>
                        {/* Filter: all / upcoming / past */}
                        <div className="flex gap-2 mb-5">
                            {["all", "upcoming", "past"].map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setHistFilter(f)}
                                    className={`px-4 py-1.5 rounded-lg text-sm font-medium capitalize transition-colors ${histFilter === f
                                            ? "bg-blue-600 text-white"
                                            : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300"
                                        }`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>

                        {/* Booking cards */}
                        <div className="space-y-3">
                            <div
                                className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                            >
                                <div className="flex items-start gap-4">
                                    {/* Doctor initials avatar */}
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">
                                        {/* {b.doctor.split(" ") .slice(/1) .map((n) => n[0]) .join("")} */}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 text-sm">
                                            {/* {b.doctor} */}
                                        </p>
                                        <p className="text-xs text-blue-600 font-medium">
                                            {/* {b.spec} */}
                                        </p>
                                        <p className="text-xs text-slate-500 mt-1">
                                            {/* 🕐 {b.slot} */}
                                        </p>
                                        <p className="text-xs text-slate-400 mt-0.5">
                                            {/* Ref: {b.ref} */}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="text-right">
                                        <p className="text-sm font-semibold text-slate-800">
                                            {/* ₹{b.fee} */}
                                        </p>
                                        <p className="text-xs text-slate-400">Paid</p>
                                    </div>
                        
                                    <span
                                        className={`text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100`}
                                    >
                                        Upcoming
                                        {/* {b.status === "" ? "Upcoming" : "Completed"} */}
                                    </span>
                                </div>
                            </div>

                            <div
                                className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                            >
                                <div className="flex items-start gap-4">
                                    {/* Doctor initials avatar */}
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">
                                        {/* {b.doctor.split(" ") .slice(/1) .map((n) => n[0]) .join("")} */}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 text-sm">
                                            {/* {b.doctor} */}
                                        </p>
                                        <p className="text-xs text-blue-600 font-medium">
                                            {/* {b.spec} */}
                                        </p>
                                        <p className="text-xs text-slate-500 mt-1">
                                            {/* 🕐 {b.slot} */}
                                        </p>
                                        <p className="text-xs text-slate-400 mt-0.5">
                                            {/* Ref: {b.ref} */}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="text-right">
                                        <p className="text-sm font-semibold text-slate-800">
                                            {/* ₹{b.fee} */}
                                        </p>
                                        <p className="text-xs text-slate-400">Paid</p>
                                    </div>
                        
                                    <span
                                        className={`text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100`}
                                    >
                                        Upcoming
                                        {/* {b.status === "" ? "Upcoming" : "Completed"} */}
                                    </span>
                                </div>
                            </div>

                            <div
                                className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                            >
                                <div className="flex items-start gap-4">
                                    {/* Doctor initials avatar */}
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">
                                        {/* {b.doctor.split(" ") .slice(/1) .map((n) => n[0]) .join("")} */}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 text-sm">
                                            {/* {b.doctor} */}
                                        </p>
                                        <p className="text-xs text-blue-600 font-medium">
                                            {/* {b.spec} */}
                                        </p>
                                        <p className="text-xs text-slate-500 mt-1">
                                            {/* 🕐 {b.slot} */}
                                        </p>
                                        <p className="text-xs text-slate-400 mt-0.5">
                                            {/* Ref: {b.ref} */}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="text-right">
                                        <p className="text-sm font-semibold text-slate-800">
                                            {/* ₹{b.fee} */}
                                            fees in inr 
                                        </p>
                                        <p className="text-xs text-slate-400">Paid</p>
                                    </div>
                              
                                    <span
                                        className={`text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200`}
                                    >
                                        Completed
                                        {/* {b.status === "" ? "Upcoming" : "Completed"} */}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
</file>

<file path="src/app/PatientLogin/page.js">
import React from 'react'

export default function page() {
  return (
    
     <div className='flex justify-center bg-[#E5E7EB] items-center py-10 my-3'>
            <div className='w-[440px] bg-white py-10 px-15 rounded-2xl '>

                <div className='text-[28px] mb-2 font-bold'>
                    Patient Login 
                </div>

                <form className='my-3' action="">

                    <label className='font-semibold' htmlFor="">Phone Number</label>
                    <input className='w-full px-3 my-2 py-2 border-2  border-[#cccccc57] outline-none rounded-xl ' placeholder='+91 8824987634' type="number" />

                    <button className='w-full mt-5 px-5 py-3 text-white font-semibold hover:bg-blue-300 rounded-xl text-center bg-[#2563EB]'>
                        Request OTP
                    </button>

                    <div className="text-center mt-5">
                        <p>Don't have an account ? <span className='text-[#2563EB]'> Register here </span></p>
                    </div>

                </form>
            </div>
        </div>
  )
}
</file>

<file path="src/app/PatientSignup/page.js">
import React from 'react'

export default function page() {
    return (
        <div className='flex justify-center bg-[#E5E7EB] items-center py-10 my-3'>
            <div className='w-[440px] bg-white py-10 px-15 rounded-2xl '>

                <div className='text-[28px] mb-2 font-bold'>
                    Patient Signup 
                </div>

                <form className='my-3' action="">
                    <label className='font-semibold' htmlFor="">Full Name</label>
                    <input className='w-full px-3 my-2 py-2 border-2  border-[#cccccc57] outline-none rounded-xl ' placeholder='' type="text" />

                    <label className='font-semibold' htmlFor="">Phone Number</label>
                    <input className='w-full px-3 my-2 py-2 border-2  border-[#cccccc57] outline-none rounded-xl ' type="number" />

                    <button className='w-full mt-5 px-5 py-3 text-white font-semibold hover:bg-blue-300 rounded-xl text-center bg-[#2563EB]'>
                        Signup
                    </button>

                    <div className="text-center mt-5">
                        <p>Already have an account ? <span className='text-[#2563EB]'> Login here </span></p>
                    </div>

                </form>
            </div>
        </div>
    )
}
</file>

<file path="src/app/RegisterAsDoctor/page.js">
import React from 'react'

export default function page() {
    return (
        <div className='flex justify-center bg-[#E5E7EB] items-center py-10'>
            <div className='w-[640px] bg-white py-10 px-15 rounded-2xl '>
                <div className='text-[28px] mb-2 font-bold'>
                    Register As Doctor
                </div>
                <div className='text-[#6B7280] text-[14px] text-wrap '>
                    Join our platform and connect with thousands of patients. Submit credentials for clinical verification.
                </div>

                <form className='my-3' action="">
                    <label className='font-semibold' htmlFor="">Full name</label>
                    <input className='w-full px-3 my-2 py-2 border-2  border-[#cccccc57] outline-none rounded-xl ' type="text" />

                    <label className='font-semibold' htmlFor="">Email</label>
                    <input className='  outline-none w-full px-3 my-2 py-2 border-2 border-[#cccccc57] rounded-xl ' type="Email" />

                    <label className='font-semibold' htmlFor="">Phone Number</label>
                    <input className='  outline-none w-full px-3 my-2 py-2 border-2 border-[#cccccc57] rounded-xl ' type="number" />

                    <div className='flex'>
                        <div>
                            <label className='font-semibold ' htmlFor="">Years of Expereience</label>
                            <input className='  outline-none w-50 px-3 my-2 py-2 border-2 border-[#cccccc57] rounded-xl ' type="number" />
                        </div>
                        <div>
                            <label className='font-semibold' htmlFor="">Specialisation</label>
                            <input className='  outline-none w-50 px-3 my-2 py-2 border-2 border-[#cccccc57] rounded-xl ' type="number" />
                        </div>

                    </div>

                    <label className='font-semibold' htmlFor="">Currently Working at hospital/clinic </label>
                    <input className='  outline-none w-full px-3 my-2 py-2 border-2 border-[#cccccc57] rounded-xl ' type="text" />

                    <label className='font-semibold' htmlFor="">Education / degree </label>
                    <input className='  outline-none w-full px-3 my-2 py-2 border-2 border-[#cccccc57] rounded-xl ' type="text" />

                    <p className='font-semibold my-3 '> ID & Credential Proof Upload </p>

                    <label className="flex flex-col items-center gap-2 p-6 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 cursor-pointer">
                        {/* Icon */}
                        <div className="w-6 h-6">
                            <img src="/vector.svg" alt="Upload Icon" className="w-full h-full" />
                        </div>

                        {/* Title */}
                        <p className="text-sm font-semibold text-blue-600">
                            Upload Certificate PDF / JPEG
                        </p>

                        {/* Subtitle */}
                        <p className="text-xs text-gray-500 text-center">
                            Upload government medical registration proof (Max 10MB)
                        </p>

                        {/* Hidden Input */}
                        <input type="file" accept=".pdf,.jpg,.jpeg" className="hidden" />

                    </label>

                <button className='w-full mt-5 px-5 py-3 text-white font-semibold hover:bg-blue-300 rounded-xl text-center bg-[#2563EB]'>
                        Submit Registration 
                </button>

                </form>
            </div>
        </div>
    )
}
</file>

<file path="src/app/globals.css">
@import "tailwindcss";
</file>

<file path="src/app/layout.js">
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Medibook",
  description: "Medical booking app",
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
         <Header/>
        {children}
        </body>
        <Footer/>
    </html>
  );
}
</file>

<file path="src/app/page.js">
import Image from "next/image";

export default function Home() {
  return (

    <>
      {/*-------------------------- Hero Section --------------------------------------- */}
      <div className="px-[150px] items-center gap-[100px] bg-[#F3F4F6] flex py-[96px] ">
        <div className="w-3/5" >
          <div className="bg-[#b8c6e5] text-[10px] mb-[24px] inline-block rounded-[7px] font-semibold py-[2px] px-[5px] text-[#2563EB]">
            NOW INTRODUCING INSTANT CONFIRMATION
          </div>
          <div className="font-bold text-[56px] text-wrap mb-[24px]">
            Book Trusted Doctors, Anytime, Anywhere
          </div>
          <div className="text-[#6B7280] text-[18px] text-wrap text-left mb-[24px] " >Skip the waiting room. Connect with certified practitioners, schedule face-to-face appointments, and manage your health seamlessly on the absolute standard healthcare portal.</div>
          <div className="flex justify-start gap-[13px] " >
            <div className=" rounded-[10px] bg-[#2563EB] hover:bg-[#aec0e8] px-5 py-3">Find a Doctor Now </div>
            <div className=" rounded-[10px] hover:bg-[#b9c8e9] shadow-md px-4 py-2 ">How It Works </div>
          </div>
        </div>
        <div className="w-2/5" >

          <Image
            src="/Rectangle.svg"
            alt="Doctor Icon"
            width={520}
            height={400}
            className="rounded-2xl"
          />

        </div>
      </div>
    </>

  );
}
</file>

<file path="src/components/Footer.jsx">
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 px-20 pt-[60px] pb-10 flex flex-col gap-10">
      {/* Top Section */}
      <div className="flex justify-between w-full">
        {/* Logo + Description */}
        <div className="w-80 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 flex items-center justify-center bg-blue-600 rounded-md">
              <Image src="/ambulance.svg" alt="Ambulance Icon" width={14} height={14} />
            </div>
            <div className="text-lg font-bold text-white">MedConnect</div>
          </div>
          <p className="text-sm text-gray-500">
            Connecting patients with trusted healthcare professionals instantly.
            Simple scheduling, verified credentials.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-16">
          <div className="flex flex-col gap-3">
            <div className="text-sm font-semibold text-white">For Patients</div>
            <div className="text-[13px] text-gray-500">Search for Doctors</div>
            <div className="text-[13px] text-gray-500">Book Appointments</div>
            <div className="text-[13px] text-gray-500">Patient Portal</div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-sm font-semibold text-white">For Doctors</div>
            <div className="text-[13px] text-gray-500">Join MedConnect</div>
            <div className="text-[13px] text-gray-500">Professional Portal</div>
            <div className="text-[13px] text-gray-500">Guidelines</div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-sm font-semibold text-white">Legal</div>
            <div className="text-[13px] text-gray-500">Privacy Policy</div>
            <div className="text-[13px] text-gray-500">Terms of Use</div>
            <div className="text-[13px] text-gray-500">HIPAA Compliance</div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <Image src="/line.svg" alt="Divider Line" width={1280} height={1} />

      {/* Bottom Section */}
      <div className="flex justify-between w-full">
        <p className="text-[13px] text-gray-500">© 2026 MedConnect. All rights reserved.</p>
        <p className="text-[13px] text-gray-500">Providing standard clinical assurance.</p>
      </div>
    </footer>
  );
}
</file>

<file path="src/components/Header.jsx">
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <nav className='max-w-full px-[80px] flex py-4 '>
            <div className='flex gap-[10px] flex-1'>
                <div>
                    <Image
                        src="/logo-icon.svg"
                        alt="Doctor Icon"
                        width={36}
                        height={36}
                    />
                </div>
                <div className='text-[20px] font-bold'>Medibook</div>
            </div>
            <div className='flex flex-1 gap-[16px] items-center'>
                <Link href='/PatientDashboard/123'>
                    <div className='font-semibold text-[14px]' >Search Doctor </div>
                </Link>

                <Link href='/RegisterAsDoctor'>
                    <div className='font-semibold text-[14px]' >Register as Doctor </div>
                </Link>

                <Link href='/DoctorLogin'>
                    <div className='font-semibold text-[14px]' >Doctor Login </div>
                </Link>

                <Link href='/PatientLogin'>
                <div className=' hover:bg-blue-300 rounded-[10px] font-semibold text-[14px] text-white bg-[#2563EB] px-4 py-3' >Patient Login / Signup</div>
                </Link>

            </div>
        </nav>
    )
}
</file>

<file path=".gitignore">
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
</file>

<file path="eslint.config.mjs">
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
</file>

<file path="jsconfig.json">
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
</file>

<file path="next.config.mjs">
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
};

export default nextConfig;
</file>

<file path="package.json">
{
  "name": "medibook",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "next": "16.3.3",
    "react": "19.2.8",
    "react-dom": "19.2.8"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "eslint": "^9",
    "eslint-config-next": "16.3.3",
    "tailwindcss": "^4"
  }
}
</file>

<file path="postcss.config.mjs">
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
</file>

<file path="README.md">
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
</file>

</files>
</file>

<file path="src/app/AppointmentCheckout/[...slug]/page.js">
import React from 'react'

export default function page() {
  return (
    <div>
      
    </div>
  )
}
</file>

<file path="src/app/DoctorDashboard/[...slug]/page.js">
'use client'
import React, { useState } from 'react'

export default function page() {
    
    const [mainTab, setMainTab] = useState("profile");
    const [apptFilter, setApptFilter] = useState("all");
    const [availTab, setAvailTab] = useState("add");

    // Specializations to be controlled via admin panel
    const specializations = [
        "Cardiologist", "Neurologist", "Dermatologist", "Orthopedist",
        "Pediatrician", "Gynecologist", "Ophthalmologist", "ENT Specialist",
        "Psychiatrist", "General Physician", "Dentist", "Radiologist",
    ];
    const timeSlots = [
        "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
        "12:00 PM", "12:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
        "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM",
    ];


    // Degrees to be controlled via admin panel
    const degrees = ["MBBS", "BDS", "BSc Nursing", "MD", "MS", "MSc", "DNB", "DM", "MCh", "MDS", "BAMS", "BHMS"];
    const [apptTab, setApptTab] = useState("list");

    // Profiles will be fetched via backend API
    const [profile, setProfile] = useState({
        name: "Name Of the Doctor ",
        specialization: "Please Enter The Specialisation ",
        fee: "Please Enter The Fee ",
        experience: "Please Enter The Experience ",
        bio: "Please Enter The Bio ",
        hospital: "Please Enter The Hospital ",
        degrees: ["MBBS", "BDS"]
    });

    const toggleDegree = (degree) => {
        if (profile.degrees.includes(degree)) {
            setProfile((p) => ({ ...p, degrees: p.degrees.filter((d) => d !== degree) }));
        } else {
            setProfile((p) => ({ ...p, degrees: [...p.degrees, degree] }));
        }
    };


    return (
        <>
            <div className='px-60'>

                {/*////////////////////// Name And  Stats ///////////////////////////////////  */}

                <div className=' my-5  flex justify-between' >
                    <div >
                        <p className='text-2xl font-bold '>Welcome Back Doctor Mheta </p>
                        <p>3 pending appointments today </p>
                    </div>
                    <div >
                        <div className="flex gap-2">
                            <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-center">
                                <p className="text-xl font-bold text-blue-600">5</p>
                                <p className="text-xs text-slate-500">Total</p>
                            </div>
                            <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-center">
                                <p className="text-xl font-bold text-amber-500">3</p>
                                <p className="text-xs text-slate-500">Pending</p>
                            </div>
                            <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-center">
                                <p className="text-xl font-bold text-teal-600">2</p>
                                <p className="text-xs text-slate-500">Done</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}

                {/* Tabbings  */}

                <div className="flex gap-2 mb-6 bg-white border border-slate-200 rounded-xl p-1 w-fit">
                    <button
                        onClick={() => setMainTab("profile")}
                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${mainTab === "profile" ? "bg-blue-600 text-white" : "text-slate-600 hover:text-slate-800 hover:bg-slate-100"}`}
                    >
                        Profile Setup
                    </button>
                    <button
                        onClick={() => setMainTab("appointments")}
                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${mainTab === "appointments" ? "bg-blue-600 text-white" : "text-slate-600 hover:text-slate-800 hover:bg-slate-100"}`}
                    >
                        Appointment
                    </button>
                </div>

                {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}

                {/*////////////////////// Profile Setup ///////////////////////////////////  */}
                {mainTab === "profile" && (
                    // <p>Profile Setup</p>

                    <div className='flex gap-6 ' >
                        <div className='w-2/3'>
                            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5">
                                <h2 className="font-semibold text-slate-900">Profile Information</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                                        <input

                                            onChange={(e) => setProfile((p) => ({ ...p, name: e.target.value }))}
                                            className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Specialization</label>
                                        <select
                                            value={profile.specialization}
                                            onChange={(e) => setProfile((p) => ({ ...p, specialization: e.target.value }))}
                                            className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                        >
                                            {specializations.map((s) => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Consultation Fee (₹)</label>
                                        <input
                                            type="number"
                                            value={profile.fee}
                                            onChange={(e) => setProfile((p) => ({ ...p, fee: e.target.value }))}
                                            className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Years of Experience</label>
                                        <input
                                            type="number"
                                            value={profile.experience}
                                            onChange={(e) => setProfile((p) => ({ ...p, experience: e.target.value }))}
                                            className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Currently Working At</label>
                                    <input
                                        value={profile.hospital}
                                        onChange={(e) => setProfile((p) => ({ ...p, hospital: e.target.value }))}
                                        className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Professional Bio</label>
                                    <textarea
                                        rows={3}
                                        value={profile.bio}
                                        onChange={(e) => setProfile((p) => ({ ...p, bio: e.target.value }))}
                                        className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                    />
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl my-5 p-6">
                                <h2 className="font-semibold text-slate-900 mb-1">Degree Badges</h2>
                                <p className="text-xs text-slate-500 mb-4">Select all degrees that apply to your qualifications</p>
                                <div className="flex flex-wrap gap-2">
                                    {degrees.map((d) => (
                                        <button
                                            key={d}
                                            type="button"
                                            onClick={() => toggleDegree(d)}
                                            className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${profile.degrees.includes(d)
                                                ? "bg-blue-600 text-white border-blue-600"
                                                : "bg-white text-slate-600 border-slate-300 hover:border-blue-300"
                                                }`}
                                        >
                                            {d}
                                        </button>

                                    ))}
                                </div>
                            </div>

                            <button
                                // onClick={handleProfileSave}
                                className="w-full my-3 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Save Profile
                            </button>
                        </div>
                        {/* Right Profile Card View  */}
                        <div className='w-1/3 '>
                            <div className="space-y-5">
                                {/* Avatar and name preview */}
                                <div className="bg-white border border-slate-200 rounded-2xl p-5">
                                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-2xl mx-auto mb-4">
                                        AM
                                    </div>
                                    <div className="text-center">
                                        <p className="font-semibold text-slate-900">{profile.name}</p>
                                        <p className="text-sm text-slate-500">{profile.specialization}</p>
                                        <p className="text-xs text-slate-400 mt-1">{profile.hospital}</p>
                                    </div>
                                    <div className="mt-4 flex gap-2 justify-center flex-wrap">
                                        {profile.degrees.map((d) => (
                                            <span key={d} className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded-md font-medium">
                                                {d}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Badges preview panel */}
                                <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3">
                                    <h3 className="text-sm font-semibold text-slate-700">Badges Preview</h3>
                                    <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-xl border border-amber-100">
                                        <span className="text-2xl">⭐</span>
                                        <div>
                                            <p className="text-xs font-semibold text-amber-800">Experience Badge</p>
                                            <p className="text-xs text-amber-600">{profile.experience}+ Years</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-xl border border-teal-100">
                                        <span className="text-2xl">✅</span>
                                        <div>
                                            <p className="text-xs font-semibold text-teal-800">Consultation Fee</p>
                                            <p className="text-xs text-teal-600">₹{profile.fee} per visit</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
                                        <span className="text-2xl">🏥</span>
                                        <div>
                                            <p className="text-xs font-semibold text-blue-800">Verified Specialist</p>
                                            <p className="text-xs text-blue-600">MediBook Verified</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                )}

                {/*////////////////////// Appointment ///////////////////////////////////  */}
                {mainTab === "appointments" && (
                    <>
                        {/* Appontment tabbings  */}

                        <div className="flex gap-2 mb-6 border-b border-slate-200">
                            {["list", "availability"].map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setApptTab(t)}
                                    className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${apptTab === t ? "border-blue-600 text-blue-600" : "border-transparent text-slate-500 hover:text-slate-800"
                                        }`}
                                >
                                    {t === "list" ? "Appointments" : "Availability Control"}
                                </button>
                            ))}
                        </div>


                        {apptTab === "list" && (
                            <>
                                {/* Filtering The Different Lists  */}
                                <div className="flex flex-wrap gap-2">
                                    {["all", "pending", "done"].map((f) => (
                                        <button
                                            key={f}
                                            onClick={() => setApptFilter(f)}
                                            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors capitalize ${apptFilter === f ? "bg-blue-600 text-white" : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300"
                                                }`}
                                        >
                                            {f}
                                        </button>
                                    ))}
                                </div>

                                {/* Appointment List  */}

                                <div className="space-y-3 my-5">
                                    <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-start gap-4">
                                        {/* Patient initials avatar */}
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-semibold text-sm shrink-0">
                                            {/* {a.patient.split(" ").map((n) => n[0]).join("")} */}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2">
                                                <div>
                                                    <p className="font-medium text-slate-900 text-sm">Name of the Patient</p>
                                                    <p className="text-xs text-slate-500">age yrs · Reason for Appointment</p>
                                                </div>
                                                {/* Status badge */}
                                                <span className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${apptFilter.status === "done"
                                                    ? "bg-teal-50 text-teal-700 border border-teal-100"
                                                    : "bg-amber-50 text-amber-700 border border-amber-100"
                                                    }`}>
                                                    {apptFilter.status === "done" ? "Done" : "Pending"}
                                                </span>
                                            </div>
                                            <div className="mt-2 flex items-center justify-between">
                                                <p className="text-xs text-blue-600 font-medium">🕐 Slot Assigned</p>
                                                {/* Toggle status button */}
                                                <button
                                                    // onClick={() => toggleApptStatus(a.id)}
                                                    className="text-xs text-slate-500 hover:text-blue-600 border border-slate-200 px-2.5 py-1 rounded-lg hover:border-blue-200 transition-colors"
                                                >
                                                    Mark as {apptFilter.status === "done" ? "Pending" : "Done"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {apptTab === "availability" && (

                            <>
                                {/* Appointment Availability  */}

                                <div className="grid lg:grid-cols-2 gap-6">

                                    <div>


                                        <div className="flex gap-2 mb-4 bg-white border border-slate-200 rounded-xl p-1 w-fit">
                                            <button
                                                onClick={() => setAvailTab("add")}
                                                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${availTab === "add" ? "bg-blue-600 text-white" : "text-slate-600 hover:text-slate-800"}`}
                                            >
                                                Add Slot
                                            </button>
                                            <button
                                                onClick={() => setAvailTab("view")}
                                                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${availTab === "view" ? "bg-blue-600 text-white" : "text-slate-600 hover:text-slate-800"}`}
                                            >
                                                View Slots
                                            </button>
                                        </div>

                                        {availTab === "add" && (
                                            <form className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
                                                <h3 className="font-semibold text-slate-900">Add New Slot</h3>
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Select Date</label>
                                                    <input
                                                        type="date"

                                                        className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Select Time Slot</label>
                                                    <select
                                                        className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                                    >
                                                        <option value="">Choose a time</option>
                                                        {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                                                    </select>
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="w-full bg-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
                                                >
                                                    Add Slot
                                                </button>
                                            </form>
                                        )}

                                        {availTab === "view" && (
                                            <div className="bg-white border border-slate-200 rounded-2xl p-5">
                                                <h3 className="font-semibold text-slate-900 mb-4">All Active Slots</h3>
                                                <div className="space-y-2">

                                                    <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                                                        <div>
                                                            <p className="text-sm font-medium text-slate-800">Date of the slot · Slot-Timing</p>
                                                            <p className="text-xs text-slate-500 mt-0.5">Patient: Name of the patient</p>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            {/* Booked badge */}
                                                            {/* "bg-teal-50 text-teal-700 border border-teal-100" */}
                                                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-100 
                                                                }`}>
                                                                    Booked 
                                                            </span>
                                                                {/*No  Delete button , delete button only for unbooked slots */}

                                                        </div>
                                                    </div>

                                                    <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                                                        <div>
                                                            <p className="text-sm font-medium text-slate-800">Date of the slot · Slot-Timing</p>
                                                            <p className="text-xs text-slate-500 mt-0.5">Patient: Name of the patient</p>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            {/* Booked / Open badge */}
                                                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-100`}>
                                                                Unbooked 
                                                            </span>

                                                            {/* Delete button (only for unbooked slots) */}

                                                            <button
                                                                // onClick={() => handleDeleteSlot(s.id)}
                                                                className="text-slate-400 hover:text-red-500 transition-colors p-1"
                                                                title="Delete slot"
                                                            >
                                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                </svg>
                                                            </button>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        )}

                                    </div>

                                </div>
                            </>
                        )}

                    </>


                )}

            </div>


        </>
    )
}
</file>

<file path="src/app/DoctorDetailPage/[...slug]/page.js">
'use client'
import React, { useState } from 'react'

export default function page() {
  
    const [selectedSlot, setSelectedSlot] = useState(null);

    const slots = [ "10:00 AM" , "12:00 PM" , "2:00 PM" , "4:00 PM" , "6:00 PM" , "8:00 PM" , "10:00 PM" ]; 

  return (
    
    <>

    <div className="px-60">
         <div>
            <button
            //   onClick={() => { setBookingStep("browse"); setSelectedDoc(null); }}
              className="text-sm text-slate-600 hover:text-blue-600 font-medium mb-6 flex items-center gap-1"
            >
              ← Back to search
            </button>
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Doctor details card */}
              <div className="lg:col-span-2 space-y-5">
                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl shrink-0">
                      {/* {selectedDoc.name.split(" ").slice(1).map((n) => n[0]).join("")} */}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">
                        {/* {selectedDoc.name} */}
                        name goes here
                        </h2>
                      <p className="text-blue-600 font-medium text-sm">
                        {/* {selectedDoc.spec} */}
                        specialization goes here
                        </p>
                      <p className="text-slate-500 text-xs mt-0.5">
                        {/* {selectedDoc.hospital} */}
                        hospital goes here
                        </p>
                      <div className="mt-1.5 flex items-center gap-2 flex-wrap">
                        {/* {selectedDoc.degrees.map((d) => ( */}
                          <span className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded-md font-medium">Degrees</span>
                        {/* ))} */}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {/* {selectedDoc.bio} */}
                    Bio goes here
                    </p>
                  {/* Stats row */}
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="text-center p-3 bg-slate-50 rounded-xl">
                      <p className="text-lg font-bold text-slate-900">
                        {/* {selectedDoc.exp}+ */}
                        doctor experience
                        </p>
                      <p className="text-xs text-slate-500">Years Exp.</p>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-xl">
                      <p className="text-lg font-bold text-amber-500">
                        {/* {selectedDoc.rating}★ */}
                        </p>
                      <p className="text-xs text-slate-500">
                        {/* {selectedDoc.reviews} reviews */}
                        number of reviews
                        </p>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-xl">
                      <p className="text-lg font-bold text-teal-600">
                        {/* ₹{selectedDoc.fee} */}
                        fees in inr
                        </p>
                      <p className="text-xs text-slate-500">Consultation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking panel: slot selection */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <h3 className="font-semibold text-slate-900 mb-4">Select a Slot</h3>
                <div className="space-y-2 mb-5">
                  {slots.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSlot(s)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm border transition-all 
                        ${selectedSlot === s
                          ? "border-blue-600 bg-blue-50 text-blue-700 font-medium"
                          : "border-slate-200 text-slate-700 hover:border-blue-200"
                        }`}
                    >
                      {s}
                    </button>
                   ))} 
                </div>
                <button
                //   onClick={() => {
                    // if (selectedSlot) setBookingStep("book");
                    // else onNotify("Please select a time slot first.");
                //   }}
                  className="w-full bg-blue-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
    </div>
    </>
  )
}
</file>

<file path="src/app/DoctorLogin/page.js">
import React from 'react'

export default function page() {
    return (
        <div className='flex justify-center bg-[#E5E7EB] items-center py-10'>
            <div className='w-[440px] bg-white py-10 px-15 rounded-2xl '>
                <div className='text-[28px] mb-2 font-bold'>
                    Doctor login
                </div>
                <div className='text-[#6B7280] text-[14px] text-wrap '>
                    Sign in to access your appointment schedule.                </div>

                <form className='my-3' action="">
                    <label className='font-semibold' htmlFor="">Username</label>
                    <input className='w-full px-3 my-2 py-2 border-2  border-[#cccccc57] outline-none rounded-xl ' placeholder='jane_smith_cardiology' type="text" />

                    <label className='font-semibold' htmlFor="">DoctorId</label>
                    <input className='  outline-none w-full px-3 my-2 py-2 border-2 border-[#cccccc57] rounded-xl ' placeholder='MD-2049-SA' type="Email" />

                    <label className='font-semibold' htmlFor="">Password</label>
                    <input className='  outline-none w-full px-3 my-2 py-2 border-2 border-[#cccccc57] rounded-xl ' placeholder='password' type="password" />



                    <button className='w-full mt-5 px-5 py-3 text-white font-semibold hover:bg-blue-300 rounded-xl text-center bg-[#2563EB]'>
                        Login
                    </button>

                    <div className="text-center mt-5"> {/* Add this div to center the text */}
                        <p>New Doctor ? <span className='text-[#2563EB]'> Register here </span></p>
                    </div>

                </form>
            </div>
        </div>
    )
}
</file>

<file path="src/app/PatientDashboard/[...slug]/page.js">
"use client";
import React, { useState } from "react";

export default function page() {
    const [tab, setTab] = useState("search");
    const [specFilter, setSpecFilter] = useState("All");
    const [histFilter, setHistFilter] = useState("all");
    const specializations = [
        "All",
        "Cardiologist",
        "Neurologist",
        "Dermatologist",
        "Orthopedist",
        "Pediatrician",
        "Gynecologist",
        "Ophthalmologist",
        "ENT Specialist",
        "Psychiatrist",
        "General Physician",
        "Dentist",
    ];

    return (
        <>
            <div className="px-60">
                <div className="my-3">
                    <p className="text-2xl font-bold">Hello , Patient Name </p>
                    <p>Find and book appointments with top specialists</p>
                </div>

                {/* Tabbings  */}

                <div className="flex gap-1 my-6 bg-white border border-slate-200 rounded-xl p-1 w-fit overflow-x-auto">
                    {[
                        { key: "search", label: "Find Doctors" },
                        { key: "profile", label: "My Profile" },
                        { key: "history", label: "Bookings" },
                    ].map((t) => (
                        <button
                            key={t.key}
                            onClick={() => {
                                setTab(t.key);
                            }}
                            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${tab === t.key
                                    ? "bg-blue-600 text-white"
                                    : "text-slate-600 hover:text-slate-800 hover:bg-slate-100"
                                }`}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>

                {tab === "search" && (
                    <div>
                        {/* Search input */}
                        <div className="flex flex-col sm:flex-row gap-3 mb-6">
                            <div className="relative flex-1">
                                <svg
                                    className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                                <input
                                    type="text"
                                    //   value={searchQuery}
                                    //   onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search by name or specialization..."
                                    className="w-full border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                />
                            </div>
                        </div>

                        {/* Specialization filter pills */}
                        <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
                            {specializations.map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setSpecFilter(s)}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 border transition-colors ${specFilter === s
                                            ? "bg-blue-600 text-white border-blue-600"
                                            : "bg-white text-slate-600 border-slate-200 hover:border-blue-200"
                                        }`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>

                        {/* Doctor cards grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                            <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-200 hover:shadow-sm transition-all cursor-pointer">
                                <div className="flex items-start gap-3 mb-4">
                                    {/* Doctor initials avatar */}
                                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">
                                        {/* {doc.name.split(" ").slice(1).map((n) => n[0]).join("")} */}
                                        AM
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-semibold text-slate-900 text-sm truncate">
                                            Name of the Doctor{" "}
                                        </p>
                                        <p className="text-xs text-blue-600 font-medium">
                                            Specialisation{" "}
                                        </p>
                                        {/* RAting stars */}
                                        <span className="text-amber-500 text-xs font-semibold">
                                            "★"
                                        </span>
                                    </div>
                                </div>
                                {/* Degree badges */}
                                <div className="flex gap-1.5 flex-wrap mb-4">
                                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                                        Cardiologist
                                    </span>
                                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                                        Neurologist
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-3">
                                    <span>Experience in years </span>
                                    <span className="font-semibold text-slate-800">Fee</span>
                                </div>
                                <div className="mt-1 text-xs text-teal-600 font-medium">
                                    number of slots available
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-200 hover:shadow-sm transition-all cursor-pointer">
                                <div className="flex items-start gap-3 mb-4">
                                    {/* Doctor initials avatar */}
                                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">
                                        {/* {doc.name.split(" ").slice(1).map((n) => n[0]).join("")} */}
                                        AM
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-semibold text-slate-900 text-sm truncate">
                                            Name of the Doctor{" "}
                                        </p>
                                        <p className="text-xs text-blue-600 font-medium">
                                            Specialisation{" "}
                                        </p>
                                        {/* RAting stars */}
                                        <span className="text-amber-500 text-xs font-semibold">
                                            "★"
                                        </span>
                                    </div>
                                </div>
                                {/* Degree badges */}
                                <div className="flex gap-1.5 flex-wrap mb-4">
                                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                                        Cardiologist
                                    </span>
                                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                                        Neurologist
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-3">
                                    <span>Experience in years </span>
                                    <span className="font-semibold text-slate-800">Fee</span>
                                </div>
                                <div className="mt-1 text-xs text-teal-600 font-medium">
                                    number of slots available
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-200 hover:shadow-sm transition-all cursor-pointer">
                                <div className="flex items-start gap-3 mb-4">
                                    {/* Doctor initials avatar */}
                                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">
                                        {/* {doc.name.split(" ").slice(1).map((n) => n[0]).join("")} */}
                                        AM
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-semibold text-slate-900 text-sm truncate">
                                            Name of the Doctor{" "}
                                        </p>
                                        <p className="text-xs text-blue-600 font-medium">
                                            Specialisation{" "}
                                        </p>
                                        {/* RAting stars */}
                                        <span className="text-amber-500 text-xs font-semibold">
                                            "★"
                                        </span>
                                    </div>
                                </div>
                                {/* Degree badges */}
                                <div className="flex gap-1.5 flex-wrap mb-4">
                                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                                        Cardiologist
                                    </span>
                                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                                        Neurologist
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-3">
                                    <span>Experience in years </span>
                                    <span className="font-semibold text-slate-800">Fee</span>
                                </div>
                                <div className="mt-1 text-xs text-teal-600 font-medium">
                                    number of slots available
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {tab === "profile" && (
                    <div className="max-w-2xl">
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5">
                            <h2 className="font-semibold text-slate-900">Health Profile</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                        Full Name
                                    </label>
                                    <input
                                        // value={profile.name}
                                        // onChange={(e) => setP("name", e.target.value)}
                                        className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                        Age
                                    </label>
                                    <input
                                        type="number"
                                        // value={profile.age}
                                        // onChange={(e) => setP("age", e.target.value)}
                                        className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                        Gender
                                    </label>
                                    <select
                                        // value={profile.gender}
                                        // onChange={(e) => setP("gender", e.target.value)}
                                        className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                    >
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                        Phone Number
                                    </label>
                                    <input
                                        // value={profile.phone}
                                        // onChange={(e) => setP("phone", e.target.value)}
                                        className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                    Lifestyle
                                </label>
                                <select
                                    //   value={profile.lifestyle}
                                    //   onChange={(e) => setP("lifestyle", e.target.value)}
                                    className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                >
                                    <option>Sedentary</option>
                                    <option>Lightly Active</option>
                                    <option>Moderately Active</option>
                                    <option>Very Active</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                    Any Recent Medical Condition
                                </label>
                                <input
                                    //   value={profile.medicalCondition}
                                    //   onChange={(e) => setP("medicalCondition", e.target.value)}
                                    placeholder="e.g. Hypertension, Diabetes..."
                                    className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                    Last Doctor Visit
                                </label>
                                <input
                                    type="date"
                                    //   value={profile.lastVisit}
                                    //   onChange={(e) => setP("lastVisit", e.target.value)}
                                    className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <button
                                // onClick={handleSaveProfile}
                                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Save Profile
                            </button>
                        </div>
                    </div>
                )}

                {tab === "history" && (
                    <div>
                        {/* Filter: all / upcoming / past */}
                        <div className="flex gap-2 mb-5">
                            {["all", "upcoming", "past"].map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setHistFilter(f)}
                                    className={`px-4 py-1.5 rounded-lg text-sm font-medium capitalize transition-colors ${histFilter === f
                                            ? "bg-blue-600 text-white"
                                            : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300"
                                        }`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>

                        {/* Booking cards */}
                        <div className="space-y-3">
                            <div
                                className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                            >
                                <div className="flex items-start gap-4">
                                    {/* Doctor initials avatar */}
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">
                                        {/* {b.doctor.split(" ") .slice(/1) .map((n) => n[0]) .join("")} */}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 text-sm">
                                            {/* {b.doctor} */}
                                        </p>
                                        <p className="text-xs text-blue-600 font-medium">
                                            {/* {b.spec} */}
                                        </p>
                                        <p className="text-xs text-slate-500 mt-1">
                                            {/* 🕐 {b.slot} */}
                                        </p>
                                        <p className="text-xs text-slate-400 mt-0.5">
                                            {/* Ref: {b.ref} */}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="text-right">
                                        <p className="text-sm font-semibold text-slate-800">
                                            {/* ₹{b.fee} */}
                                        </p>
                                        <p className="text-xs text-slate-400">Paid</p>
                                    </div>
                        
                                    <span
                                        className={`text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100`}
                                    >
                                        Upcoming
                                        {/* {b.status === "" ? "Upcoming" : "Completed"} */}
                                    </span>
                                </div>
                            </div>

                            <div
                                className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                            >
                                <div className="flex items-start gap-4">
                                    {/* Doctor initials avatar */}
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">
                                        {/* {b.doctor.split(" ") .slice(/1) .map((n) => n[0]) .join("")} */}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 text-sm">
                                            {/* {b.doctor} */}
                                        </p>
                                        <p className="text-xs text-blue-600 font-medium">
                                            {/* {b.spec} */}
                                        </p>
                                        <p className="text-xs text-slate-500 mt-1">
                                            {/* 🕐 {b.slot} */}
                                        </p>
                                        <p className="text-xs text-slate-400 mt-0.5">
                                            {/* Ref: {b.ref} */}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="text-right">
                                        <p className="text-sm font-semibold text-slate-800">
                                            {/* ₹{b.fee} */}
                                        </p>
                                        <p className="text-xs text-slate-400">Paid</p>
                                    </div>
                        
                                    <span
                                        className={`text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100`}
                                    >
                                        Upcoming
                                        {/* {b.status === "" ? "Upcoming" : "Completed"} */}
                                    </span>
                                </div>
                            </div>

                            <div
                                className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                            >
                                <div className="flex items-start gap-4">
                                    {/* Doctor initials avatar */}
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">
                                        {/* {b.doctor.split(" ") .slice(/1) .map((n) => n[0]) .join("")} */}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 text-sm">
                                            {/* {b.doctor} */}
                                        </p>
                                        <p className="text-xs text-blue-600 font-medium">
                                            {/* {b.spec} */}
                                        </p>
                                        <p className="text-xs text-slate-500 mt-1">
                                            {/* 🕐 {b.slot} */}
                                        </p>
                                        <p className="text-xs text-slate-400 mt-0.5">
                                            {/* Ref: {b.ref} */}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="text-right">
                                        <p className="text-sm font-semibold text-slate-800">
                                            {/* ₹{b.fee} */}
                                            fees in inr 
                                        </p>
                                        <p className="text-xs text-slate-400">Paid</p>
                                    </div>
                              
                                    <span
                                        className={`text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200`}
                                    >
                                        Completed
                                        {/* {b.status === "" ? "Upcoming" : "Completed"} */}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
</file>

<file path="src/app/PatientLogin/page.js">
import React from 'react'

export default function page() {
  return (
    
     <div className='flex justify-center bg-[#E5E7EB] items-center py-10 my-3'>
            <div className='w-[440px] bg-white py-10 px-15 rounded-2xl '>

                <div className='text-[28px] mb-2 font-bold'>
                    Patient Login 
                </div>

                <form className='my-3' action="">

                    <label className='font-semibold' htmlFor="">Phone Number</label>
                    <input className='w-full px-3 my-2 py-2 border-2  border-[#cccccc57] outline-none rounded-xl ' placeholder='+91 8824987634' type="number" />

                    <button className='w-full mt-5 px-5 py-3 text-white font-semibold hover:bg-blue-300 rounded-xl text-center bg-[#2563EB]'>
                        Request OTP
                    </button>

                    <div className="text-center mt-5">
                        <p>Don't have an account ? <span className='text-[#2563EB]'> Register here </span></p>
                    </div>

                </form>
            </div>
        </div>
  )
}
</file>

<file path="src/app/PatientSignup/page.js">
import React from 'react'

export default function page() {
    return (
        <div className='flex justify-center bg-[#E5E7EB] items-center py-10 my-3'>
            <div className='w-[440px] bg-white py-10 px-15 rounded-2xl '>

                <div className='text-[28px] mb-2 font-bold'>
                    Patient Signup 
                </div>

                <form className='my-3' action="">
                    <label className='font-semibold' htmlFor="">Full Name</label>
                    <input className='w-full px-3 my-2 py-2 border-2  border-[#cccccc57] outline-none rounded-xl ' placeholder='' type="text" />

                    <label className='font-semibold' htmlFor="">Phone Number</label>
                    <input className='w-full px-3 my-2 py-2 border-2  border-[#cccccc57] outline-none rounded-xl ' type="number" />

                    <button className='w-full mt-5 px-5 py-3 text-white font-semibold hover:bg-blue-300 rounded-xl text-center bg-[#2563EB]'>
                        Signup
                    </button>

                    <div className="text-center mt-5">
                        <p>Already have an account ? <span className='text-[#2563EB]'> Login here </span></p>
                    </div>

                </form>
            </div>
        </div>
    )
}
</file>

<file path="src/app/RegisterAsDoctor/page.js">
import React from 'react'

export default function page() {
    return (
        <div className='flex justify-center bg-[#E5E7EB] items-center py-10'>
            <div className='w-[640px] bg-white py-10 px-15 rounded-2xl '>
                <div className='text-[28px] mb-2 font-bold'>
                    Register As Doctor
                </div>
                <div className='text-[#6B7280] text-[14px] text-wrap '>
                    Join our platform and connect with thousands of patients. Submit credentials for clinical verification.
                </div>

                <form className='my-3' action="">
                    <label className='font-semibold' htmlFor="">Full name</label>
                    <input className='w-full px-3 my-2 py-2 border-2  border-[#cccccc57] outline-none rounded-xl ' type="text" />

                    <label className='font-semibold' htmlFor="">Email</label>
                    <input className='  outline-none w-full px-3 my-2 py-2 border-2 border-[#cccccc57] rounded-xl ' type="Email" />

                    <label className='font-semibold' htmlFor="">Phone Number</label>
                    <input className='  outline-none w-full px-3 my-2 py-2 border-2 border-[#cccccc57] rounded-xl ' type="number" />

                    <div className='flex'>
                        <div>
                            <label className='font-semibold ' htmlFor="">Years of Expereience</label>
                            <input className='  outline-none w-50 px-3 my-2 py-2 border-2 border-[#cccccc57] rounded-xl ' type="number" />
                        </div>
                        <div>
                            <label className='font-semibold' htmlFor="">Specialisation</label>
                            <input className='  outline-none w-50 px-3 my-2 py-2 border-2 border-[#cccccc57] rounded-xl ' type="number" />
                        </div>

                    </div>

                    <label className='font-semibold' htmlFor="">Currently Working at hospital/clinic </label>
                    <input className='  outline-none w-full px-3 my-2 py-2 border-2 border-[#cccccc57] rounded-xl ' type="text" />

                    <label className='font-semibold' htmlFor="">Education / degree </label>
                    <input className='  outline-none w-full px-3 my-2 py-2 border-2 border-[#cccccc57] rounded-xl ' type="text" />

                    <p className='font-semibold my-3 '> ID & Credential Proof Upload </p>

                    <label className="flex flex-col items-center gap-2 p-6 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 cursor-pointer">
                        {/* Icon */}
                        <div className="w-6 h-6">
                            <img src="/vector.svg" alt="Upload Icon" className="w-full h-full" />
                        </div>

                        {/* Title */}
                        <p className="text-sm font-semibold text-blue-600">
                            Upload Certificate PDF / JPEG
                        </p>

                        {/* Subtitle */}
                        <p className="text-xs text-gray-500 text-center">
                            Upload government medical registration proof (Max 10MB)
                        </p>

                        {/* Hidden Input */}
                        <input type="file" accept=".pdf,.jpg,.jpeg" className="hidden" />

                    </label>

                <button className='w-full mt-5 px-5 py-3 text-white font-semibold hover:bg-blue-300 rounded-xl text-center bg-[#2563EB]'>
                        Submit Registration 
                </button>

                </form>
            </div>
        </div>
    )
}
</file>

<file path="src/app/globals.css">
@import "tailwindcss";
</file>

<file path="src/app/layout.js">
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Medibook",
  description: "Medical booking app",
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
         <Header/>
        {children}
        </body>
        <Footer/>
    </html>
  );
}
</file>

<file path="src/app/page.js">
import Image from "next/image";

export default function Home() {
  return (

    <>
      {/*-------------------------- Hero Section --------------------------------------- */}
      <div className="px-[150px] items-center gap-[100px] bg-[#F3F4F6] flex py-[96px] ">
        <div className="w-3/5" >
          <div className="bg-[#b8c6e5] text-[10px] mb-[24px] inline-block rounded-[7px] font-semibold py-[2px] px-[5px] text-[#2563EB]">
            NOW INTRODUCING INSTANT CONFIRMATION
          </div>
          <div className="font-bold text-[56px] text-wrap mb-[24px]">
            Book Trusted Doctors, Anytime, Anywhere
          </div>
          <div className="text-[#6B7280] text-[18px] text-wrap text-left mb-[24px] " >Skip the waiting room. Connect with certified practitioners, schedule face-to-face appointments, and manage your health seamlessly on the absolute standard healthcare portal.</div>
          <div className="flex justify-start gap-[13px] " >
            <div className=" rounded-[10px] bg-[#2563EB] hover:bg-[#aec0e8] px-5 py-3">Find a Doctor Now </div>
            <div className=" rounded-[10px] hover:bg-[#b9c8e9] shadow-md px-4 py-2 ">How It Works </div>
          </div>
        </div>
        <div className="w-2/5" >

          <Image
            src="/Rectangle.svg"
            alt="Doctor Icon"
            width={520}
            height={400}
            className="rounded-2xl"
          />

        </div>
      </div>
    </>

  );
}
</file>

<file path="src/components/Footer.jsx">
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 px-20 pt-[60px] pb-10 flex flex-col gap-10">
      {/* Top Section */}
      <div className="flex justify-between w-full">
        {/* Logo + Description */}
        <div className="w-80 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 flex items-center justify-center bg-blue-600 rounded-md">
              <Image src="/ambulance.svg" alt="Ambulance Icon" width={14} height={14} />
            </div>
            <div className="text-lg font-bold text-white">MedConnect</div>
          </div>
          <p className="text-sm text-gray-500">
            Connecting patients with trusted healthcare professionals instantly.
            Simple scheduling, verified credentials.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-16">
          <div className="flex flex-col gap-3">
            <div className="text-sm font-semibold text-white">For Patients</div>
            <div className="text-[13px] text-gray-500">Search for Doctors</div>
            <div className="text-[13px] text-gray-500">Book Appointments</div>
            <div className="text-[13px] text-gray-500">Patient Portal</div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-sm font-semibold text-white">For Doctors</div>
            <div className="text-[13px] text-gray-500">Join MedConnect</div>
            <div className="text-[13px] text-gray-500">Professional Portal</div>
            <div className="text-[13px] text-gray-500">Guidelines</div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-sm font-semibold text-white">Legal</div>
            <div className="text-[13px] text-gray-500">Privacy Policy</div>
            <div className="text-[13px] text-gray-500">Terms of Use</div>
            <div className="text-[13px] text-gray-500">HIPAA Compliance</div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <Image src="/line.svg" alt="Divider Line" width={1280} height={1} />

      {/* Bottom Section */}
      <div className="flex justify-between w-full">
        <p className="text-[13px] text-gray-500">© 2026 MedConnect. All rights reserved.</p>
        <p className="text-[13px] text-gray-500">Providing standard clinical assurance.</p>
      </div>
    </footer>
  );
}
</file>

<file path="src/components/Header.jsx">
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <nav className='max-w-full px-[80px] flex py-4 '>
            <div className='flex gap-[10px] flex-1'>
                <div>
                    <Image
                        src="/logo-icon.svg"
                        alt="Doctor Icon"
                        width={36}
                        height={36}
                    />
                </div>
                <div className='text-[20px] font-bold'>Medibook</div>
            </div>
            <div className='flex flex-1 gap-[16px] items-center'>
                <Link href='/PatientDashboard/123'>
                    <div className='font-semibold text-[14px]' >Search Doctor </div>
                </Link>

                <Link href='/RegisterAsDoctor'>
                    <div className='font-semibold text-[14px]' >Register as Doctor </div>
                </Link>

                <Link href='/DoctorLogin'>
                    <div className='font-semibold text-[14px]' >Doctor Login </div>
                </Link>

                <Link href='/PatientLogin'>
                <div className=' hover:bg-blue-300 rounded-[10px] font-semibold text-[14px] text-white bg-[#2563EB] px-4 py-3' >Patient Login / Signup</div>
                </Link>

            </div>
        </nav>
    )
}
</file>

<file path=".gitignore">
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
</file>

<file path="eslint.config.mjs">
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
</file>

<file path="jsconfig.json">
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
</file>

<file path="next.config.mjs">
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
};

export default nextConfig;
</file>

<file path="package.json">
{
  "name": "medibook",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "axios": "^1.20.0",
    "next": "16.3.3",
    "react": "19.2.8",
    "react-dom": "19.2.8"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "eslint": "^9",
    "eslint-config-next": "16.3.3",
    "tailwindcss": "^4"
  }
}
</file>

<file path="postcss.config.mjs">
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
</file>

<file path="README.md">
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
</file>

</files>
