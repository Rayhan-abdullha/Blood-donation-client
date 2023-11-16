import { useNavigate } from 'react-router-dom';
import MainLayout from './../layout/MainLayout';
import useScrollTop from '../Hook/useScrollTop';

const ProfilePage = () => {
    useScrollTop()
    const navigate = useNavigate()
    return (
        <MainLayout>
            <div className="h-full bg-gray-200">
                <div className="bg-white rounded-lg shadow-xl pb-8">
                    <div className="w-full h-[250px]">
                        <img src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg" className="w-full h-full" />
                    </div>
                    <div className="flex flex-col items-center -mt-20">
                        <img src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg" className="w-40 border-4 border-white rounded-full" />
                        <div className="flex items-center space-x-2 mt-2">
                            <p className="text-2xl">Amanda Ross</p>
                            <span className="bg-blue-500 rounded-full p-1" title="Verified">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </span>
                        </div>
                        <p className="text-gray-700">Senior Software Engineer at Tailwind CSS</p>
                        <p className="text-sm text-gray-500">New York, USA</p>
                    </div>
                    <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
                        <div className="flex items-center space-x-4 mt-2">
                            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                                </svg>
                                <span>Connect</span>
                            </button>
                            <button onClick={() => navigate('/messenger')} className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path>
                                </svg>
                                <span>Message</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto xl:w-3/4 px-4 sm:px-6 lg:px-8 mt-10">
                    <div className="w-full flex flex-col 2xl:w-1/3">
                        <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                            <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
                            <ul className="mt-2 text-gray-700">
                                <li className="flex border-y py-2">
                                    <span className="font-bold w-24">Full name:</span>
                                    <span className="text-gray-700">Amanda S. Ross</span>
                                </li>
                                <li className="flex border-b py-2">
                                    <span className="font-bold w-24">Birthday:</span>
                                    <span className="text-gray-700">24 Jul, 1991</span>
                                </li>
                                <li className="flex border-b py-2">
                                    <span className="font-bold w-24">Joined:</span>
                                    <span className="text-gray-700">10 Jan 2022 (25 days ago)</span>
                                </li>
                                <li className="flex border-b py-2">
                                    <span className="font-bold w-24">Mobile:</span>
                                    <span className="text-gray-700">(123) 123-1234</span>
                                </li>
                                <li className="flex border-b py-2">
                                    <span className="font-bold w-24">Email:</span>
                                    <span className="text-gray-700">amandaross@example.com</span>
                                </li>
                                <li className="flex border-b py-2">
                                    <span className="font-bold w-24">Location:</span>
                                    <span className="text-gray-700">New York, US</span>
                                </li>
                                <li className="flex border-b py-2">
                                    <span className="font-bold w-24">Languages:</span>
                                    <span className="text-gray-700">English, Spanish</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
                            <h4 className="text-xl text-gray-900 font-bold">Activity log</h4>
                            <div className="relative px-4">
                                <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>
                                <div className="flex items-center w-full my-6 -ml-1.5">
                                    <div className="w-1/12 z-10">
                                        <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                                    </div>
                                    <div className="w-11/12">
                                        <p className="text-sm">Profile informations changed.</p>
                                        <p className="text-xs text-gray-500">3 min ago</p>
                                    </div>
                                </div>

                                <div className="flex items-center w-full my-6 -ml-1.5">
                                    <div className="w-1/12 z-10">
                                        <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                                    </div>
                                    <div className="w-11/12">
                                        <p className="text-sm">
                                            Connected with <a href="#" className="text-blue-600 font-bold">Colby Covington</a>.</p>
                                        <p className="text-xs text-gray-500">15 min ago</p>
                                    </div>
                                </div>

                                <div className="flex items-center w-full my-6 -ml-1.5">
                                    <div className="w-1/12 z-10">
                                        <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                                    </div>
                                    <div className="w-11/12">
                                        <p className="text-sm">Invoice <a href="#" className="text-blue-600 font-bold">#4563</a> was created.</p>
                                        <p className="text-xs text-gray-500">57 min ago</p>
                                    </div>
                                </div>

                                <div className="flex items-center w-full my-6 -ml-1.5">
                                    <div className="w-1/12 z-10">
                                        <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                                    </div>
                                    <div className="w-11/12">
                                        <p className="text-sm">
                                            Message received from <a href="#" className="text-blue-600 font-bold">Cecilia Hendric</a>.</p>
                                        <p className="text-xs text-gray-500">1 hour ago</p>
                                    </div>
                                </div>

                                <div className="flex items-center w-full my-6 -ml-1.5">
                                    <div className="w-1/12 z-10">
                                        <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                                    </div>
                                    <div className="w-11/12">
                                        <p className="text-sm">New order received <a href="#" className="text-blue-600 font-bold">#OR9653</a>.</p>
                                        <p className="text-xs text-gray-500">2 hours ago</p>
                                    </div>
                                </div>

                                <div className="flex items-center w-full my-6 -ml-1.5">
                                    <div className="w-1/12 z-10">
                                        <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                                    </div>
                                    <div className="w-11/12">
                                        <p className="text-sm">
                                            Message received from <a href="#" className="text-blue-600 font-bold">Jane Stillman</a>.</p>
                                        <p className="text-xs text-gray-500">2 hours ago</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
export default ProfilePage