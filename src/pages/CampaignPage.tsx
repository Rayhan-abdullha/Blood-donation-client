import SecondaryLayout from "../layout/SecondaryLayout"
import bg from '../assets/banner/header-bg.jpg'
import campaign1 from '../assets/campaign.jpg'
const CampaignPage = () => {
    return (
        <SecondaryLayout title="Campagin" bgImg={bg}>
            <section className="campaign-section-title text-center">
                <h2 className="text-md">Finished Campaign</h2>
                <p>We are complete lot of campaigns successfully</p>
            </section>
            <div className="completed-campaign grid grid-cols-3 gap-5">
                <div className="campaing-card">
                    <div className="campaign-img">
                        <img src={campaign1} alt="not found" />
                    </div>
                    <h2>দুই দিনের ব্লাড চেক করা হবে।</h2>
                </div>
                <div className="campaing-card">
                    <div className="campaign-img">
                        <img src={campaign1} alt="not found" />
                    </div>
                    <h2>দুই দিনের ব্লাড চেক করা হবে।</h2>
                </div>
                <div className="campaing-card">
                    <div className="campaign-img">
                        <img src={campaign1} alt="not found" />
                    </div>
                    <h2>দুই দিনের ব্লাড চেক করা হবে।</h2>
                </div>
            </div>
        </SecondaryLayout>
    )
}

export default CampaignPage