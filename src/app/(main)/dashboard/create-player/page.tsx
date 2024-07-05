import React from 'react';
import Image from 'next/image';
import playerImage from '@/assets/images/player.jpg'; // Adjust the path to your image
import soccer from '@/assets/images/soccer.jpg';
import Link from 'next/link'
const nationalities = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina",
    "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
    "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
    "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
    "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
    "Congo, Republic of the", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
    "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea",
    "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany",
    "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica",
    "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait",
    "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
    "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
    "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
    "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
    "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay",
    "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
    "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
    "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
    "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
    "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago",
    "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
    "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const positions = ["GK", "LB", "CB", "RB", "CM", "CDM", "CAM", "LW", "ST", "RW"];

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
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-700">First Name</label>
                                    <input
                                        type="text"
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                        placeholder="Enter first name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Last Name</label>
                                    <input
                                        type="text"
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                        placeholder="Enter last name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Weight</label>
                                    <input
                                        type="number"
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                        placeholder="Enter weight (kg)"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Height</label>
                                    <input
                                        type="number"
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                        placeholder="Enter height (cm)"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Nationality</label>
                                    <select
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                    >
                                        {nationalities.map(country => (
                                            <option key={country} value={country}>{country}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Position</label>
                                    <select
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                    >
                                        {positions.map(position => (
                                            <option key={position} value={position}>{position}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="mt-4 bg-[#4e5405] text-[#CDCCCA] py-2 px-4 rounded-md hover:bg-[#636808] transition duration-300"
                                    >
                                        Create Player
                                    </button>
                                </div>
                            </form>
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
