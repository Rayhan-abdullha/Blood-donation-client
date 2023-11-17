
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
        currentAddress: ""
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
                <label className='mb-2 block text-[14px]'>আপনার সম্পর্কে*</label>
                <Controller
                    name="bio"
                    control={control}
                    render={({ field }) => <textarea {...field} className='placeholder:text-[13px] placeholder:pt-2 pl-5 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[50px]' placeholder="আপনার জীবন বৃত্তান্ত লিখুন" />}
                />
            </div>
            <div className='sm:basis-[47%] grow mb-5'>
                <label className='mb-2 block text-[1৫px]'>আপনার পেশা*</label>
                <Controller
                    name="occupation"
                    control={control}
                    render={({ field }) => (
                        <>
                            <input {...field} className='placeholder:text-[13px] py-2 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]' placeholder="আপনার পেশা লিখুন" />
                            {errors.occupation && <small className='text-[#fe3c47] ml-1'>{errors.occupation.message}</small>}
                        </>
                    )}
                    rules={{
                        required: 'পেশা বাধ্যতামূলক !',
                    }}
                />
            </div>
            <div className='sm:basis-[47%] grow mb-5'>
                <label className='mb-2 block text-[15px]'>আপনার বয়স*</label>
                <Controller
                    name="age"
                    control={control}
                    render={({ field }) => (
                        <>
                            <input {...field} className='placeholder:text-[13px] py-2 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]' placeholder='আপনার বয়স লিখুন ' />
                            {errors.age && <small className='text-[#fe3c47] ml-1'>{errors.age.message}</small>}
                        </>
                    )}
                    rules={{
                        required: 'বয়স বাধ্যতামূলক !',
                    }}
                />
            </div>
            <div className='sm:basis-[47%] grow mb-5'>
                <label className='mb-2 block text-[14px]'>রোগীর জেন্ডার / লিঙ্গ*</label>
                <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                        <>
                            <select {...field} className='text-[12px] placeholder:text-[13px] py-3 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]' >
                                <option className="text-[15px]" value="পুরুষ">পুরুষ</option>
                                <option className="text-[15px]" value="মহিলা">মহিলা</option>
                                <option className="text-[15px]" value="অন্যান্য">অন্যান্য</option>
                            </select>
                            {errors.gender && <small className='text-[#fe3c47] ml-1'>{errors.gender.message}</small>}
                        </>
                    )}
                    rules={{
                        required: 'জেন্ডার বাধ্যতামূলক !',
                    }}
                />
            </div>
            <div className='sm:basis-[47%] grow mb-5'>
                <label className='mb-2 block text-[14px]'>ব্লাড গ্রুপ*</label>
                <Controller
                    name="bloodGroup"
                    control={control}
                    render={({ field }) => (
                        <>
                            <select {...field} className='text-[14px] placeholder:text-[13px] py-[10px] pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]'>
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
                        required: 'ব্লাড গ্রুপ বাধ্যতামূলক !',
                    }}
                />
            </div>
            <div className='sm:basis-[47%] grow mb-5'>
                <label className='mb-2 block text-[14px]'>পড়ালেখা</label>
                <Controller
                    name="study"
                    control={control}
                    render={({ field }) => <input {...field} className='placeholder:text-[13px] py-2 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]' placeholder='আপনি কোথায় পড়েন লিখুন' />}
                />

            </div>
            <div className='sm:basis-[47%] grow mb-5'>
                <label className='mb-2 block text-[14px]'>আপনার ফোন নাম্বার*</label>
                <Controller
                    name="phone"
                    control={control} render={({ field }) => (
                        <>
                            <input {...field} className='placeholder:text-[13px] py-2 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]' placeholder="আপনার ফোন নাম্বার লিখুন" />
                            {errors.phone && <small className='text-[#fe3c47] ml-1'>{errors.phone.message}</small>}
                        </>
                    )}
                    rules={{
                        required: 'ফোন নাম্বার বাধ্যতামূলক !',
                    }}
                />
            </div>
            <div className='sm:basis-[47%] grow mb-5'>
                <label className='mb-2 block text-[14px]'>আপনার পিকচার</label>
                <Controller
                    name="cover"
                    control={control}
                    render={({ field }) => (
                        <>
                            <input type='file' {...field} className='placeholder:text-[13px] py-2 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]' />
                            {errors.occupation && <small className='text-[#fe3c47] ml-1'>{errors.occupation.message}</small>}
                        </>
                    )}
                />
            </div>
            <div className='sm:basis-[47%] grow mb-5'>
                <label className='mb-2 block text-[14px]'>ভোটার আইডি</label>
                <Controller
                    name="nationalId"
                    control={control}
                    render={({ field }) => <input {...field} className='placeholder:text-[13px] py-2 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]' placeholder="আপনার ভোটার আইডি লিখুন" />}
                />
            </div>
            <div className='sm:basis-[47%] grow mb-5'>
                <label className='mb-2 block text-[14px]'>বিভাগের নাম*</label>
                <Controller
                    name="address.division"
                    control={control}
                    render={({ field }) => (
                        <>
                            <input {...field} className='placeholder:text-[13px] py-2 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]' placeholder="আপনার বিভাগের নাম লিখুন" />
                            {errors.address?.division && <small className='text-[#fe3c47] ml-1'>{errors.address.division.message}</small>}
                        </>
                    )}
                    rules={{
                        required: 'বিভাগে বাধ্যতামূলক',
                    }}
                />
            </div>
            <div className='sm:basis-[47%] grow mb-5'>
                <label className='mb-2 block text-[14px]'>জেলা নাম*</label>
                <Controller
                    name="address.dist"
                    control={control}
                    render={({ field }) => (
                        <>
                            <input {...field} className='placeholder:text-[13px] py-2 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]' placeholder="আপনার উপজেলার নাম লিখুন" />
                            {errors.address?.dist && <small className='text-[#fe3c47] ml-1'>{errors.address.dist.message}</small>}
                        </>
                    )}
                    rules={{
                        required: 'জেলা বাধ্যতামূলক',
                    }}
                />
            </div>

            <div className='sm:basis-[47%] grow mb-5'>
                <label className='mb-2 block text-[14px]'>উপজেলার নাম*</label>
                <Controller
                    name="address.upazila"
                    control={control} render={({ field }) => (
                        <>
                            <input {...field} className='placeholder:text-[13px] py-2 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]' placeholder="আপনার উপজেলার নাম লিখুন" />
                            {errors.address?.upazila && <small className='text-[#fe3c47] ml-1'>{errors.address?.upazila.message}</small>}
                        </>
                    )}
                    rules={{
                        required: 'উপজেলা বাধ্যতামূলক',
                    }}
                />
            </div>
            <div className='sm:basis-[47%] grow mb-5'>
                <label className='mb-2 block text-[14px]'>গ্রামের বাড়ির ঠিকানা*</label>
                <Controller
                    name="address.currentAddress"
                    control={control}
                    render={({ field }) => (
                        <>
                            <input {...field} className='placeholder:text-[13px] py-2 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]' placeholder="আপনার গ্রামের বাড়ির টিকানা লিখুন" />
                            {errors.address?.currentAddress && <small className='text-[#fe3c47] ml-1'>{errors.address.currentAddress.message}</small>}
                        </>
                    )}
                    rules={{
                        required: 'ঠিকানা বাধ্যতামূলক !',
                    }}
                />
            </div>
            <div className='sm:basis-[47%] grow mb-5'>
                <label className='mb-2 block text-[14px]'>বর্তমান ঠিকানা*</label>
                <Controller
                    name="address.currentAddress"
                    control={control}
                    render={({ field }) => (
                        <>
                            <input {...field} className='placeholder:text-[13px] py-2 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]' placeholder="আপনি কথায় থাকেন লিখুন" />
                            {errors.address?.currentAddress && <small className='text-[#fe3c47] ml-1'>{errors.address.currentAddress.message}</small>}
                        </>
                    )}
                    rules={{
                        required: 'ঠিকানা বাধ্যতামূলক !',
                    }}
                />
            </div>
            <div className='sm:basis-[47%] grow mb-5 '>
                <button className='bg-[#fe3c47]  w-full py-2 text-white text-[18px] hover:bg-red-500 rounded-[30px]' type="submit">Submit</button>
            </div>
        </form>
    );
};

export default VolunteerForm;
