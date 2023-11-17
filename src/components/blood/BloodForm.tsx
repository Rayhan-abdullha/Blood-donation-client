import { useForm, Controller } from "react-hook-form";
import { BloodInputType } from "../../interface/blood";
const initialData: BloodInputType = {
  title: "",
  place: "",
  nationalID: "",
  phone: "",
  patientInfo: {
    name: "",
    age: "",
    bloodGroup: "",
    phone: "",
    gender: "",
    fatherName: "",
    motherName: "",
    cover: "",
    address: {
      division: "",
      dist: "",
      upazila: "",
      houseName: "",
    },
  },
};

const BloodForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });

  const onSubmitHandler = (data: BloodInputType) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="sm:flex sm:flex-wrap sm:gap-x-[3%]"
    >
      <div className="sm:basis-[47%] grow mb-5">
        <label className="mb-2 block text-[15px]">টাইটেল*</label>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <>
              <input
                {...field}
                className="placeholder:text-[13px] py-2 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]"
                placeholder="কত ব্যাগ রক্ত দরকার?" />
              {errors.title && (
                <small className="text-[#fe3c47] ml-1">
                  {errors.title.message}
                </small>
              )}
            </>
          )}
          rules={{
            required: "টাইটেল বাধ্যতামূলক !",
          }}
        />
      </div>
      <div className="sm:basis-[47%] grow mb-5">
        <label className="mb-2 block text-[15px]">হাসপাতাল / জায়াগার নাম*</label>
        <Controller
          name="place"
          control={control}
          render={({ field }) => (
            <>
              <input
                {...field}
                className="placeholder:text-[13px] py-2 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]" placeholder="রোগী বর্তমানে কোথায় আছেন?"
              />
              {errors.place && (
                <small className="text-[#fe3c47] ml-1">
                  {errors.place.message}
                </small>
              )}
            </>
          )}
          rules={{
            required: "হাসপাতালের নাম বাধ্যতামূলক !",
          }}

        />
      </div>
      <div className="sm:basis-[47%] grow mb-5">
        <label className="mb-2 block text-[15px]">ভোটার আইডি</label>
        <Controller
          name="nationalID"
          control={control}
          render={({ field }) => (
            <>
              <input
                {...field}
                className="placeholder:text-[13px] py-2 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]"
                placeholder="আপনার ভোটার আইডি নাম্বার লিখুন" />
            </>
          )}
        />
      </div>
      <div className="sm:basis-[47%] grow mb-5">
        <label className="mb-2 block text-[15px]">আপনার ফোন নাম্বার*</label>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <>
              <input
                {...field}
                className="placeholder:text-[13px] py-2 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]"
                placeholder="আপনার ফোন নাম্বার দিন" />
              {errors.phone && (
                <small className="text-[#fe3c47] ml-1">
                  {errors.phone.message}
                </small>
              )}
            </>

          )}
          rules={{
            required: "ফোন নাম্বার বাধ্যতামূলক !",
          }}
        />
      </div>
      <div className="sm:basis-[47%] grow mb-5">
        <label className="mb-2 block text-[15px]">রোগীর নাম*</label>
        <Controller
          name="patientInfo.name"
          control={control}
          render={({ field }) => (
            <>
              <input
                {...field}
                className="placeholder:text-[13px] py-2 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]"
                placeholder="রোগীর নাম লিখুন" />
              {errors.patientInfo?.name && (
                <small className="text-[#fe3c47] ml-1">
                  {errors.patientInfo?.name.message}
                </small>
              )}
            </>
          )}
          rules={{
            required: "রোগীর নাম বাধ্যতামূলক",
          }}
        />
      </div>
      <div className="sm:basis-[47%] grow mb-5">
        <label className="mb-2 block text-[15px]">রোগীর বয়স*</label>
        <Controller
          name="patientInfo.age"
          control={control}
          render={({ field }) => (
            <>
              <input
                {...field}
                className="placeholder:text-[13px] py-2 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]"
                placeholder="রোগীর বয়স কত?" />
              {errors.patientInfo?.age && (
                <small className="text-[#fe3c47] ml-1">
                  {errors.patientInfo.age.message}
                </small>
              )}
            </>

          )}
          rules={{
            required: "রোগীর বয়স বাধ্যতামূলক !"
          }}
        />
      </div>
      <div className="sm:basis-[47%] grow mb-5">
        <label className="mb-2 block text-[15px]">রোগীর ব্লাড গ্রুপ*</label>
        <Controller
          name="patientInfo.bloodGroup"
          control={control}
          render={({ field }) => (
            <>
              <select {...field} className='text-[14px] placeholder:text-[13px] py-2 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]'>
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
              {errors.patientInfo?.bloodGroup && <small className='text-[#fe3c47] ml-1'>{errors.patientInfo.bloodGroup.message}</small>}
            </>
          )}
          rules={{
            required: 'রোগীর ব্লাড বাধ্যতামূলক !',
          }}
        />
      </div>
      <div className="sm:basis-[47%] grow mb-5">
        <label className="mb-2 block text-[15px]">রোগীর ফোন নাম্বার*</label>
        <Controller
          name="patientInfo.phone"
          control={control}
          render={({ field }) => (
            <>
              <input
                {...field}
                className="placeholder:text-[13px] py-2 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]"
                placeholder="রোগীর ফোন নাম্বার দিন" />
              {errors.patientInfo?.phone && (
                <small className="text-[#fe3c47] ml-1">
                  {errors.patientInfo.phone.message}
                </small>
              )}
            </>

          )}
          rules={{
            required: "রোগী ফোন নাম্বার বাধ্যতামূলক !"
          }}
        />
      </div>
      <div className="sm:basis-[47%] grow mb-5">
        <label className="mb-2 block text-[15px]">রোগীর জেন্ডার / লিঙ্গ*</label>
        <Controller
          name="patientInfo.gender"
          control={control}
          render={({ field }) => (
            <>
              <select {...field} className='text-[12px] placeholder:text-[13px] py-2 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]' >
                <option className="text-[15px]" value="পুরুষ">পুরুষ</option>
                <option className="text-[15px]" value="মহিলা">মহিলা</option>
                <option className="text-[15px]" value="অন্যান্য">অন্যান্য</option>
              </select>
              {errors.patientInfo?.gender && <small className='text-[#fe3c47] ml-1'>{errors.patientInfo.gender.message}</small>}
            </>
          )}
          rules={{
            required: 'জেন্ডার বাধ্যতামূলক !',
          }}
        />

      </div>

      <div className="sm:basis-[47%] grow mb-5">
        <label className="mb-2 block text-[15px]">রোগীর বাবার নাম*</label>
        <Controller
          name="patientInfo.fatherName"
          control={control}
          render={({ field }) => (
            <>
              <input
                {...field}
                className="placeholder:text-[13px] py-2 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]"
                placeholder="রোগীর বাবার নাম লিখুন" />
              {errors.patientInfo?.fatherName && (
                <small className="text-[#fe3c47] ml-1">
                  {errors.patientInfo.fatherName.message}
                </small>
              )}
            </>
          )}
          rules={{
            required: "রোগীর বাবার নাম বাধ্যতামূলক !",
          }}
        />
      </div>
      <div className="sm:basis-[47%] grow mb-5">
        <label className="mb-2 block text-[15px]">রোগীর মায়ের নাম*</label>
        <Controller
          name="patientInfo.motherName"
          control={control}
          render={({ field }) => (
            <div>
              <input
                {...field}
                className="placeholder:text-[13px] py-2 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]"
                placeholder="রোগীর মায়ের নাম লিখুন" />
              {errors.patientInfo?.motherName && (
                <small className="text-[#fe3c47] ml-1">
                  {errors.patientInfo.motherName.message}
                </small>
              )}
            </div>
          )}
          rules={{
            required: "রোগীর মায়ের নাম বাধ্যতামূলক !",
          }}
        />
      </div>
      <div className='sm:basis-[47%] grow mb-5'>
        <label className='mb-2 block text-[15px]'>রোগীর ছবি</label>
        <Controller
          name="patientInfo.cover"
          control={control}
          render={({ field }) => (
            <>
              <input type='file' {...field} className='placeholder:text-[13px] py-2 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]' />
            </>
          )}
        />
      </div>
      <div className='sm:basis-[47%] grow mb-5'>
        <label className='mb-2 block text-[15px]'>রোগীর বিভাগের নাম*</label>
        <Controller
          name="patientInfo.address.division"
          control={control}
          render={({ field }) => (
            <>
              <input {...field} className='placeholder:text-[13px] py-2 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]' placeholder="রোগীর বিভাগের নাম লিখুন" />
              {errors.patientInfo?.address?.division && <small className='text-[#fe3c47] ml-1'>{errors.patientInfo?.address?.division.message}</small>}
            </>
          )}
          rules={
            {
              required: "বিভাগের নাম বাধ্যতামূলক !"
            }
          }
        />
      </div>
      <div className='sm:basis-[47%] grow mb-5'>
        <label className='mb-2 block text-[15px]'>রোগীর জেলার নাম*</label>
        <Controller
          name="patientInfo.address.dist"
          control={control}
          render={({ field }) => (
            <>
              <input {...field} className='placeholder:text-[13px] py-2 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]' placeholder="রোগীর জেলার নাম লিখুন" />
              {errors.patientInfo?.address?.dist && <small className='text-[#fe3c47] ml-1'>{errors.patientInfo?.address?.dist.message}</small>}
            </>
          )}
          rules={
            {
              required: "জেলার নাম বাধ্যতামূলক !"
            }
          }
        />
      </div>
      <div className='sm:basis-[47%] grow mb-5'>
        <label className='mb-2 block text-[15px]'>রোগীর উপজেলার নাম*</label>
        <Controller
          name="patientInfo.address.upazila"
          control={control}
          render={({ field }) => (
            <>
              <input {...field} className='placeholder:text-[13px] py-2 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]' placeholder="রোগীর উপজেলার নাম লিখুন" />
              {errors.patientInfo?.address?.upazila && <small className='text-[#fe3c47] ml-1'>{errors.patientInfo?.address?.upazila.message}</small>}
            </>
          )}
          rules={
            {
              required: "উপজেলার নাম বাধ্যতামূলক !"
            }
          }
        />
      </div>
      <div className='sm:basis-[47%] grow mb-5'>
        <label className='mb-2 block text-[15px]'>রোগীর বাড়ির নাম*</label>
        <Controller
          name="patientInfo.address.houseName"
          control={control}
          render={({ field }) => (
            <>
              <input {...field} className='placeholder:text-[13px] py-2 pl-3 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-[30px]' placeholder="রোগীর বাড়ির নাম লিখুন" />
              {errors.patientInfo?.address?.houseName && <small className='text-[#fe3c47] ml-1'>{errors.patientInfo?.address?.houseName.message}</small>}
            </>
          )}
          rules={
            {
              required: "রোগীর বাড়ির নাম বাধ্যতামূলক !"
            }
          }
        />
      </div>
      <div className="sm:basis-[47%] grow mb-5 ">
        <button
          className="bg-[#fe3c47]  w-full py-2 text-white text-[18px] hover:bg-red-500 rounded-[30px]"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default BloodForm;
