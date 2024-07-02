import Link from 'next/link';
import NavItem from './navlink';

const Navbar = () => {
    return (
        <nav className="bg-[#729762] py-4">
            <div
                className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

                <div className="text-[#E7F0DC] text-2xl font-bold hidden sm:block">Footballer</div>

                <ul className="flex space-x-4 sm:space-x-8 text-white ml-0 sm:ml-4">
                    <NavItem href="/" className="flex-1">Homepage</NavItem>
                    <NavItem href="/matches" className="flex-1">Matches</NavItem>
                    <NavItem href="/teams" className="flex-1">Teams</NavItem>
                    <NavItem href="/contact" className="flex-1">Contact</NavItem>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
