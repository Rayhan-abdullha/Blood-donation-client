
import useScrollTop from '../Hook/useScrollTop';
import VolunteerForm from '../components/volunteer/VolunteerForm';
import MainLayout from '../layout/MainLayout'

const VolunteerRequest = () => {
    useScrollTop()
    return (
        <MainLayout>
            <div className="volunteer-page container mx-auto xl:w-3/4 px-4 sm:px-6 lg:px-8 py-[30px] sm:py-[40px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
                <div className='volunteer-section-title mb-[50px] flex justify-center'>
                    <h2 className='text-center text-[20px] sm:text-[30px] font-fontMoonserrat font-[500] bg-slate-200 p-1 rounded-sm'>&#129656; Volunteer Request Form &#129656;</h2>
                </div>
                <VolunteerForm />
            </div>
        </MainLayout>
    );
};


export default VolunteerRequest;
