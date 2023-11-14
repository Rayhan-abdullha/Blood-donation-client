import { Dispatch, SetStateAction } from "react";

interface Props {
    toggle: boolean
    setToggle: Dispatch<SetStateAction<boolean>>;
}
export const ToggleButton = ({ toggle, setToggle }: Props) => {
    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <p className="mt-4 text-center text-sm text-gray-500">
                Not a volunteer?{' '}
                <button onClick={() => setToggle((prev: boolean) => !prev)} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    {toggle ? 'Login' : 'Register'}
                </button>
            </p>
        </div>
    )
}
