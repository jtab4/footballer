import Image from 'next/image';
import soccer from '../../../assets/images/soccer.jpg';
import Navbar from '@/components/navbar/navbar';
import Link from 'next/link';

const LoginPage = () => {
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
                        <h2 className="text-3xl text-[#2E4628] mb-6">Log in to your account</h2>
                        <form className="space-y-4">
                            <div className="flex flex-col">
                                <label htmlFor="email" className="block text-lg text-[#2E4628] mb-2">Email Address</label>
                                <input type="email" id="email" name="email" className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-green-600 transition duration-300" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="password" className="block text-lg text-[#2E4628] mb-2">Password</label>
                                <input type="password" id="password" name="password" className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-green-600 transition duration-300" />
                            </div>
                            <button type="submit" className="w-full bg-[#729762] text-white py-3 px-6 rounded-md shadow-lg hover:bg-green-600 transition duration-300 ease-in-out">
                                Log In
                            </button>
                        </form>
                        <p className="mt-4 text-lg text-[#2E4628]">Don't have an account? <Link className="text-green-600 hover:underline" href="/register">Register now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
