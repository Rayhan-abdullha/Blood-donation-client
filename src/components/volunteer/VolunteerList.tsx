import { useNavigate } from "react-router-dom"

const data = [
    {
        id: "k@3ala3kdladc33bpwo3",
        name: "Abir Khan",
        cover: "https://textiletoday.com.bd/storage/uploads/2022/01/Abdullah-Hil-Rakib-Team-Group-factory.jpg",
        donateCount: 5,
        status: "volunteer",
        links: "/volunteers/k@3ala3kdladc33bpwo3",
        createdAt: "10:33:21",
        updatedAt: "10:33:21"
    },
    {
        id: "k@3ala3kdlaasdfdc33bpwo3",
        name: "Rayhan Abdullah",
        cover: "https://media.istockphoto.com/id/1350474131/photo/business-team-portrait.jpg?s=612x612&w=0&k=20&c=_rwVn8lkmzXc-_Q5tSyH-Jt0tt_acwxvXVYCckg8v0M=",
        donateCount: 5,
        status: "volunteer",
        links: "/volunteers/k@3ala3kdladc33bpwo3",
        createdAt: "10:33:21",
        updatedAt: "10:33:21"
    },
    {
        id: "k@3alaa3ksdafdladcwo3",
        name: "Nazim",
        cover: "https://images.unsplash.com/photo-1699211879634-eda3fa35cc2a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        donateCount: 5,
        status: "volunteer",
        links: "/volunteers/k@3ala3kdladc33bpwo3",
        createdAt: "10:33:21",
        updatedAt: "10:33:21"
    },
]

interface Props {
    subtitle: string
    heading: string
}

const VolunteerList = ({ subtitle, heading }: Props) => {
    const navigate = useNavigate()
    return (
        <div className="volunteers-area container mx-auto xl:w-3/4 px-4 sm:px-6 lg:px-8 py-[30px] sm:py-[40px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
            <div className="volunteer-section-title mb-12 relative">
                <h3 className="subtitle font-fontPopins relative text-red-500 font-[500] text-[20px] mb-2 inline-block">{subtitle}

                </h3>
                <h2 className='text-[25px] sm:text-[35px] font-[500]'>{heading}</h2>
            </div>

            <div className="all-volunteers grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    data.map(item => (
                        <div onClick={() => navigate(`/volunteers/${item.id}`)} className="single-volunteer border-solid border-[1px] shadow-lg shadow-black-500/3 p-5 cursor-pointer bg-slate-50" key={item.id}>
                            <div className="volunteer-img relative h-[300px] overflow-hidden img-hover-zoom--colorize">
                                <img className="rounded-lg h-[100%] w-[100%] object-cover" src={item.cover} alt="notfound" />
                                <span className="absolute top-0 right-0 bg-red-500 text-teal-50 p-1 uppercase text-[14px] rounded-sm">{item.status}</span>
                            </div>
                            <h2 className="mt-5 ml-1 font-[500] text-[18px] uppercase mb-2">{item.name}</h2>
                            <h5 className="uppercase ml-1 text-[14px]">Donet: {item.donateCount} times</h5>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default VolunteerList