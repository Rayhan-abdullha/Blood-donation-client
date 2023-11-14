import { useForm, Controller } from "react-hook-form";
import { BloodInputType } from "../../interface/blood";
const initialData: BloodInputType = {
  title: "",
  body: "",
  place: "",
  nationalID: "",
  phone: "",
  patientInfo: {
    name: "",
    age: 0,
    bloodGroup: "",
    phone: "",
    nationalID: "",
    occupation: "",
    gender: "",
    fatherName: "",
    motherName: "",
    cover: "",
    address: {
      country: "",
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
        <label className="mb-2 block text-[14px]">Title*</label>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <>
              <input
                {...field}
                className="p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md"
              />
              {errors.title && (
                <small className="text-[#fe3c47] ml-1">
                  {errors.title.message}
                </small>
              )}
            </>
          )}
          rules={{
            required: "Title is required",
          }}
        />
      </div>
      <div className="sm:basis-[47%] grow mb-5">
        <label className="mb-2 block text-[14px]">Description</label>
        <Controller
          name="body"
          control={control}
          render={({ field }) => (
            <>
              <input
                {...field}
                className="p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md"
              />
            </>
          )}
        />
      </div>
      <div className="sm:basis-[47%] grow mb-5">
        <label className="mb-2 block text-[14px]">Place*</label>
        <Controller
          name="place"
          control={control}
          render={({ field }) => (
            <>
              <input
                {...field}
                className="p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md"
              />
              {errors.place && (
                <small className="text-[#fe3c47] ml-1">
                  {errors.place.message}
                </small>
              )}
            </>
          )}
          rules={{
            required: "Place is required",
          }}

        />
      </div>
      <div className="sm:basis-[47%] grow mb-5">
        <label className="mb-2 block text-[14px]">National ID</label>
        <Controller
          name="nationalID"
          control={control}
          render={({ field }) => (
            <>
              <input
                {...field}
                className="p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md"
              />
              {errors.nationalID && (
                <small className="text-[#fe3c47] ml-1">
                  {errors.nationalID.message}
                </small>
              )}
            </>
          )}
          rules={{
            required: "Place is required",
          }}

        />
      </div>
      <div className="sm:basis-[47%] grow mb-5">
        <label className="mb-2 block text-[14px]">Phone*</label>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <>
              <input
                {...field}
                className="p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md"
              />
              {errors.phone && (
                <small className="text-[#fe3c47] ml-1">
                  {errors.phone.message}
                </small>
              )}
            </>

          )}
          rules={{
            required: "Phone is required",
          }}
        />
      </div>
      <div className="sm:basis-[47%] grow mb-5">
        <label className="mb-2 block text-[14px]">Patient Name*</label>
        <Controller
          name="patientInfo.name"
          control={control}
          render={({ field }) => (
            <>
              <input
                {...field}
                className="p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md"
              />
              {errors.patientInfo?.name && (
                <small className="text-[#fe3c47] ml-1">
                  {errors.patientInfo?.name.message}
                </small>
              )}
            </>
          )}
          rules={{
            required: "Patient Name is required",
          }}
        />
      </div>
      <div className="sm:basis-[47%] grow mb-5">
        <label className="mb-2 block text-[14px]">Patient Age*</label>
        <Controller
          name="patientInfo.age"
          control={control}
          render={({ field }) => (
            <>
              <input
                {...field}
                className="p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md"
              />
              {errors.patientInfo?.age && (
                <small className="text-[#fe3c47] ml-1">
                  {errors.patientInfo.age.message}
                </small>
              )}
            </>

          )}
          rules={{
            required: "Patient age is required"
          }}
        />
      </div>
      <div className="sm:basis-[47%] grow mb-5">
        <label className="mb-2 block text-[14px]">Patient Blood Group*</label>
        <Controller
          name="patientInfo.bloodGroup"
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
              {errors.patientInfo?.bloodGroup && <small className='text-[#fe3c47] ml-1'>{errors.patientInfo.bloodGroup.message}</small>}
            </>
          )}
          rules={{
            required: 'Blood group is required',
          }}
        />
      </div>
      <div className="sm:basis-[47%] grow mb-5">
        <label className="mb-2 block text-[14px]">Patient Phone*</label>
        <Controller
          name="patientInfo.phone"
          control={control}
          render={({ field }) => (
            <>
              <input
                {...field}
                className="p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md"
              />
              {errors.patientInfo?.phone && (
                <small className="text-[#fe3c47] ml-1">
                  {errors.patientInfo.phone.message}
                </small>
              )}
            </>

          )}
          rules={{
            required: "Patient Number is required"
          }}
        />
      </div>
      <div className="sm:basis-[47%] grow mb-5">
        <label className="mb-2 block text-[14px]">Patient National ID</label>
        <Controller
          name="patientInfo.nationalID"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              className="p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md"
            />
          )}

        />
      </div>
      <div className="sm:basis-[47%] grow mb-5">
        <label className="mb-2 block text-[14px]">Patient Occupation*</label>
        <Controller
          name="patientInfo.occupation"
          control={control}
          render={({ field }) => (
            <>
              <input
                {...field}
                className="p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md"
              />
              {errors.patientInfo?.occupation && (
                <small className="text-[#fe3c47] ml-1">
                  {errors.patientInfo.occupation.message}
                </small>
              )}
            </>
          )}
          rules={{
            required: "Patient occupation is required",
          }}
        />
      </div>
      <div className="sm:basis-[47%] grow mb-5">
        <label className="mb-2 block text-[14px]">Gender*</label>
        <Controller
          name="patientInfo.gender"
          control={control}
          render={({ field }) => (
            <>
              <select {...field} className='p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md' >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.patientInfo?.gender && <small className='text-[#fe3c47] ml-1'>{errors.patientInfo.gender.message}</small>}
            </>
          )}
          rules={{
            required: 'Gender is required',
          }}
        />

      </div>

      <div className="sm:basis-[47%] grow mb-5">
        <label className="mb-2 block text-[14px]">Patient Father Name*</label>
        <Controller
          name="patientInfo.fatherName"
          control={control}
          render={({ field }) => (
            <>
              <input
                {...field}
                className="p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md"
              />
              {errors.patientInfo?.fatherName && (
                <small className="text-[#fe3c47] ml-1">
                  {errors.patientInfo.fatherName.message}
                </small>
              )}
            </>
          )}
          rules={{
            required: "Father is required",
          }}
        />
      </div>
      <div className="sm:basis-[47%] grow mb-5">
        <label className="mb-2 block text-[14px]">Patient Mother Name*</label>
        <Controller
          name="patientInfo.motherName"
          control={control}
          render={({ field }) => (
            <div>
              <input
                {...field}
                className="p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md"
              />
              {errors.patientInfo?.motherName && (
                <small className="text-[#fe3c47] ml-1">
                  {errors.patientInfo.motherName.message}
                </small>
              )}
            </div>
          )}
          rules={{
            required: "Father name is required",
          }}
        />
      </div>
      <div className='sm:basis-[47%] grow mb-5'>
        <label className='mb-2 block text-[14px]'>Patient Cover</label>
        <Controller
          name="patientInfo.cover"
          control={control}
          render={({ field }) => (
            <>
              <input type='file' {...field} className='p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md' />
              {errors.patientInfo?.cover && <small className='text-[#fe3c47] ml-1'>{errors.patientInfo.cover.message}</small>}
            </>
          )}
        />
      </div>
      <div className='sm:basis-[47%] grow mb-5'>
        <label className='mb-2 block text-[14px]'>Patient Country Name*</label>
        <Controller
          name="patientInfo.address.country"
          control={control}
          render={({ field }) => (
            <>
              <input {...field} className='p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md' />
              {errors.patientInfo?.address?.country && <small className='text-[#fe3c47] ml-1'>{errors.patientInfo?.address?.country.message}</small>}
            </>
          )}
          rules={
            {
              required: "Country is required"
            }
          }
        />
      </div>
      <div className='sm:basis-[47%] grow mb-5'>
        <label className='mb-2 block text-[14px]'>Patient Division Name*</label>
        <Controller
          name="patientInfo.address.division"
          control={control}
          render={({ field }) => (
            <>
              <input {...field} className='p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md' />
              {errors.patientInfo?.address?.division && <small className='text-[#fe3c47] ml-1'>{errors.patientInfo?.address?.division.message}</small>}
            </>
          )}
          rules={
            {
              required: "Division is required"
            }
          }
        />
      </div>
      <div className='sm:basis-[47%] grow mb-5'>
        <label className='mb-2 block text-[14px]'>Patient District Name*</label>
        <Controller
          name="patientInfo.address.dist"
          control={control}
          render={({ field }) => (
            <>
              <input {...field} className='p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md' />
              {errors.patientInfo?.address?.dist && <small className='text-[#fe3c47] ml-1'>{errors.patientInfo?.address?.dist.message}</small>}
            </>
          )}
          rules={
            {
              required: "District is required"
            }
          }
        />
      </div>
      <div className='sm:basis-[47%] grow mb-5'>
        <label className='mb-2 block text-[14px]'>Patient Upazila Name*</label>
        <Controller
          name="patientInfo.address.upazila"
          control={control}
          render={({ field }) => (
            <>
              <input {...field} className='p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md' />
              {errors.patientInfo?.address?.upazila && <small className='text-[#fe3c47] ml-1'>{errors.patientInfo?.address?.upazila.message}</small>}
            </>
          )}
          rules={
            {
              required: "Upazila is required"
            }
          }
        />
      </div>
      <div className='sm:basis-[47%] grow mb-5'>
        <label className='mb-2 block text-[14px]'>Patient House Name*</label>
        <Controller
          name="patientInfo.address.houseName"
          control={control}
          render={({ field }) => (
            <>
              <input {...field} className='p-2 focus:outline-none ring-1 ring-inset ring-gray-300 w-[100%] rounded-md' />
              {errors.patientInfo?.address?.houseName && <small className='text-[#fe3c47] ml-1'>{errors.patientInfo?.address?.houseName.message}</small>}
            </>
          )}
          rules={
            {
              required: "House name is required"
            }
          }
        />
      </div>
      <div className="sm:basis-[47%] grow mb-5 ">
        <button
          className="bg-[#fe3c47]  w-full py-2 text-white text-[18px] hover:bg-red-500 rounded-md"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default BloodForm;
