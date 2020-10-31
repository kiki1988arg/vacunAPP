export class User {
    name: string;
    lastName: string;
    NIF: string;
    email: string;
    password: string;
    photoUrl: string;
    gender: string;
    BornDate: Date;
    token?: string;
}

export interface loginForm {
    email: string;
    password: string;
}

export interface Institute {
    name: string;
    address: string;
    locale: string;
    time: string;
    lat: string;
    long: string;
    phone: string;
}

export interface Vaccine {
    Name: string;
    Description: string;
    Inyection: string;
    Month: number;
    ApplicationType: string;
    ExtraInfo: string;
}

export interface Person {
    id: number;
    name: string;
    lastName: string;
    nif: string;
    gender: string;
    bornDate: Date;
}