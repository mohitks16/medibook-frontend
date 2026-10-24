"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createAppointment } from "../actions";

export default function CheckoutView({ doctor, slot }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleConfirm = async () => {
        setLoading(true);
        setError("");
        const res = await createAppointment(slot._id);
        if (res.error) {

            setError(res.error);
            setLoading(false);
            return;

        }
        
        router.push(`/AppointmentSuccess/${res.appointment._id}`);
    };

    return (
        <div className="px-60 py-10">
            <div className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-2xl font-bold text-slate-900">Appointment Checkout</h1>

                {error && (
                    <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl border border-red-100">
                        {error}
                    </div>
                )}

                {slot.isBooked ? (
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center space-y-4">
                        <p className="text-red-700 font-medium">
                            This slot is no longer available. Please go back and choose another.
                        </p>
                        <Link
                            href={`/DoctorDetailPage/${doctor._id}`}
                            className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Back to Doctor Details
                        </Link>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Left card: Doctor Summary */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
                            <h3 className="font-semibold text-slate-900 text-lg">Doctor Details</h3>
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg shrink-0">
                                    {doctor.fullName ? doctor.fullName.split(" ").map(n => n[0]).join("").slice(0, 2) : "DR"}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-base">{doctor.fullName}</h4>
                                    <p className="text-blue-600 font-medium text-sm">{doctor.specialization}</p>
                                    <p className="text-slate-500 text-xs mt-0.5">{doctor.currentlyWorkingAt}</p>
                                </div>
                            </div>
                        </div>

                        {/* Right card: Slot & Fee Summary */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
                            <h3 className="font-semibold text-slate-900 text-lg">Appointment Summary</h3>
                            <div className="space-y-2 text-sm text-slate-600">
                                <p><span className="font-medium text-slate-700">Date:</span> {slot.date}</p>
                                <p><span className="font-medium text-slate-700">Time:</span> {slot.time}</p>
                                <p className="text-base font-bold text-teal-600 pt-2">
                                    Consultation Fee: ₹{doctor.consultationFee}
                                </p>
                            </div>

                            <button
                                onClick={handleConfirm}
                                disabled={loading}
                                className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
                            >
                                {loading ? "Booking..." : "Confirm Appointment"}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
