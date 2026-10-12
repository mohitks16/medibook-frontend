import LoginForm from './components/LoginForm'

export default function DoctorLoginPage() {
    return (
        <div className='flex justify-center bg-[#E5E7EB] items-center py-10'>
            <div className='w-[440px] bg-white py-10 px-15 rounded-2xl'>
                <div className='text-[28px] mb-2 font-bold'>
                    Doctor login
                </div>
                <div className='text-[#6B7280] text-[14px] text-wrap'>
                    Sign in to access your appointment schedule.
                </div>

                <LoginForm />
            </div>
        </div>
    )
}