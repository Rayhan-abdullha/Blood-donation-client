import LoginForm from '../components/login/Form'
import MainLayout from '../layout/MainLayout'
const AuthForm = () => {

    return (
        <MainLayout>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mb-[100px]">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <LoginForm />
                </div>
            </div>
        </MainLayout>
    )
}

export default AuthForm
