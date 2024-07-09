import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import teamImage from '@/assets/images/team.jpg';
import soccer from '@/assets/images/soccer.jpg';
import { nationalities } from '@/constants/constants';


export default function CreateTeam() {
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
                            <h2 className="text-2xl font-bold mb-6 text-center">Create Team</h2>
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Team Name</label>
                                    <input
                                        type="text"
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                        placeholder="Enter team name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Country</label>
                                    <select
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                    >
                                        {nationalities.map(country => (
                                            <option key={country} value={country}>{country}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">City</label>
                                    <input
                                        type="text"
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                        placeholder="Enter city"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Estimated Budget</label>
                                    <input
                                        type="number"
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                        placeholder="Enter estimated budget"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Stadium</label>
                                    <input
                                        type="text"
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                        placeholder="Enter stadium name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Year Founded</label>
                                    <input
                                        type="number"
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                        placeholder="Enter year founded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Team Colors</label>
                                    <input
                                        type="text"
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                        placeholder="Enter team colors"
                                    />
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="mt-4 bg-[#4e5405] text-[#CDCCCA] py-2 px-4 rounded-md hover:bg-[#636808] transition duration-300"
                                    >
                                        Create Team
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
                            <Image
                                src={teamImage}
                                alt="Stadium"
                                className="rounded-lg shadow-lg"
                                width={400}
                                height={600}
                                objectFit="cover"
                            />
                        </div>
                    </div>
                    <div className="mt-4 text-[#CDCCCA]">
                        <Link className="text-lg underline hover:text-gray-300" href="/dashboard">
                            Back to Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
