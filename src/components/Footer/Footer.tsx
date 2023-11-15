import { Link } from 'react-router-dom';
import blood from '../../assets/logo-footer.png'
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto xl:w-3/4 px-4 sm:px-6 lg:px-8 pt-[30px] sm:pt-[40px] md:pt-[60px] lg:pt-[80px] xl:pt-[100px]">
                <div className="footer-top-section text-center border-b border-[#454545] pb-[30px]">
                    <div className="footer-logo w-[250px] m-auto">
                        <img src={blood} alt="Logo" className="w-[100%]" />
                    </div>
                    <p className='text-slate-300'>We are trustful blood donation center. We are trying to helping people. We have been working since 2024</p>
                </div>
                <div className="header-main sm:flex sm:justify-evenly border-b border-[#454545] py-10">
                    <div className="contact-info mb-[50px] sm:mb-0">
                        <h3 className='mb-[30px] text-[25px] sm:text-[30px] font-[500]'>Contact Us</h3>
                        <div className='email flex mb-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
                            </svg>
                            <span className='ml-2 text-slate-300'>programmer.rayhan1@gmail.com</span>
                        </div>
                        <div className='phone flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            <span className='ml-2 text-slate-300'>+8801798716196</span>
                        </div>
                    </div>
                    <div className="usefull-link">
                        <h3 className='mb-[30px] text-[25px] sm:text-[30px] font-[500]'>Usefull Link</h3>
                        <ul>
                            <li className='mb-2 text-slate-300'>
                                <Link to={"/about_us"}>About</Link>
                            </li>
                            <li className='mb-2 text-slate-300'>
                                <Link to={"/faq"}>FAQ</Link>
                            </li>
                            <li className='text-slate-300'>
                                <Link to={"/about_us"}>Volunteers</Link>
                            </li>
                            <li className='text-slate-300'>
                                <Link to={"/messenger"}>Chat Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="py-5 text-center">
                    <p>&copy; 2023 Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
