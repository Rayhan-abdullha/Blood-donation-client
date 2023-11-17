import MainLayout from '../layout/MainLayout'
import BloodForm from '../components/blood/BloodForm';
import useScrollTop from '../Hook/useScrollTop';

const BloodRequest = () => {
    useScrollTop()
    return (
        <MainLayout>
            <div className="blood-page container mx-auto xl:w-3/4 px-4 sm:px-6 lg:px-8 py-[30px] sm:py-[40px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
                <div className='blood-section-title mb-[50px] flex justify-center'>
                    <h2 className='text-center text-[20px] sm:text-[30px] font-fontMoonserrat font-[500] bg-slate-200 px-2 py-1 rounded-[30px]'>&#129656; ব্লাডের জন্য আবেদন ফরম &#129656;</h2>
                </div>
                <BloodForm />
            </div>
        </MainLayout>
    );
};


export default BloodRequest;
