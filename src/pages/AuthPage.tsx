import LoginForm from '../components/UI/login/Form'
import MainLayout from '../layout/MainLayout'
const AuthForm = () => {

    return (
        <MainLayout>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mb-[100px]">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Login in to your account
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <LoginForm />
                </div>
            </div>
        </MainLayout>
    )
}

export default AuthForm
