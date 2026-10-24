'use client'
// import { getDoctorProfile } from '@/services/doctorService';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { fetchDoctorProfile } from '../actions';

export default  function page() {

  const [selectedSlot, setSelectedSlot] = useState(null);

  const slots = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM", "8:00 PM", "10:00 PM"];    

  const [AvailableSlots , setAvailableSlots] = useState([])
  const [doctor , setDoctor] = useState({})

  const param = useParams() ; 
  const router = useRouter();
  console.log("id", param.slug[0])

  // const  = param.slug[0] ;



const fetchDoctorData = async () => {
    const res = await fetchDoctorProfile(param.slug[0])
    const {Doctor , Slots , Message } = res ;
    setAvailableSlots(Slots) ;
    setDoctor(Doctor) ;
    // console.log("Doctor" , Doctor)
    // console.log("Slots" , Slots)
    // console.log("Message" , Message)
}

const handleBook = () => {
  if (!selectedSlot) {
    alert("Please select a time slot first.");
    return;
  }
  router.push(`/AppointmentCheckout/${param.slug[0]}?slotId=${selectedSlot}`);
};

// console.log("AvailableSlots" , AvailableSlots)
// console.log("doctor" , doctor)
// console.log("degree" , doctor?.degree?.split(','))

useEffect(()=>{
fetchDoctorData() ;
},[])

  return (
    <>
      <div className="px-60">
        <div>
          <button
            //   onClick={() => { setBookingStep("browse"); setSelectedDoc(null); }}
            className="text-sm text-slate-600 hover:text-blue-600 font-medium mb-6 flex items-center gap-1"
          >
            â† Back to search
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
                      {doctor.fullName}
                    </h2>
                    <p className="text-blue-600 font-medium text-sm">
                      {doctor.specialization}
                    </p>
                    <p className="text-slate-500 text-xs mt-0.5">
                      {doctor.currentlyWorkingAt}
                    </p>
                    <div className="mt-1.5 flex items-center gap-2 flex-wrap">
                      {doctor?.degree?.split(',').map((d) => (
                        <span key={d} className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded-md font-medium">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {doctor.professionalBio}
                </p>
                {/* Stats row */}
                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-slate-50 rounded-xl">
                    <p className="text-lg font-bold text-slate-900">
                      {doctor.yearsOfExperience} + yrs
                    </p>
                    <p className="text-xs text-slate-500">Years Exp.</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-xl">
                    <p className="text-lg font-bold text-amber-500">
                      {/* {selectedDoc.rating}â˜… */}
                    </p>
                    <p className="text-xs text-slate-500">
                      {/* {selectedDoc.reviews} reviews */}
                    </p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-xl">
                    <p className="text-lg font-bold text-teal-600">
                      {doctor.consultationFee} â‚¹
                    </p>
                    <p className="text-xs text-slate-500">Consultation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking panel: slot selection */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5">
              <h3 className="font-semibold text-slate-900 mb-4">Available Slots</h3>
              <div className="space-y-2 mb-5">
                {AvailableSlots.map((s) => (
                  <button
                    key={s._id}
                    onClick={() => setSelectedSlot(s._id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm border transition-all  
                        ${selectedSlot === s._id
                        ? "border-blue-600 bg-blue-50 text-blue-700 font-medium"
                        : "border-slate-200 text-slate-700 hover:border-blue-200"
                      }`}
                  >
                    {s.time}  on {s.date}
                  </button>
                ))}
              </div>
              <button
                onClick={handleBook}
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
