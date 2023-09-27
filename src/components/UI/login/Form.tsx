import { useState } from 'react'
import LoginInput from './LoginInput'
import ForgatePassword from './ForgatePassword'
import { ToggleButton } from './ToggleButton'
// import { ToggleButton } from './ToggleButton'

const LoginForm = () => {
    const [toggle, setToggle]: [boolean, (value: boolean) => void] = useState<boolean>(false)

    return (
        <form className="space-y-6" >
            {!toggle && <LoginInput level="Your Name" type='name' placeholder='Enter your name' />}
            <LoginInput level="Email Address" type='email' placeholder='Enter your email' />
            <LoginInput level="Password" type='password' placeholder='Enter strong password' />
            <ForgatePassword />
            <button
                type="submit"
                className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm bg-[#fe3c47] hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                {toggle ? 'Login' : 'Register'}
            </button>
            <ToggleButton toggle={toggle} setToggle={setToggle} />
        </form>
    )
}

export default LoginForm