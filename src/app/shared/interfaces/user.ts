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