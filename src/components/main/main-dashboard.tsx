// Dashboard.tsx
import React from 'react';
import Image from 'next/image';
import soccer from '../../assets/images/soccer.jpg';
import Link from 'next/link';
import Footer from '../utils/footer'; // Adjust the path based on your folder structure

const Dashboard: React.FC = () => {
    const tiles = [
        { text: 'Create new player', link: '/create-player' },
        { text: 'Manage your players', link: '/manage-players' },
        { text: 'Create new team', link: '/create-team' },
        { text: 'Manage your teams', link: '/manage-teams' },
    ];

    return (
        <div className="relative min-h-screen">
            <div className="absolute top-0 left-0 w-full h-full">
                <Image
                    src={soccer}
                    alt="Piłka nożna"
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 flex flex-wrap justify-center items-center min-h-screen">
                {tiles.map((tile, index) => (
                    <Link
                        key={index}
                        href={tile.link}
                        className="w-80 h-40 m-4 flex items-center justify-center bg-[#4e5405] text-white text-lg font-bold relative bg-cover bg-center rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    >
                        <div className="absolute inset-0 bg-black opacity-50 hover:opacity-30 transition-opacity rounded-lg"></div>
                        <span className="z-10 text-[#CDCCCA]">{tile.text}</span>
                    </Link>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
