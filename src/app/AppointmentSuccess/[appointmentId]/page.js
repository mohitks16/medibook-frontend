import Link from "next/link";

export default async function Page({ params }) {
  const { appointmentId } = await params;

  return (
    <div className="px-60 py-20">
      <div className="max-w-xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 text-center space-y-6 shadow-sm">
        <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold border border-teal-100">
          ✓
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-slate-900">Booking Confirmed</h1>
          <p className="text-sm text-slate-500">
            Reference: <span className="font-mono font-medium text-slate-700">{appointmentId}</span>
          </p>
        </div>

        <p className="text-sm text-slate-600">
          You'll receive a confirmation email soon.
        </p>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            href="/PatientDashboard"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            View My Bookings
          </Link>
          <Link
            href="/PatientDashboard"
            className="border border-slate-200 text-slate-700 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors"
          >
            Back to Search
          </Link>
        </div>
      </div>
    </div>
  );
}
