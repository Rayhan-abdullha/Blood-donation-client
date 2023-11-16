import { useState, useEffect } from 'react';
import logo from '../../assets/logo.png'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './navbar.css'
import { Link, useLocation } from 'react-router-dom';

interface NavigationItem {
    name: string;
    href: string
}
const user = true
const navigation: NavigationItem[] = [
    { name: 'হোম', href: '/' },
    { name: 'রক্তের আবেদন', href: '/blood_request' },
    { name: 'ডোনার হতে', href: '/be_volunteer' },
    { name: 'ম্যাসেঞ্জার', href: '/messenger' }
]
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [isSticky, setIsSticky] = useState(false);
    const location = useLocation()

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
                                                    'rounded-md px-3 py-2 text-[17px] font-[600] transition-all duration-500'
                                                )}
                                                aria-current={item.href === location.pathname ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}

                                        {
                                            user ? <>
                                                <Link
                                                    to={"/logout"}
                                                    className={classNames(
                                                        'text-[#333] hover:text-[#FE3C47]rounded-md px-3 py-2 text-[17px] font-[600] uppercase transition-all duration-500'
                                                    )}
                                                    aria-current={'/logout' === location.pathname ? 'page' : undefined}
                                                >
                                                    লগ আউট
                                                </Link>
                                                <Link to={'/profile'} className=''>
                                                    <img className={`${location.pathname === '/profile' && 'bg-red-500  p-1'} inline-block h-10 w-10 rounded-full ring-2 ring-white shadow-xl`}
                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                        alt="notfound"
                                                    />
                                                </Link>
                                            </> : <Link
                                                to={"/login"}
                                                className={classNames(
                                                    '/login' === location.pathname ? 'bg-[#FE3C47] text-white' : 'text-[#333] hover:text-[#FE3C47]',
                                                    'rounded-md px-3 py-2 text-[16px] font-[600] uppercase transition-all duration-500'
                                                )}
                                                aria-current={'/login' === location.pathname ? 'page' : undefined}
                                            >
                                                Login
                                            </Link>
                                        }
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
                                        'block rounded-md px-3 py-2 text-base font-[600] uppercase transition-all duration-500'
                                    )}
                                    aria-current={item.href === location.pathname ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            {
                                user ? <>
                                    <Link
                                        to={"/logout"}
                                        className={classNames(
                                            'text-[#333] hover:text-[#FE3C47] rounded-md px-3 py-2 text-[17px] font-[600] block transition-all duration-500'
                                        )}
                                        aria-current={'logout' === location.pathname ? 'page' : undefined}
                                    >
                                        লগ আউট
                                    </Link>
                                    <Link to={'/profile'} className='block ml-[10px]'>
                                        <img className={`${location.pathname === '/profile' && 'bg-red-500  p-1'} inline-block h-10 w-10 rounded-full ring-2 ring-white shadow-xl`}
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </Link>
                                </> : <Link
                                    to={"/login"}
                                    className={classNames(
                                        'login' === location.pathname ? 'bg-[#FE3C47] text-white' : 'text-[#333] hover:text-[#FE3C47]',
                                        'rounded-md px-3 py-2 text-[16px] font-[600] uppercase transition-all duration-500'
                                    )}
                                    aria-current={'login' === location.pathname ? 'page' : undefined}
                                >
                                    Login
                                </Link>
                            }
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
