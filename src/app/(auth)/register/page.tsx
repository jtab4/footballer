import Image from 'next/image';
import soccer from '../../../assets/images/soccer.jpg';
import Navbar from '@/components/navbar/navbar';
import Link from 'next/link';
import RegisterForm from '@/components/auth/registerform';
const RegisterPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="relative flex-1">
            <Image
                src={soccer}
                alt="Piłka nożna"
                layout="fill"
                objectFit="cover"
                priority={true}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 px-4">
                <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg mx-auto w-full max-w-md lg:max-w-xl">
                    <h2 className="text-3xl text-[#2E4628] mb-6">Register an account</h2>
                    <RegisterForm/>
                    <p className="mt-4 text-lg text-[#2E4628]">Do you have an account? <Link className="text-green-600 hover:underline" href="/login">Login</Link></p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default RegisterPage;
