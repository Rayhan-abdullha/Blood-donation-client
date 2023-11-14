interface VolunteerInputType {
    occupation: string;
    age: string;
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
        currentAddress: string;
        streetAddress: string;
    };
    cover: string;
}

export type {
    VolunteerInputType
}