import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToggleButton } from './ToggleButton';

interface FormInput {
    name: string;
    email: string;
    password: string;
}

const LoginForm: React.FC = () => {
    const [toggle, setToggle] = useState<boolean>(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInput>();

    const onSubmit: SubmitHandler<FormInput> = (data) => {
        console.log(data);
    };

    return (
        <>
            <h2 className="mb-[50px] text-center text-[25px] font-[500] leading-9 tracking-tight font-fontMoonserrat">
                {!toggle ? 'Login To Your Account' : 'Register For An Account'}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    toggle && <div>
                        <label className="block text-sm font-medium leading-6 text-[#333] my-2">Name:</label>
                        <input
                            className="pl-3 block w-full rounded-md border-0 py-1.5 text-[#333] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:px-1 sm:text-sm sm:leading-6 focus:outline-none"
                            {...register('name', {
                                required: 'Name is required',
                                minLength: {
                                    value: 3,
                                    message: 'Name should have at least 3 characters',
                                },
                            })}
                            type="text"
                            placeholder='Please enter your name'
                        />
                        <p className='text-red-400 text-[13px] ml-1 mt-1'>{errors.name?.message}</p>
                    </div>
                }

                <div>
                    <label className="block text-sm font-medium leading-6 text-[#333] my-2">Email:</label>
                    <input
                        className="pl-3 block w-full rounded-md border-0 py-1.5 text-[#333] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:px-1 sm:text-sm sm:leading-6 focus:outline-none"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Enter a valid email address',
                            },
                        })}
                        type="email"
                        placeholder='Please enter your email'
                    />
                    <p className='text-red-400 text-[13px] ml-1 mt-1'>{errors.email?.message}</p>
                </div>

                <div>
                    <label className="block text-sm font-medium leading-6 text-[#333] my-2">Password:</label>
                    <input
                        className="pl-3 block w-full rounded-md border-0 py-1.5 text-[#333] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:px-1 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 focus:outline-none"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password should have at least 6 characters',
                            },
                        })}
                        type="password"
                        placeholder='Please enter your password'
                    />
                    <p className='text-red-400 text-[13px] ml-1 mt-1'>{errors.password?.message}</p>
                </div>

                <button className='bg-[#fe3c47] hover:bg-red-500 w-full py-2 mt-5 rounded-[5px] text-white' type="submit">{!toggle ? 'Login' : 'Register'}</button>
                <ToggleButton toggle={toggle} setToggle={setToggle} />
            </form>
        </>
    );
};

export default LoginForm;
