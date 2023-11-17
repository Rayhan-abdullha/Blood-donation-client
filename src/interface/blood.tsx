interface BloodInputType {
    title: string;
    place: string;
    nationalID?: string;
    phone: string;
    patientInfo: {
        name: string;
        age: string;
        bloodGroup: string;
        phone: string;
        gender: string;
        fatherName: string;
        motherName: string;
        cover?: string;
        address: {
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