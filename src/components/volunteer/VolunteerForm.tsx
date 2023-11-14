
import { useForm, Controller } from 'react-hook-form';
import { VolunteerInputType } from '../../interface/volunteer';

const initialData: VolunteerInputType = {
    occupation: "",
    age: "",
    gender: "",
    bloodGroup: "",
    study: "",
    phone: "",
    cover: "",
    nationalId: "",
    bio: "",
    address: {
        division: "",
        dist: "",
        upazila: "",
        currentAddress: "",
        streetAddress: "",
    },
};

const VolunteerForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: initialData,

    });

    const onSubmitHandler = (data: VolunteerInputType) => {
        console.log(data);

    };

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)} className='sm:flex sm:flex-wrap sm:gap-x-[3%]'>
            <div className='sm:basis-[47%] grow mb-5'>
                <label className='mb-2 block text-[14px]'>Occupation*</label>
                <Controller
                    name="occupation"
                    control={control}
                    render={({ field }) => (
                        <>
                            <input {...field} className='p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md' />
                            {errors.occupation && <small className='text-[#fe3c47] ml-1'>{errors.occupation.message}</small>}
                        </>
                    )}
                    rules={{
                        required: 'Occupation is required',
                    }}
                />
            </div>
            <div className='sm:basis-[47%] grow mb-5'>
                <label className='mb-2 block text-[14px]'>Age*</label>
                <Controller
                    name="age"
                    control={control}
                    render={({ field }) => (
                        <>
                            <input {...field} className='p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md' />
                            {errors.age && <small className='text-[#fe3c47] ml-1'>{errors.age.message}</small>}
                        </>
                    )}
                    rules={{
                        required: 'Age is required',
                    }}
                />
            </div>
            <div className='sm:basis-[47%] grow mb-5'>
                <label className='mb-2 block text-[14px]'>Gender*</label>
                <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                        <>
                            <select {...field} className='p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md' >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            {errors.gender && <small className='text-[#fe3c47] ml-1'>{errors.gender.message}</small>}
                        </>
                    )}
                    rules={{
                        required: 'Gender is required',
                    }}
                />
            </div>
            <div className='sm:basis-[47%] grow mb-5'>
                <label className='mb-2 block text-[14px]'>Blood Group*</label>
                <Controller
                    name="bloodGroup"
                    control={control}
                    render={({ field }) => (
                        <>
                            <select {...field} className='p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md'>
                                <option value="A+">
                                    A+
                                </option>
                                <option value="A-">
                                    A-
                                </option>
                                <option value="B+">
                                    B+
                                </option>
                                <option value="B-">
                                    B-
                                </option>
                                <option value="O+">
                                    O+
                                </option>
                                <option value="O-">
                                    O-
                                </option>
                                <option value="AB+">
                                    AB+
                                </option>
                                <option value="AB-">
                                    AB-
                                </option>
                            </select>
                            {errors.bloodGroup && <small className='text-[#fe3c47] ml-1'>{errors.bloodGroup.message}</small>}
                        </>
                    )}
                    rules={{
                        required: 'Blood is required',
                    }}
                />
            </div>
            <div className='sm:basis-[47%] grow mb-5'>
                <label className='mb-2 block text-[14px]'>Study</label>
                <Controller
                    name="study"
                    control={control}
                    render={({ field }) => <input {...field} className='p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md' />}
                />

            </div>
            <div className='sm:basis-[47%] grow mb-5'>
                <label className='mb-2 block text-[14px]'>Phone*</label>
                <Controller
                    name="phone"
                    control={control} render={({ field }) => (
                        <>
                            <input {...field} className='p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md' />
                            {errors.phone && <small className='text-[#fe3c47] ml-1'>{errors.phone.message}</small>}
                        </>
                    )}
                    rules={{
                        required: 'Phone is required',
                    }}
                />
            </div>
            <div className='sm:basis-[47%] grow mb-5'>
                <label className='mb-2 block text-[14px]'>Cover</label>
                <Controller
                    name="cover"
                    control={control}
                    render={({ field }) => (
                        <>
                            <input type='file' {...field} className='p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md' />
                            {errors.occupation && <small className='text-[#fe3c47] ml-1'>{errors.occupation.message}</small>}
                        </>
                    )}
                />
            </div>
            <div className='sm:basis-[47%] grow mb-5'>
                <label className='mb-2 block text-[14px]'>National ID</label>
                <Controller
                    name="nationalId"
                    control={control}
                    render={({ field }) => <input {...field} className='p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md' />}
                />
            </div>
            <div className='sm:basis-[47%] grow mb-5'>
                <label className='mb-2 block text-[14px]'>Bio</label>
                <Controller
                    name="bio"
                    control={control}
                    render={({ field }) => <textarea {...field} className='p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md' />}
                />
            </div>
            <div className='sm:basis-[47%] grow mb-5'>
                <label className='mb-2 block text-[14px]'>Division*</label>
                <Controller
                    name="address.division"
                    control={control}
                    render={({ field }) => (
                        <>
                            <input {...field} className='p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md' />
                            {errors.address?.division && <small className='text-[#fe3c47] ml-1'>{errors.address.division.message}</small>}
                        </>
                    )}
                    rules={{
                        required: 'Division is required',
                    }}
                />
            </div>
            <div className='sm:basis-[47%] grow mb-5'>
                <label className='mb-2 block text-[14px]'>District*</label>
                <Controller
                    name="address.dist"
                    control={control}
                    render={({ field }) => (
                        <>
                            <input {...field} className='p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md' />
                            {errors.address?.dist && <small className='text-[#fe3c47] ml-1'>{errors.address.dist.message}</small>}
                        </>
                    )}
                    rules={{
                        required: 'District is required',
                    }}
                />
            </div>

            <div className='sm:basis-[47%] grow mb-5'>
                <label className='mb-2 block text-[14px]'>Upazila*</label>
                <Controller
                    name="address.upazila"
                    control={control} render={({ field }) => (
                        <>
                            <input {...field} className='p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md' />
                            {errors.address?.upazila && <small className='text-[#fe3c47] ml-1'>{errors.address?.upazila.message}</small>}
                        </>
                    )}
                    rules={{
                        required: 'Upazila is required',
                    }}
                />
            </div>

            <div className='sm:basis-[47%] grow mb-5'>
                <label className='mb-2 block text-[14px]'>Current Address*</label>
                <Controller
                    name="address.currentAddress"
                    control={control}
                    render={({ field }) => (
                        <>
                            <input {...field} className='p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md' />
                            {errors.address?.currentAddress && <small className='text-[#fe3c47] ml-1'>{errors.address.currentAddress.message}</small>}
                        </>
                    )}
                    rules={{
                        required: 'CurrentAddress is required',
                    }}
                />
            </div>
            <div className='sm:basis-[47%] grow mb-5'>
                <label className='mb-2 block text-[14px]'>Street Address*</label>
                <Controller
                    name="address.streetAddress"
                    control={control}
                    render={({ field }) => (
                        <div>
                            <input {...field} className='p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md' />
                            {errors.address?.streetAddress && <small className='text-[#fe3c47] ml-1'>{errors.address.streetAddress.message}</small>}
                        </div>
                    )}
                    rules={{
                        required: 'StreetAddress is required',
                    }}
                />
            </div>
            <div className='sm:basis-[47%] grow mb-5 '>
                <button className='bg-[#fe3c47]  w-full py-2 text-white text-[18px] hover:bg-red-500 rounded-md' type="submit">Submit</button>
            </div>
        </form>
    );
};

export default VolunteerForm;
