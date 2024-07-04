import Image from 'next/image';
import soccer from '../../assets/images/soccer.jpg';
import Navbar from '../navbar/navbar';
import Link from 'next/link';
import Footer from '../utils/footer';
export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="relative flex-1 overflow-hidden">
                <Image
                    src={soccer}
                    alt="Piłka nożna"
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 px-4">
                    <p className="text-[#CDCCCA] text-2xl md:text-4xl lg:text-5xl mb-8">
                        Form your dream team today and score big on the field!
                    </p>
                    <div className="flex flex-col md:flex-row md:justify-center md:space-x-4 space-y-4 md:space-y-0">
                        <Link className="bg-[#546007] text-white py-3 px-6 rounded-md shadow-lg hover:bg-green-600 transition duration-300 ease-in-out inline-block" href="/login">
                           
                                Create your team
                            
                        </Link>
                        <Link className="bg-[#546007] text-white py-3 px-6 rounded-md shadow-lg hover:bg-[#86B58D] transition duration-300 ease-in-out inline-block" href="/login">
                            
                                Make your player
                            
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
