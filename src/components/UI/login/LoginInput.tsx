interface Props {
    level: string,
    type: string
    placeholder: string
}
const LoginInput = ({ level, type, placeholder }: Props) => {
    return (
        <>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                {level}
            </label>
            <div className="mt-2">
                <input
                    id={type}
                    name={type}
                    type={type}
                    autoComplete={type}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:px-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder={placeholder}
                />
            </div>
        </>
    )
}

export default LoginInput