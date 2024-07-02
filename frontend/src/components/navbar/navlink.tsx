import Link from 'next/link';

interface NavItemProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
    return (
        <li>
            <Link className="text-[#E7F0DC]" href={href}>
                {children}
            </Link>
        </li>
    );
};

export default NavItem;