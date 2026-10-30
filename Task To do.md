Step 11.1 — Doctor service + action functions
Micro-steps
11.1.A — Service functions

Open src/services/doctorService.js.

Add 3 functions following existing pattern in that file (getToken helper already exists):
export async function getDoctorAllAppointmentsService() {
    try {
        const token = await getToken()
        if (!token) return { success: false, status: 401, message: "No token found" }
        const res = await axios.get("/appointments/doctor/all", {
            headers: { Authorization: `Bearer ${token}` },
        })
        return { success: true, appointments: res.data.appointments || [] }
    } catch (error) {
        return {
            success: false,
            status: error.response?.status,
            message: error.response?.data?.message || "Failed to fetch appointments",
        }
    }
}

Repeat for:

getDoctorPendingAppointmentsService() → GET /appointments/doctor/pending

getDoctorDoneAppointmentsService() → GET /appointments/doctor/done

All 3 have identical shape — only URL differs.

11.1.B — Server actions

Open src/app/DoctorDashboard/actions.js.

Import: import { addSlot, deleteSlot, updateDoctorProfileService, getDoctorAllAppointmentsService, getDoctorPendingAppointmentsService, getDoctorDoneAppointmentsService } from "@/services/doctorService"

Add 3 wrapper actions (no revalidatePath — these are reads):

export async function getAllAppointments() {
    const res = await getDoctorAllAppointmentsService()
    if (!res.success) return { error: res.message, status: res.status }
    return { success: true, appointments: res.appointments }
}

Repeat for getPendingAppointments() and getDoneAppointments().

Step 11.2 — Rewrite AppointmentsSection.jsx list tab

Micro-steps
What's already there:

State: apptTab ("list" | "availability"), apptFilter ("all" | "pending" | "done"), loading, error, success

Static list with 1 card

"Availability" sub-tab is fully working — do not touch

What changes:

Add new state for the list:

const [appointments, setAppointments] = useState([]);

const [listLoading, setListLoading] = useState(false);

const [listError, setListError] = useState("");

Add useEffect that runs on apptFilter change:

If apptFilter === "all" → getAllAppointments()

If apptFilter === "pending" → getPendingAppointments()

If apptFilter === "done" → getDoneAppointments()

Set listLoading, call action, on success setAppointments(res.appointments), on error setListError(res.error)

Cleanup-safe: since these are fast sequential fetches, a stale-response guard is optional (tab switching is discrete). Skip the ref-based guard — matches your "no debounce" precedent. If flicker becomes annoying, add later.

Replace the static card block with:

Loading state: <p className="text-slate-500 text-sm py-4">Loading...</p>

Error state: <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl">{listError}</div>

Empty state: <p className="text-slate-500 text-sm py-4">No appointments found</p>

Mapped cards: .map(appointment => ...)

Card layout (reuse existing static card styling — do not redesign):

Left: initial avatar (patient name initials), patient name, patient phone, date, time, consultation fee

Right: status badge + "Mark as Done" button (conditional)

Status badge:

Text: appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1) → "Confirmed" / "Completed" / "Cancelled"

Colors:

confirmed → bg-blue-50 text-blue-700 border-blue-100

completed → bg-slate-100 text-slate-600 border-slate-200

cancelled → bg-red-50 text-red-600 border-red-100

"Mark as Done" button — Q3 default = pending tab only:

Render condition: apptFilter === "pending" && appointment.status === "confirmed"

onClick={() => alert("Coming in a future update")}

Style: reuse existing button style from the static card (text-xs text-slate-500 hover:text-blue-600 border border-slate-200 px-2.5 py-1 rounded-lg)

Reference ID: include Ref: {appointment._id.slice(-8).toUpperCase()} as small muted text (matches static card pattern)

Remove unused static constants if any (apptFilter remains used, apptTab remains used for the tab switcher — keep)

key={appointment._id} on mapped cards

Do not add pagination, infinite scroll, real-time updates, or refresh-on-focus. Display-only, one fetch per tab change.


Step 11.3 — Patient service + action functions

Micro-steps
11.3.A — Service functions

Open src/services/appointmentService.js.

Add 3 functions following existing pattern:

export async function getPatientAllAppointmentsService() {
    try {
        const token = await getPatientToken()
        if (!token) return { success: false, status: 401, message: "No token found" }
        const res = await axios.get("/appointments/patient/all", {
            headers: { Authorization: `Bearer ${token}` },
        })
        return { success: true, appointments: res.data.appointments || [] }
    } catch (error) {
        return {
            success: false,
            status: error.response?.status,
            message: error.response?.data?.message || "Failed to fetch appointments",
        }
    }
}

Repeat for:

getPatientUpcomingAppointmentsService() → GET /appointments/patient/upcoming

getPatientPastAppointmentsService() → GET /appointments/patient/past


11.3.B — Server actions

Open src/app/PatientDashboard/actions.js.

Import all 3 service functions.

Add 3 wrappers (mirror the doctor pattern — no revalidatePath).

getPatientAllAppointments()

getPatientUpcomingAppointments()

getPatientPastAppointments()

Step 11.4 — Rewrite DashboardShell.jsx history tab
Micro-steps
What's already there:

State: tab ("search" | "profile" | "history"), specFilter, histFilter ("all" | "upcoming" | "past")

Static 3 booking cards in the history tab

Search and profile tabs work — do not touch

What changes:

Add new state:

const [appointments, setAppointments] = useState([]);

const [listLoading, setListLoading] = useState(false);

const [listError, setListError] = useState("");

Add useEffect that runs on histFilter change only when tab === "history" (avoid fetching appointments when user is on profile/search):

If histFilter === "all" → getPatientAllAppointments()

If histFilter === "upcoming" → getPatientUpcomingAppointments()

If histFilter === "past" → getPatientPastAppointments()

Include tab in the effect's dependency array

Replace the 3 static cards with:

Loading state: <p className="text-slate-500 text-sm py-4">Loading...</p>

Error state: <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl">{listError}</div>

Empty state: <p className="text-slate-500 text-sm py-4">No appointments found</p>

Mapped cards: .map(appointment => ...)

Card layout (reuse existing static card styling):

Left: initial avatar (doctor name initials), doctor name, doctor specialization, doctor currentlyWorkingAt, date, time, Ref ID

Right: consultation fee, status badge

Status badge:

Text: status capitalized → "Confirmed" / "Completed" / "Cancelled"

Colors: same as doctor side (blue/slate/red)

Ref ID: Ref: {appointment._id.slice(-8).toUpperCase()} in text-xs text-slate-400

Fee display: ₹{appointment.consultationFee} with "Paid" label (matches static card)

No buttons, no links — patient has no action (view only, per spec)

key={appointment._id} on mapped cards

Do not touch search tab or profile tab JSX. Only the tab === "history" block changes.


files touched : 

EDIT src/services/doctorService.js (3 new export functions)

EDIT src/services/appointmentService.js (3 new export functions)

EDIT src/app/DoctorDashboard/actions.js (3 new export actions + imports)

EDIT src/app/PatientDashboard/actions.js (3 new export actions + imports)

EDIT src/app/DoctorDashboard/components/AppointmentsSection.jsx (list tab only)

EDIT src/app/PatientDashboard/components/DashboardShell.jsx (history tab only)


do not create any kind of test file , do not write any type of units test , and do not run any type test command , just implement what is instructed . 
