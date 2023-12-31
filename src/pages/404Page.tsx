import { Link } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
const NotFoundPage = () => {
    return (
        <MainLayout>

            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-[30px] font-semibold text-[#FE3C47]">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page Not Found</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to={'/'}
                            className="rounded-md bg-[#FE3C47] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Go Back Home
                        </Link>

                    </div>
                </div>
            </main>

        </MainLayout>
    )
}

export default NotFoundPage