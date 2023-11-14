import { useState, useEffect } from 'react';
import logo from '../../assets/logo.png'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './navbar.css'
import { Link, useLocation } from 'react-router-dom';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'home', href: '/', current: false },
    { name: 'blood-request', href: '/blood_request', current: false },
    { name: 'be volunteer', href: '/be_volunteer', current: false },
    { name: 'messanger', href: '/inbox', current: false },
    { name: 'login', href: '/login', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [isSticky, setIsSticky] = useState(false);
    const location = useLocation()
    location.pathname


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <Disclosure as="nav" className={`navbar-section border-2 bg-white ${isSticky ? 'sticky' : ''}`}>
            {({ open }) => (
                <>
                    <div className="container mx-auto xl:w-3/4 px-2 sm:px-6 lg:px-8 md:py-5 lg:py-0">
                        <div className="relative flex h-[80px] md:h-[100px] lg:h-[80px] items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#FE3C47] transition-all hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center gap-3 justify-center md:justify-between sm:flex-col lg:flex-row">
                                <div className="flex flex-shrink-0 items-center">
                                    <a href="/">
                                        <img

                                            className="w-[200px]"
                                            src={logo}
                                            alt="logo"
                                        />
                                    </a>
                                </div>
                                <div className="hidden md:ml-6 md:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    item.href === location.pathname ? 'bg-[#FE3C47] text-white' : 'text-[#333] hover:text-[#FE3C47]',
                                                    'rounded-md px-3 py-2 text-[16px] font-[600] font-fontPopins uppercase'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={classNames(
                                        item.href === location.pathname ? 'bg-[#FE3C47] text-white' : 'text-gray-900 hover:text-[#FE3C47]',
                                        'block rounded-md px-3 py-2 text-base font-medium uppercase'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
