interface VolunteerInputType {
    occupation: string;
    age: number | "";
    gender: string;
    bloodGroup: string;
    study: string;
    phone: string;
    nationalId: string;
    bio: string;
    address: {
        division: string;
        dist: string;
        upazila: string;
        streetAddress: string;
        currentAddress: string;
    };
    cover: string;
}

export type {
    VolunteerInputType
}