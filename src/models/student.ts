import { ISimplifiedGrade } from "./grade";

export interface IStudent {
    id: number;
    name: string;
    address: string;
    email: string;
    phoneNumber: string;
    registrationNumber: string;
    grades: ISimplifiedGrade[];
}

export interface IStudents {
    data: IStudent[];
}

export interface ISimplifiedStudent {
    id: number;
    name: string;
}
