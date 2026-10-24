import { redirect, notFound } from "next/navigation";
import { getSlotById } from "../actions";
import { getDoctorDetail } from "@/services/doctorDiscoveryService";
import CheckoutView from "../components/CheckoutView";

export default async function Page({ params, searchParams }) {
  const { slug } = await params;
  const { slotId } = await searchParams;

  console.log("slug" , slug)
  console.log("slotId" , slotId)

  if (!slotId) {
    return <div className="px-60 py-20 text-center text-red-500">Slot ID is missing.</div>;
  }

  const slotRes = await getSlotById(slotId);

  if (slotRes.status === 401) {
    redirect("/PatientLogin");
  }

  if (slotRes.error) {

    return <div className="px-60 py-20 text-center text-red-500">{slotRes.error}</div>;

  }

  const doctorRes = await getDoctorDetail(slug[0]);

  
  if (doctorRes.error || !doctorRes.doctor) {

    return <div className="px-60 py-20 text-center text-red-500">{doctorRes.message || "Failed to fetch doctor details"}</div>;
  
  }

  return <CheckoutView doctor={doctorRes.doctor} slot={slotRes.slot} />;
}
