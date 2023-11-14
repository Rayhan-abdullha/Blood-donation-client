interface BloodInputType {
    title: string;
    body?: string;
    place: string;
    nationalID?: string;
    phone: string;
    patientInfo: {
        name: string;
        age: 0;
        bloodGroup: string;
        phone: string;
        nationalID?: string;
        occupation: string;
        gender: string;
        fatherName: string;
        motherName: string;
        cover?: string;
        address: {
            country: string;
            division: string;
            dist: string;
            upazila: string;
            houseName: string;
        }
    }
}

export type {
    BloodInputType
}