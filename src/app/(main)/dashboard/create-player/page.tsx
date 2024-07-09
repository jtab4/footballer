import React from 'react';
import Image from 'next/image';
import playerImage from '@/assets/images/player.jpg'; // Adjust the path to your image
import soccer from '@/assets/images/soccer.jpg';
import Link from 'next/link'
import CreatePlayerForm from '@/components/main/create-player-form';

export default function CreatePlayer() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="relative flex-1">
                <Image
                    src={soccer}
                    alt="Soccer"
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 px-4">
                    <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg mx-auto w-full max-w-4xl flex flex-wrap">
                        <div className="w-full md:w-1/2 p-4">
                            <h2 className="text-2xl font-bold mb-6 text-center">Create Player</h2>
                            <CreatePlayerForm/>
                        </div>
                        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
                            <Image
                                src={playerImage}
                                alt="Player"
                                className="rounded-lg shadow-lg"
                                width={400}
                                height={600}
                                objectFit="cover"
                            />
                        </div>
                    </div>
                    <div className="mt-4 text-[#CDCCCA]">
                        <Link  className="text-lg underline hover:text-gray-300" href="/dashboard">
                         Back to Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
