export interface UserInterface {
    id: number;
    name?: string;
    username?: string;
    email: string;
    address?: Address;
    phone?: string;
    website?: string;
    company?: Company;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Geo {
    lat: number | string;
    lng: number | string;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface AddUserForm {
    addUser: (value: string) => void
}