
import { useParams } from 'react-router-dom';
import bg from '../../assets/banner/header-bg.jpg';
import SecondaryLayout from '../../layout/SecondaryLayout';

const data = {
    id: '65548ddb296d5032466cee6d',
    name: 'amanika',
    age: '26',
    status: 'pending',
    bloodGroup: 'o+',
    gender: 'male',
    donateCount: 0,
    study: 'honours 3rd year',
    cover: 'https://textiletoday.com.bd/storage/uploads/2022/01/Abdullah-Hil-Rakib-Team-Group-factory.jpg',
    address: {
        division: 'barishal',
        dist: 'Bhola',
        upazila: 'Charfassion',
        currentAddress: 'Dhaka',
        streetAddress: 'Charfassion',
        country: 'Bangladesh',
    },
};

const SingleVolunteer = () => {
    const { id } = useParams();

    return (
        <SecondaryLayout bgImg={bg} title="Single Volunteer Info">
            <div className="container mx-auto">
                <div className="mt-8 bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
                    <div className="max-w-full">
                        <img
                            src={data.cover}
                            alt={data.name}
                            className="w-full h-64 object-cover rounded-lg shadow-md"
                        />
                    </div>
                    <div>
                        <div className="px-4 sm:px-0 mt-5 mb-2">
                            <h3 className="text-[20px] font-[500] leading-7 text-gray-900">Volunteer Information</h3>
                            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal Details and Information</p>
                        </div>
                        <div className="mt-6 border-t border-gray-100">
                            <div className="divide-y divide-gray-100">
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Application for</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">$120,000</dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</dd>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SecondaryLayout>
    );
};

export default SingleVolunteer;
